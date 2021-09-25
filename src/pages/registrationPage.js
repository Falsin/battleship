import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/header";
import MainContent from "../components/mainContent";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function registrationPage(params) {
  return (
    <Section>
      <Header />
      <MainContent page={'registration'} />
      <Footer />
    </Section>
  )
}