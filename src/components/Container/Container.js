import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const LowerContainer = styled(Container)`
  margin-top: 2em;
`
const MasonryContainer = styled.div`
  width: 75%;
  margin-top: 2em;
  margin-left: -0.5em;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  max-height: 4000px;
`

export { Container, LowerContainer, MasonryContainer }