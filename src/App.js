import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/reports' Component={Reports} />
          <Route path='/products' Component={Products} />
          <Route path='/team' exact Component={Team} />
          <Route path='/messages' Component={Messages} />
          <Route path='/support' Component={Support} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
