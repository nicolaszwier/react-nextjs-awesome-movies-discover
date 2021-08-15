import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--background);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  /* position: sticky; */
  /* top: 0; */
  height: 100%;
`

export const BackdropWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */
`

export const Content = styled.section`
  /* border-top-left-radius: 50px;
  border-top-right-radius: 50px; */
  /* transform: translateY(-50%); */
  background-color: rgb(255 255 255 / 85%);
  min-height: 300px;
  width: 100%;
  /* box-shadow: 0px -15px 31px 4px #00000024; */
  flex: 1;
  padding: 2rem 0;
`

export const TopAppBar = styled.nav`
  height: 60px;
  width: 100%;
  border-bottom: 4px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: sticky;
  top: 0;
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

export const MovieTitle = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  color: var(--textColorOnBackground);
  text-align: left;
  margin: 1.5rem 0.5rem 0.5rem;
`

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
  margin: 0 0.5rem 1rem;
`

export const Overview = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  margin: 0 0.5rem 1rem;
`

export const ContentRow = styled.article`
  display: flex;
  justify-content: space-between;
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
  /* transform: translateY(-30%); */
`

export const VoteAverage = styled.div`
  background: var(--secondary);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 2;
`
