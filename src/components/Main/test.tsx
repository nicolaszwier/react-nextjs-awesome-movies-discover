import { render, screen } from '@testing-library/react'

import Main from '.'

jest.mock('components/Filters', () => () => 'Filters')
jest.mock('components/MoviesList', () => () => 'MoviesList')

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Awesome Movies Discover/i })
    ).toBeInTheDocument()
  })
})
