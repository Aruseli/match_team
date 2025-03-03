import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UpdateBlock } from '../update-block'

describe('UpdateBlock', () => {
  const createQueryClient = () => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  it('should render refresh button', () => {
    const queryClient = createQueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <UpdateBlock />
      </QueryClientProvider>
    )

    expect(screen.getByRole('button')).toBeDefined()
  })
})