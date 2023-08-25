import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <div className='innerApp'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='Login' element={<Login />}></Route>
              {/* <Route path='Search' element={<Search/>}></Route> */}
            </Route>
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
