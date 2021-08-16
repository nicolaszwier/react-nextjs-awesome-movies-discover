import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-color: var(--background);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`

export const BackdropWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-color: rgb(0 0 0 / 85%);
`

export const Content = styled.section`
  background-color: rgb(53 53 53 / 85%);
  min-height: 300px;
  height: 100vh;
  width: 100%;
  flex: 1;
  padding: 2rem 0;

  ${media.lessThan('medium')`
    padding: 1rem 0;
  `}
`

export const TopAppBar = styled.nav`
  height: 60px;
  width: 100%;
  border-bottom: 4px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  position: sticky;
  top: 0;
  background: var(--backgroundContrast);
  z-index: 10;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    var(--primaryLight),
    var(--primary)
  );
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--primary);
`

export const MovieTitle = styled.h2`
  font-weight: 800;
  font-size: 1.7rem;
  color: var(--textColorOnBackground);
  text-align: left;
  margin: 1.5rem 1rem 0.5rem;
`

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
  margin: 0 1rem 1rem;
`

export const Overview = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  margin: 0 1rem 1rem;
`

export const ContentRow = styled.article`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}
`

export const RowBlock = styled.div`
  flex: 1;
  flex-direction: column;
`

export const MovieImageWrapper = styled.div`
  overflow: hidden;
  border: 7px solid;
  box-shadow: 0px 1px 8px 2px rgb(0 0 0 / 7%);
  height: auto;
  margin: 1rem 1rem 1rem 3rem;
  ${media.lessThan('medium')`
  margin: 1rem;
  `}
`

export const VoteAverage = styled.div`
  background: var(--secondary);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 2;
`
