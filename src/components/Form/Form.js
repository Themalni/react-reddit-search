import styled from 'styled-components'

const Form = styled.form`
  width: 90%;

  ${(props) => props.theme.media.tablet} {
    width: auto;
  }
`

export default Form