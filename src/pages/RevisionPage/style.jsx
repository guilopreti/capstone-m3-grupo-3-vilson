import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Container = styled.main`
  width: 100%;
  padding: 20px;

  ${up('md')} {
    display: flex;
    justify-content: center;
  }

  > div {
    width: 100%;
    max-width: 505px;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;

  > h2 {
    border-left: 4px solid var(--primary-color);
    padding: 0 0 0 4px;
    font-size: 25px;
    font-weight: bold;
  }
`
