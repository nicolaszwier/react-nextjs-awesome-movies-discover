import { apiKey, apiUrl } from 'config/config'
import { Genre } from 'models/Genre'
import { useEffect, useState } from 'react'
import * as S from './styles'

const Filters = () => {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    fetchGenresList()
  }, [])

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

  return (
    <S.Wrapper>
      <S.FiltersGroupWrapper>
        <S.FiltersGroupTitle>Genres</S.FiltersGroupTitle>
        <S.FiltersGroupContent>
          {genres.map((el: Genre) => (
            <S.Chip key={el.id}>{el.name}</S.Chip>
          ))}
        </S.FiltersGroupContent>
      </S.FiltersGroupWrapper>
    </S.Wrapper>
  )
}

export default Filters
