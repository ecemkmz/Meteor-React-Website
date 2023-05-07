import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import { Register } from "./components/register/register";
import { Products } from "./pages/product/products";

export const PublicLayout = () => {
    return(
        <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<Register />} />
          <Route path="Product" element={<Products />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
    )
}