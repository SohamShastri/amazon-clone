import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    </>
    
    
    
    
  );
}

export default App
