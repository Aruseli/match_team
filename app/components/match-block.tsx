'use client'

import Image from "next/image"
import { Status } from "../lib/constants"
import { BadgeStatus } from "./badge";
import { memo } from 'react'

type MatchBlockProps = {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  status: Status;
}


export const MatchBlock = memo(function MatchBlock({ 
  homeTeam,
  homeScore,
  awayTeam,
  awayScore,
  status,
}: MatchBlockProps) {
  return(
    <div className="bg-block hover:shadow-2xs shadow-gray-800/50">
      <div className='px-9 py-4 flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Image src='/mainIcon/icon.svg' alt='icon' width={32} height={32} />
          <div className="font-semibold">{homeTeam}</div>
        </div>

        <div className='flex flex-col items-center justify-center gap-1'>
          <div className='text-xl font-semibold'>
            {homeScore} : {awayScore}
          </div>
          <BadgeStatus status={status} />
        </div>
        <div className='flex items-center gap-3'>
          <Image src='/mainIcon/icon.svg' alt='icon' width={32} height={32} />
          <div className="font-semibold">{awayTeam}</div>
        </div>
      </div>
    </div>
  )
})