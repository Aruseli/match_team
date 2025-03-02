'use client'

import { useMatchesQuery } from '../lib/query'
import { MatchBlock } from './match-block'
import { Match } from '../lib/types'

export const MatchesList = () => {
  const { data: matches, isLoading, error } = useMatchesQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading matches</div>
  if (!matches) return null

  return (
    <ul className="flex flex-col gap-4">
      {matches.map((match: Match) => (
        <MatchBlock
          key={match.title}
          homeTeam={match.homeTeam.name}
          homeScore={match.homeScore}
          awayTeam={match.awayTeam.name}
          awayScore={match.awayScore}
          status={match.status}
        />
      ))}
    </ul>
  )
}