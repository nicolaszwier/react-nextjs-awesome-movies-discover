import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--background);
  color: #fff;
  text-align: center;
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  margin: 0 auto;
  /* position: sticky; */
  /* top: 0; */
  /* height: 100%; */
`

export const MoviesWrapper = styled.div`
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  /* display: flex;
  flex-wrap: wrap;
  list-style: none; */
`

export const MoviesListTitle = styled.h1`
  font-weight: 700;
  color: var(--textColorOnBackground);
  text-align: left;
  margin: 0.5rem 0 1rem;
`

export const MoviesList = styled.div`
  /* padding: 0.3rem; */
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
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
  margin: 0 0.7rem 0.5rem;
`

export const MovieImageWrapper = styled.div`
  max-width: 300px;
  overflow: hidden;
  /* border-top-left-radius: 11px;
  border-top-right-radius: 11px; */
  border-radius: 11px;
  box-shadow: 0px 1px 8px 2px rgb(0 0 0 / 7%);
  position: relative;
  max-width: 100%;
  height: auto;
  min-height: 330px;
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