import Box from "@mui/material/Box";
import AppHeader from "./components/AppHeader";
import HoverCart from "./components/HoverCart";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="offers" element={<h1>Offers</h1>}></Route>
            <Route path="shops" element={<h1>Shops</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
