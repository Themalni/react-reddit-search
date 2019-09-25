import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 3em;
  font-size:  ${({ isLarge }) => isLarge ? '2.5em' : '2em'};
  color:  ${(props) => props.theme.colors.white}
  font-weight: ${(props) => props.theme.font.bold}
`

export default H1