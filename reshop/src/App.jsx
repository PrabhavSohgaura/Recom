import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
