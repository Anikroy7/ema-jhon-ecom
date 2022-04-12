
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inventory/Inventory'
import About from './Components/About/About'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import RequrieAuth from './Components/RequireAuth/RequrieAuth';
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequrieAuth>
            <Inventory></Inventory>
          </RequrieAuth>}>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
