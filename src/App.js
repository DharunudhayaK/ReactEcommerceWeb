import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Fetch from './components/Fetch';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <div className='innerApp'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='Home' element={<Home />}></Route>
            <Route path='Cart' element={<Cart />}></Route>
          </Routes>
        </Router>
      </div>
      <div>
        <Fetch />
      </div>
    </div>
  );
}

export default App;
