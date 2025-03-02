'use client'

import Image from "next/image"
import { ButtonUpdate } from "./button-update"
import { useMatchesQuery } from "../lib/query"

export const UpdateBlock = () => {
  const { isError } = useMatchesQuery()

  return(
    <div className="flex gap-3">
      {isError && (
        <div className="flex gap-2 bg-block rounded-sm font-medium text-lg items-center justify-center px-6 py-3.5">
          <Image src="/mainIcon/alert_triangle.svg" width={20} height={20} alt='refresh error message' /> 
          Ошибка: не удалось загрузить информацию
        </div>
      )}
      <ButtonUpdate />
    </div>
  )
}