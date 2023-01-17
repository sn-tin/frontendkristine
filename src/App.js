import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles.js'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import RouterSwitch from './components/RouterSwitch';
import Hero from './components/Hero/Hero';
import Works, { Article } from './components/Works/Works';
import About from './components/About/About';
import Divider from './components/Divider/Divider';

function App() {
  return (
    <BrowserRouter>
      <div className="App" 
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <GlobalStyle />
        <Navbar />
        <Hero />
        <Divider />
        <About />
        <Works />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
