import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Login from './components/Login';
import Orders from './components/Orders';
import Product from './components/Product';
import Registration from './components/Registration';
import Shop from './components/Shop';
import Password from './components/Password';



function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/index' element={<Index/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/password' element={<Password/>}/>
        </Routes>
        </BrowserRouter>
      </main> 
    </div>
  )
}




export default App;
