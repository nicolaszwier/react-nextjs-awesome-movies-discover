import { apiKey, apiUrl } from 'config/config'
import { Genre } from 'models/Genre'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

const Filters = () => {
  const router = useRouter()
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])

  useEffect(() => {
    fetchGenresList()
  }, [])

  useEffect(() => {
    if (router.query.genres && router.isReady) {
      const selectedGenresFromQuery = router.query.genres.toString().split(',')
      const genresArray = selectedGenresFromQuery.map((el) => Number(el))
      setSelectedGenres(genresArray)
    }
  }, [router.query.genres, router.isReady])

  const fetchGenresList = async () => {
    try {
      const res = await fetch(
        `${apiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!res.ok) throw new Error('Error while loading genres filter')

      const data = await res.json()

      setGenres(data.genres)
    } catch (error) {
      console.log(error)
    }
  }

  const unselectGenre = (genreId: number) => {
    const genresCopy = [...selectedGenres]
    const index = selectedGenres.findIndex((el) => el === genreId)
    genresCopy.splice(index, 1)
    setSelectedGenres(genresCopy)
  }

  const toggleGenre = (genreId: number) => {
    if (isGenreSelected(genreId)) {
      unselectGenre(genreId)
    } else {
      setSelectedGenres([...selectedGenres, genreId])
    }
  }

  const isGenreSelected = (id: number) => {
    const index = selectedGenres.findIndex((el) => el === id)
    return index >= 0
  }

  const applyFilter = () => {
    updateQueryParams(selectedGenres.join(','))
  }

  const updateQueryParams = (genres?: string) => {
    router.push(
      { pathname: '/', query: { ...router.query, genres: genres } },
      undefined,
      {
        shallow: true,
        scroll: true
      }
    )
  }

  return (
    <S.Wrapper>
      <S.FiltersGroupWrapper>
        <S.FiltersGroupTitle>Genres</S.FiltersGroupTitle>
        <S.FiltersGroupContent>
          {genres.map((genre: Genre) => (
            <S.Chip
              className={isGenreSelected(genre.id) ? 'selected' : ''}
              onClick={() => {
                toggleGenre(genre.id)
              }}
              key={genre.id}
            >
              {genre.name}
            </S.Chip>
          ))}
        </S.FiltersGroupContent>
        <S.ApplyFilterButton onClick={applyFilter}>
          Apply filter
        </S.ApplyFilterButton>
      </S.FiltersGroupWrapper>
    </S.Wrapper>
  )
}

export default Filters
