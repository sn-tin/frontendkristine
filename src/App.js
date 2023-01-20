import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles.js'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Article from './components/Works/Article';
import LandingPage from './components/Landing/LandingPage';
import Footer from './components/Footer/Footer';

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
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/works/:slug" element={<Article />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
