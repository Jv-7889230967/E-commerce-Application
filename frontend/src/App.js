import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import User from './components/User.js'
import Signup from './components/Signup';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import { ShopContextProvider } from './context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User/>} exact/>
      <Route path='/signup' element={<Signup/>} exact/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </ShopContextProvider>
    </div>
  );
}

export default App;
