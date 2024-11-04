import { Header } from "./components/Header";
import { AboutUsContainer } from "./components/AboutUsContainer";
import { LatestArticle } from "./components/LatestArticle";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="text-blueish font-open mx-auto">
      <Header />
      <AboutUsContainer />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
