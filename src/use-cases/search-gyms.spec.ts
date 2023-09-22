import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'javascript gym',
      latitude: -12.1536512,
      longitude: -77.0015232,
      description: null,
      phone: null,
    })

    await gymsRepository.create({
      title: 'typescript gym',
      latitude: -12.1536512,
      longitude: -77.0015232,
      description: null,
      phone: null,
    })

    const { gyms } = await sut.execute({
      query: 'javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'javascript gym' })])
  })
  it('should be able to fetch paginated gym search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `javascript gym ${i}`,
        latitude: -12.1536512,
        longitude: -77.0015232,
        description: null,
        phone: null,
      })
    }

    const { gyms } = await sut.execute({
      query: 'javascript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'javascript gym 21' }),
      expect.objectContaining({ title: 'javascript gym 22' }),
    ])
  })
})
