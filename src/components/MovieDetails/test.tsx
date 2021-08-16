import { render, screen } from '@testing-library/react'
import { MovieComplete } from 'models/MovieDetails'
import * as router from 'next/router'
import MovieDetails from '.'

jest.mock('next/image', () => () => '<Image src={src} alt={alt} />')
const useRouter = jest.spyOn(router, 'useRouter')
const fakeMovie: MovieComplete = {
  adult: false,
  backdrop_path: '/c0izdYdnTe4uMRifHgvTA85wPz0.jpg',
  belongs_to_collection: {
    id: 809185,
    name: 'Army of the Dead Collection',
    poster_path: '/e4cjn4DcEUORp1fg1c3chk3SBD5.jpg',
    backdrop_path: ''
  },
  budget: 0,
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 27, name: 'Horror' }
  ],
  homepage: 'https://www.netflix.com/title/81046394',
  id: 503736,
  imdb_id: 'tt0993840',
  original_language: 'en',
  original_title: 'Army of the Dead',
  overview: '',
  popularity: 1033.494,
  poster_path: '/z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
  production_companies: [
    {
      id: 114152,
      logo_path: null,
      name: 'The Stone Quarry',
      origin_country: 'US'
    }
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' }
  ],
  release_date: '2021-05-14',
  revenue: 780000,
  runtime: 148,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' }
  ],
  status: 'Released',
  tagline: 'Survivors take all.',
  title: 'Army of the Dead',
  video: false,
  vote_average: 6.4,
  vote_count: 2152
}

describe('<MovieDetails />', () => {
  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      query: {},
      isReady: false
    }))

    // global.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve(fakeGenres)
    //   })
    // )
  })

  it('should render the heading', () => {
    render(<MovieDetails movie={fakeMovie} />)
    expect(
      screen.getByRole('heading', { name: /Army of the Dead/i })
    ).toBeInTheDocument()
  })
})
