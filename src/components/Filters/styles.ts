import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-color: var(--background);
  color: #fff;
  text-align: center;
  width: 250px;

  ${media.lessThan('medium')`
    width: auto;
  `}
`

export const FiltersGroupWrapper = styled.div`
  padding: 1rem 0.5rem;
  position: sticky;
  top: 0;
`

export const FiltersGroupTitle = styled.h1`
  font-weight: 700;
  color: var(--textColorOnBackground);
  text-align: left;
  margin: 0.5rem 0;
`

export const FiltersGroupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Chip = styled.div`
  padding: 0.25rem 0.6rem;
  background: var(--backgroundContrast);
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 6px;
  margin: 0.2rem;
  list-style: none;
  display: flex;
  cursor: pointer;
  user-select: none;

  :hover {
    background: #8758c480;
  }

  &.selected {
    background: var(--primaryLight);
    color: #fff;
  }
`

export const ApplyFilterButton = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
  flex: 1;
  border: none;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  background: var(--primary);
  color: white;
  font-weight: 700;
  font-size: 1rem;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    /* filter: brightness(0.7); */
    transform: scale3d(0.98, 0.98, 0.98);
  }
`
