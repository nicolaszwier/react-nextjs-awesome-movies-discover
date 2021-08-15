import Image from 'next/image'
import Link from 'next/link'
import { apiImageUrl, apiKey, apiUrl } from 'config/config'
import { Movie } from 'models/Movie'
import { useEffect, useState } from 'react'
import * as S from './styles'

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!res.ok) throw new Error('Error while loading genres filter')

      const data = await res.json()

      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
      new Date(date)
    )

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
    </S.Wrapper>
  )
}

export default MoviesList
