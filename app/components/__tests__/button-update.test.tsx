import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonUpdate } from '../button-update'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('ButtonUpdate', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  })

  const renderWithProviders = (ui: React.ReactElement) => {
    const { debug } = render(
      <QueryClientProvider client={queryClient}>
        {ui}
      </QueryClientProvider>
    )
    debug()
    return { queryClient }
  }

  it('should render refresh button with text', () => {
    renderWithProviders(<ButtonUpdate />)
    const buttons = screen.queryAllByRole('button', { name: /Обновить/i })
    console.log('Number of buttons found:', buttons.length)
    expect(buttons).toHaveLength(1)
  })
})