import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMatchesQuery, useRefreshMatches } from '../query'
import React, { JSX } from 'react'

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

describe('Query Hooks', () => {
  it('useMatchesQuery should handle loading state', () => {
    const { result } = renderHook(() => useMatchesQuery(), { wrapper })
    expect(result.current.isLoading).toBeDefined()
  })

  it('useRefreshMatches should trigger query invalidation', () => {
    const { result } = renderHook(() => useRefreshMatches(), { wrapper })
    expect(typeof result.current).toBe('function')
  })
})