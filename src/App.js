import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles.js'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Article from './components/Works/Article';
import LandingPage from './components/Landing/LandingPage';

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
        <LandingPage />
        <Routes>
          <Route path="/#" element={<LandingPage />}/>
          <Route path="/#works/:slug" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
