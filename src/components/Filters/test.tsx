import { render, screen } from '@testing-library/react'
import * as router from 'next/router'
import Filters from '.'

const useRouter = jest.spyOn(router, 'useRouter')
const fakeGenres = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' }
  ]
}

describe('<Filters />', () => {
  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      query: {},
      isReady: false
    }))

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeGenres)
      })
    )
  })

  it('should render the heading', () => {
    render(<Filters />)
    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Apply Filter/i })
    ).toBeInTheDocument()
  })
})
