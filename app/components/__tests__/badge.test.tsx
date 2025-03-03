import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BadgeStatus } from '../badge'
import { Status } from '../../lib/constants'

describe('BadgeStatus', () => {
  const testCases: [Status, string][] = [
    [Status.ONGOING, 'green'],
    [Status.FINISHED, 'red'],
    [Status.SCHEDULED, 'orange'],
  ]

  testCases.forEach(([status, expectedColor]) => {
    it(`renders ${expectedColor} color for status ${status}`, () => {
      const { container } = render(<BadgeStatus status={status} />)
      expect((container.firstChild as HTMLDivElement)?.className).toContain(`bg-${expectedColor}`)
    })
  })
})