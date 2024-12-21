import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Compo/Home';
import Header from './Compo/Header';
import Coins from './Compo/Coins';
import Exchanges from './Compo/Exchanges';
import CoinsDetails from './Compo/CoinsDetails';
import Footer from './Compo/Footer';




function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/exchanges' element={<Exchanges/>} />
      <Route path='/coin/:id' element={<CoinsDetails/>} />
    </Routes>
    <Footer/>
   </Router>
}

export default App;
