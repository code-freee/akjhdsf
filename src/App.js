import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routs/navigation.component/NavBar";
import HomePage from "./routs/home-page/HomePage";
import Signin from "./routs/signin/Signin";
import ProductList from "./components/productList/ProductList";
import Contacts from "./components/contacts/Contacts";
import CartItems from "./components/cartitems/CartItems";

function App() {
  const [gender, setGender] = useState("");

  const handleGender = (gender) => {
    setGender(gender);
    console.log(gender);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar cartNumber="5" />}>
          <Route index element={<HomePage handleGender={handleGender} />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route
            path="/Product-List/*"
            element={<ProductList gender={gender} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart-items" element={<CartItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
