import React from 'react';
import MainLayout from './layout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CatalogPage from './pages/Catalog/CatalogPage';
import About from './pages/WhyUs/WhyUs';
import ProductPage from './pages/Products/ProductsPage';
import ProductDetail from './pages/Products/ProductDetail';
import BlogPage from './pages/Blog/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        
        <Route index element={<Home />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="blog" element={<BlogPage />} />

      </Route>
    </Routes>
  );
}

export default App;
