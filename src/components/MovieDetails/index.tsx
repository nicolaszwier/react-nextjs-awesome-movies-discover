import Image from 'next/image'
import { apiImageUrl } from 'config/config'
import * as S from './styles'
import { MovieComplete } from 'models/MovieDetails'
import { Genre } from 'models/Genre'

export type Props = {
  movie: MovieComplete
}

const MovieDetails = ({ movie }: Props) => {
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
      new Date(date)
    )

  const buildGenresString = (genres: Genre[]) => {
    const genresArray: string[] = genres.map((el) => el.name)
    return genresArray.join(', ')
  }

  return (
    <S.Wrapper>
      <S.TopAppBar>
        <S.Title>Awesome Movies Discover</S.Title>
      </S.TopAppBar>
      <S.BackdropWrapper
        style={{
          backgroundImage: `url(${apiImageUrl}/w1920_and_h800_multi_faces/${movie.backdrop_path})`
        }}
      >
        <S.Content>
          <S.ContentRow>
            <S.MovieImageWrapper>
              <Image
                src={`${apiImageUrl}/w220_and_h330_bestv2${movie.poster_path}`}
                height="330"
                width="220"
              ></Image>
            </S.MovieImageWrapper>
            <S.RowBlock>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.Subtitle>
                {' '}
                {formatDate(movie.release_date)} -{' '}
                {buildGenresString(movie.genres || [])}{' '}
              </S.Subtitle>
              <S.Overview>{movie.overview}</S.Overview>
            </S.RowBlock>
          </S.ContentRow>
        </S.Content>
      </S.BackdropWrapper>
    </S.Wrapper>
  )
}

export default MovieDetails
