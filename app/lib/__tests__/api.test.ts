import { describe, it, expect, vi } from 'vitest'
import { fetchMatches } from '../api'

describe('API Tests', () => {
  it('should handle server unavailable error', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch'))
    
    await expect(fetchMatches()).rejects.toThrow('Failed to load matches: Failed to fetch')
  })

  it('should handle successful response', async () => {
    const mockData = { ok: true, data: { matches: [] } }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    })

    const result = await fetchMatches()
    expect(result).toEqual(mockData)
  })
})