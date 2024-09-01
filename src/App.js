import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Serviece from './Pages/services/Serviece';
import NavBar from './components/NavBar';
import MenuPage from './components/MenuPage';
import Menu from './Pages/menu/Menu';

function App() {
  return (
    <div className="App" >
    <BrowserRouter>
      
    <Routes>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Home' element={<Home/>}/>
       <Route path='/service' element={<Serviece/>}/>  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
