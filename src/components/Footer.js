import styled from "styled-components"

const Wrapper = styled.footer`
  padding: 2vmin;
  background: darkblue;

  & a {
    color: white;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <a href='https://github.com/Falsin'>Made by Falsin</a>
    </Wrapper>
  )
}