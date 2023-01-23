import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Product from "./components/Product";
import Registration from "./components/Registration";
import Shop from "./components/Shop";
import Password from "./components/Password";
import PrivateRulls from "./components/PrivateRulls";
import PurchaseRulls from "./components/PurchaseRulls";
import Basket from "./components/Basket";
import Invoice from "./components/Invoice";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/index" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/product" element={<Product />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/password" element={<Password />} />
            <Route path="/privaterulls" element={<PrivateRulls />} />
            <Route path="/purchaserulls" element={<PurchaseRulls />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
