import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background-color: var(--background);
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
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
  /* position: fixed;
  top: 0; */
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
  font-weight: 800;
  font-size: 1.5rem;
  /* color: var(--primary); */
  background: -webkit-linear-gradient(var(--primaryLight), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--textColorOnBackground);
`
