import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
// import { Register } from "./components/register/register";
import { ProductsPage } from "./pages/product/products";
import { SkinTypeText } from "./pages/skinTypeText/skinTypeText";
// import { jsQuizz } from "./pages/skinTypeText/constants";

export const PublicLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<SkinTypeText />} />
          {/* questions={jsQuizz.questions} */}
          <Route path="Product" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
