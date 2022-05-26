import './App.css';
import TopSection from "../src/components/TopSection.jsx";
import Banner from "../src/components/Banner.jsx";
import DonateHere from '../src/components/DonateHere.jsx';
import Cards from "../src/components/Cards.jsx";
import Footer from "../src/components/Footer.jsx";


function App() {
  return (
    <div>
    <div className="App-header">
      <TopSection />
      <Banner />
      <div className="donateDiv" id="donateButton">
      <DonateHere />
      </div>
      <h1 className="newsH1">Novidades</h1>
      <Cards />
      </div>
      <Footer />
      </div>
  );
}

export default App;