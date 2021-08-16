import { render, screen } from '@testing-library/react'
import * as router from 'next/router'
import MoviesList from '.'

const useRouter = jest.spyOn(router, 'useRouter')
const fakeMovies = {
  page: 1,
  total_pages: 500,
  total_results: 10000,
  results: []
}

describe('<MoviesList />', () => {
  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      query: {},
      isReady: false
    }))

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeMovies)
      })
    )
  })

  it('should render the heading', () => {
    render(<MoviesList />)
    expect(
      screen.getByRole('heading', { name: /Popular movies/i })
    ).toBeInTheDocument()
  })
})
