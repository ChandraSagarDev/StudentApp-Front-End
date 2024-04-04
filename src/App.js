import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Perfomance from './components/Perfomance';
import Docs from './components/Docs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Perfomance' element={<Perfomance/>} />
        <Route path='/Docs' element={<Docs/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
