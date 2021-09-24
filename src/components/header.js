import styled from "styled-components"

const Wrapper = styled.header`
  background: red;
  padding: 2vmin;
  margin: 0;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
`;

export default function Header(params) {
  return (
    <Wrapper>
      <Title>Battleship</Title>
    </Wrapper>
  )
}