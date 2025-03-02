'use client'

import type { Badge } from "../lib/types"
import { StatusColorMap } from "../lib/constants"

export const BadgeStatus = ({status}: Badge) => {
	return <div className={`bg-${StatusColorMap[status]} rounded-sm text-xs font-semibold flex items-center justify-center min-w-[92px] h-[27px]`}>{status}</div>
}