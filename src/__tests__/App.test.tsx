import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { App } from '../App'

describe('App test', () => {
  it("should render a 'Hello World'", () => {
    render(<App />)
  })
})
