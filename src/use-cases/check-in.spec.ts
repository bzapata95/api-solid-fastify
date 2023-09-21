import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-in-repository'
import { CheckInUseCase } from './checki-in'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime/library'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckInUseCase(checkInsRepository, gymsRepository)

    gymsRepository.items.push({
      id: 'gym-id',
      title: 'Acedemia',
      description: '',
      phone: '',
      latitude: new Decimal(-12.1536512),
      longitude: new Decimal(-77.0015232),
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -12.1536512,
      userLongitude: -77.0015232,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  // red -> green -> refactor

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -12.1536512,
      userLongitude: -77.0015232,
    })

    await expect(
      sut.execute({
        gymId: 'gym-id',
        userId: 'user-id',
        userLatitude: -12.1536512,
        userLongitude: -77.0015232,
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should  be able to check in twice but in different day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -12.1536512,
      userLongitude: -77.0015232,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -12.1536512,
      userLongitude: -77.0015232,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in in on distant gym', async () => {
    gymsRepository.items.push({
      id: 'gym-id2',
      title: 'Acedemia',
      description: '',
      phone: '',
      latitude: new Decimal(12.182849),
      longitude: new Decimal(-76.948308),
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-id2',
        userId: 'user-id',
        userLatitude: -12.1536512,
        userLongitude: -77.0015232,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})

// 12.182849, -76.948308
