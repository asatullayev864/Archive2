import React from 'react';
import MainLayout from './layout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CatalogPage from './pages/Catalog/CatalogPage';
import About from './pages/WhyUs/WhyUs';
import ProductPage from './pages/Products/ProductsPage';
import ProductDetail from './pages/Products/ProductDetail';
import BlogPage from './pages/Blog/BlogPage';
import DeliveryPayment from './pages/DeliverPayment/DeliveryPayment';
import ReturnPage from './pages/Return/ReturnPage';
import GuaranteesPage from './pages/Guarantees/GuaranteesPage';
import ContactsPage from './pages/Contacts/ContactsPage';

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
        <Route path="delivery-payment" element={<DeliveryPayment />} />
        <Route path="return" element={< ReturnPage />} />
        <Route path="guarantees" element={<GuaranteesPage />} />
        <Route path="contacts" element={<ContactsPage />} />

      </Route>
    </Routes>
  );
}

export default App;
