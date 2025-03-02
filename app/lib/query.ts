import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchMatches } from './api'
import { Match } from './types'

export const MATCHES_QUERY_KEY = ['matches']

export function useMatchesQuery() {
  return useQuery<Match[]>({
    queryKey: MATCHES_QUERY_KEY,
    queryFn: async () => {
      const response = await fetchMatches()
      return response.data.matches
    },
  })
}

export function useRefreshMatches() {
  const queryClient = useQueryClient()
  
  return () => {
    queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEY })
  }
}