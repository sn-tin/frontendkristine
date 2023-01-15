import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles.js'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import RouterSwitch from './components/RouterSwitch';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import About from './components/About/About';
import { Article } from '@mui/icons-material';
import { Divider } from '@mui/material';

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
        <Home />
        <Divider />
        <About />
        <Works />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
