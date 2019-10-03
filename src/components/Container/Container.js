import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const LowerContainer = styled(Container)`
  margin-top: 2em;
`
const MasonryContainer = styled.div`
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-flow: column;
  align-content: center;

  ${(props) => props.theme.media.tablet} {
    width: 90%;
    flex-flow: column wrap;
    max-height: 4000px;
  }
  ${(props) => props.theme.media.desktop} {
    width: 75%;
  }
`

export { Container, LowerContainer, MasonryContainer }