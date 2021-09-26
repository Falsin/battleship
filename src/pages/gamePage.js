import Header from "../components/header";
import Footer from "../components/Footer";
import { humanPlayer } from "../factoriesFunc/player";
import MainContent from "../components/mainContent";

function gamePage(params) {
  return (
    <section>
      <Header />
      <MainContent />
      <Footer />
    </section>
  )
}

export default gamePage;