import Filters from 'components/Filters'
import MoviesList from 'components/MoviesList'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.TopAppBar>
      <S.Title>Movies</S.Title>
    </S.TopAppBar>
    <S.Content>
      <Filters />
      <MoviesList />
    </S.Content>
  </S.Wrapper>
)

export default Main
