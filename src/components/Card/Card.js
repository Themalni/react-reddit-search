import styled from 'styled-components'

const Card = styled.div`
  width: 32%;
  height: auto;
  margin: 0.5em;
  padding-bottom: 3em;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 3px 5px -3px ${(props) => props.theme.colors.graphite};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &:nth-child(3n+1) { order: 1; }
  &:nth-child(3n+2) { order: 2; }
  &:nth-child(3n)   { order: 3; }
`

const CardHeader = styled.div`
  width: 100%;
  padding: 0.7em;
  /* background-color: ${(props) => props.theme.colors.blue} */
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.blue}, ${(props) => props.theme.colors.blueLight});
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1em;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.graphite};
`
const CardBody = styled.div`
  padding: 0.9em;
`

const CardText = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.colors.graphite};
`

const CardSmallText = styled(CardText)`
  font-size: .8em;
  font-weight: ${(props) => props.theme.font.bold};
  color: ${(props) => props.theme.colors.blue};
`

const CardImage = styled.img`
  width: 60%;
  height: auto;
  margin: 0 auto;
`

const CardImageSmall = styled.img`
  width: 70px;
  height: auto;
`

const CardFooter = styled.div`
  padding: 0.9em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export { Card, CardHeader, CardTitle, CardBody, CardText, CardSmallText, CardFooter, CardImage, CardImageSmall }