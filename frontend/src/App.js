import './App.css';
import Navegation from './components/navegation';
import {Home} from './components/home'
import Register from './components/register';
import Consult from './components/consult';
import { Contact } from './components/contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App"> 
      <Navegation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path='/consult' element={<Consult />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
