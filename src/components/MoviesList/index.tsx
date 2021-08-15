import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { apiImageUrl, apiKey, apiUrl } from 'config/config'
import { Movie } from 'models/Movie'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import * as S from './styles'

const MoviesList = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const [selectedGenres, setSelectedGenres] = useState('')

  useEffect(() => {
    if (!router.isReady) return
    const page = router.query.page ? Number(router.query.page) : 1
    const genres = router.query.genres ? router.query.genres.toString() : ''

    setSelectedPage(page)
    setSelectedGenres(genres)
    handleData(page, genres)
  }, [router.query, router.isReady])

  const fetchPopularMovies = async (page: number) => {
    return fetch(
      `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  const fetchMoviesWithFilters = async (page: number, genres: string) => {
    return fetch(
      `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${encodeURIComponent(
        genres
      )}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  const handleData = async (page?: number, genres?: string) => {
    let res
    if (!page) page = selectedPage

    try {
      setLoading(true)

      if (genres) {
        res = await fetchMoviesWithFilters(page, genres)
      } else {
        res = await fetchPopularMovies(page)
      }

      if (!res.ok) throw new Error('Error while loading movies')

      const data = await res.json()
      setLoading(false)
      setMovies(data.results)
      setTotalPages(data.total_pages)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
      new Date(date)
    )

  const handlePageChange = (data: { selected: number }) => {
    const selectedPage = data.selected + 1
    updateQueryParams(selectedPage.toString(), selectedGenres)
    setSelectedPage(selectedPage)
  }

  const updateQueryParams = (page?: string, genres?: string) => {
    router.push(
      { pathname: '/', query: { ...router.query, page, genres } },
      undefined,
      {
        shallow: true,
        scroll: true
      }
    )
  }

  return (
    <S.Wrapper>
      <S.MoviesWrapper>
        <S.MoviesListTitle>Popular movies</S.MoviesListTitle>
        <S.MoviesList>
          {movies.map((movie: Movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} passHref>
              <S.MovieCard>
                <S.VoteAverage title="Votes average">
                  {movie.vote_average}
                </S.VoteAverage>
                <S.MovieImageWrapper>
                  <Image
                    src={`${apiImageUrl}/w220_and_h330_face${movie.poster_path}`}
                    height="330"
                    width="220"
                  ></Image>
                </S.MovieImageWrapper>
                <S.MovieCardTitle>{movie.title}</S.MovieCardTitle>
                <S.MovieCardSubTitle>
                  {formatDate(movie.release_date)}
                </S.MovieCardSubTitle>
              </S.MovieCard>
            </Link>
          ))}
        </S.MoviesList>
      </S.MoviesWrapper>

      {!isLoading && movies.length == 0 && (
        <S.NotFoundText>No movies found :(</S.NotFoundText>
      )}

      {!isLoading && movies.length > 0 && (
        <S.PaginationWrapper>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'selected'}
          />
        </S.PaginationWrapper>
      )}
    </S.Wrapper>
  )
}

export default MoviesList
