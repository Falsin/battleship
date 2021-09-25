import Header from "../components/header";
import Footer from "../components/Footer";
import { humanPlayer } from "../factoriesFunc/player";
import MainContent from "../components/mainContent";

function gamePage(params) {

  console.log(humanPlayer)
  return (
    <section>
      <Header />
      <MainContent />
      <Footer />
    </section>
  )
}

export default gamePage;