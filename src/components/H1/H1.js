import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 3em;
  font-size: 2em;
  color:  ${(props) => props.theme.colors.white}
  font-weight: ${(props) => props.theme.font.bold}

  ${({ theme }) => theme.media.tablet} {
    font-size: 2.5em;
  }
`

export default H1