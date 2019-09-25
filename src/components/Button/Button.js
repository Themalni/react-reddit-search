import styled from 'styled-components'

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1em 2.5em;
  border: none;
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.orange}, ${(props) => props.theme.colors.yellowOrange});
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  position: relative;
  z-index: 1;

  &:before {
    content: "Search";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(to top, ${(props) => props.theme.colors.orange}, ${(props) => props.theme.colors.yellowOrange});
    opacity: 0;
    z-index: 2;
    line-height: 3.2;
    transition: opacity .4s linear;
  }

  &:hover {
    &:before {
      transition: opacity .4s linear;
      opacity: 1;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
    width: 100%;
  }
`

const WideButton = styled(Button)`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 0.7em 0;
`
const LinkButton = styled.a`
  display: block;
  margin: 0 auto;
  width: 60%;
  text-decoration: none;
  text-align: center;
  padding: 0.5em 0;
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.orange}, ${(props) => props.theme.colors.yellowOrange});
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  position: relative;

  &:before {
    content: "Read more";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(to top, ${(props) => props.theme.colors.orange}, ${(props) => props.theme.colors.yellowOrange});
    opacity: 0;
    z-index: 2;
    line-height: 2.45;
    transition: opacity .4s linear;
  }

  &:hover {
    &:before {
      transition: opacity .4s linear;
      opacity: 1;
    }
  }
`

export { Button, WideButton, LinkButton }