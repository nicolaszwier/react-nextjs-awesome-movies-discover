import styled from 'styled-components'

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
`

export const TopAppBar = styled.nav`
  height: 60px;
  width: 100%;
  border-bottom: 4px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  /* position: fixed;
  top: 0; */
  background: rgb(255 255 255 / 96%);
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

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--textColorOnBackground);
`
