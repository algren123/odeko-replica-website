import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import HeroSection from './Components/HeroSection';
import Content from './Components/Content';
import MainCarousel from './Components/MainCarousel';
import Carousel from './Components/MainCarousel';
import News from './Components/News';
import Review from './Components/Reviews';
import DownloadApp from './Components/DownloadApp';
import Form from './Components/Form';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Content />
      <Carousel />
      <News />
      <Review />
      <DownloadApp />
      <Form />
      <Footer />
    </>
  );
}

export default App;
