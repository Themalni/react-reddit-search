import styled from 'styled-components'

const InputText = styled.input`
  margin-bottom: 0.5em;
  border: 0;
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  font-size: 1em;
  display: block;

  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
    max-width: 400px;
    margin-right: 0.5em;
  }
`

export { InputText }