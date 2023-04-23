import {NavLink, Route, Routes} from "react-router-dom";

import './others/App.css';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div className="App">
     <h1>Delivery app</h1>

    <nav>
      <NavLink to = "/" style={{margin:"10px"}}>Home</NavLink>
      <NavLink to = "/cart" style={{margin:"10px"}}>Cart</NavLink>
      <NavLink to = "/menu" style={{margin:"10px"}}>Menu</NavLink>
    </nav>


     <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/cart" element={<Cart/>} />
      <Route path = "/menu" element={<Menu/>} />
     </Routes>

    </div>
  );
}

export default App;
