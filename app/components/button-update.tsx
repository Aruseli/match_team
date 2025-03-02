'use client'

import Image from "next/image"
import { useRefreshMatches } from "../lib/query"

export const ButtonUpdate = () => {
  const refreshMatches = useRefreshMatches()

  return (
    <button 
      className="bg-red hover:bg-red-dark rounded-sm text-lg font-semibold flex items-center justify-center py-[17px] px-10 gap-3" 
      onClick={refreshMatches}
    >
      Обновить <Image src="/mainIcon/refresh.svg" width={20} height={20} alt='refresh page' />
    </button>
  )
}