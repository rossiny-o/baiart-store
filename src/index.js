import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "react-use-cart";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/custom.scss' ;
import { Cart } from "./components/Cart";
import Products from "./components/Shop";
import { data } from "./data-info";
import{ ItemPage} from "./components/ItemPage";
const { products } = data;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/shop" element={<Products/>} />
      
      <Route path="/cart" element={<Cart />} />
      {products.map((product, index) => {
        return (
          <Route
            exact
            key={index}
            path={`/shop/${product.name_id}`}
            element={<ItemPage product={product} key={index}/>}
          />
        );
      })}
    </Routes>
  </HashRouter>
</CartProvider>
);


