import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles.js'
import { BrowserRouter} from 'react-router-dom';
import RouterSwitch from './components/RouterSwitch';

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
        <RouterSwitch />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
