import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import { ProductsPage } from "./pages/product/products";
import { SkinTypeText } from "./pages/skinTypeText/skinTypeText";
import { ProductDetail } from "./pages/product/productDetail";
import { SignIn } from "../auth/pages/signIn/signIn";
import { Register } from "./components/register/register";
import { SignUp } from "../auth/pages/signUp/signUp";

export const PublicLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<SignUp />} />
          <Route path="Product" element={<ProductsPage />} />
          <Route path="Product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
