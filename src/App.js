import './App.css';
import Chart from './Components/Chart/Chart';
import Calculator from './Components/CurrencyCalculator/Calculator';
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Platform from './Components/Platform/Platform';
import Solution from './Components/Solution/Solution';
import Testimonial from './Components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Solution />
      <Calculator />
      <Platform />
      <Chart />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
