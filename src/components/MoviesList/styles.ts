import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--background);
  color: #fff;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`

export const MoviesWrapper = styled.div`
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
`

export const MoviesListTitle = styled.h1`
  font-weight: 600;
  color: var(--textColorOnBackground);
  text-align: left;
  margin: 0.5rem 0 1rem;
`

export const NotFoundText = styled.p`
  font-weight: 600;
  color: var(--textColorOnBackground);
  text-align: center;
  margin: 2rem;
  opacity: 0.5;
`

export const MoviesList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-rows: minmax(200px, auto);
  gap: 0.7rem;
`

export const MovieCard = styled.div`
  background: var(--background);
  color: var(--textColorOnBackground);
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 11px;
  margin: 0.2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;

  position: relative;

  :hover {
    background: var(--backgroundContrast);
  }
`

export const MovieCardTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  margin: 0.6rem 0.7rem 0;
`

export const MovieCardSubTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
  margin: 0 0.7rem 0.5rem;
`

export const MovieImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 11px;
  box-shadow: 0px 1px 8px 2px rgb(0 0 0 / 7%);
  position: relative;
  height: auto;
`

export const VoteAverage = styled.div`
  background: var(--secondary);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`

export const PaginationWrapper = styled.div`
  color: var(--textColorOnBackground);
  margin: 2rem 0.5rem;
  font-weight: 500;
`
