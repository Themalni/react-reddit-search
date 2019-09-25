import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const Loader = styled.div`
  background: linear-gradient(${(props) => props.theme.colors.yellowOrange}, ${(props) => props.theme.colors.orange});
  width: 40px;
  height: 40px;
  border-right-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: ${spin} .5s ease-in-out infinite;
`

export default Loader