import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near gym',
      latitude: -12.1536512,
      longitude: -77.0015232,
      description: null,
      phone: null,
    })

    await gymsRepository.create({
      title: 'Far gym',
      latitude: 12.182849,
      longitude: -76.948308,
      description: null,
      phone: null,
    })

    const { gyms } = await sut.execute({
      userLatitude: -12.1536512,
      userLongitude: -77.0015232,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near gym' })])
  })
})
