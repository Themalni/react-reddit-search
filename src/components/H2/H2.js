import styled from 'styled-components'

const H2 = styled.h2`
  align-self: center;
  font-size:  1.2em;
  color:  ${(props) => props.theme.colors.white}
  font-weight: ${(props) => props.theme.font.bold}
`

export default H2