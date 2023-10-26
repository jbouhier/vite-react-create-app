import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('has Home button', () => {
    render(<Header />)
    const headline = screen.getByText(/Home/i)
    expect(headline).toBeInTheDocument()
  })
})
