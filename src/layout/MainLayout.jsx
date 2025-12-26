import React from 'react';
import { LayoutWrapper } from './Layout.styled';
import Navbar from './Navbar';
import Footer from './Footer';

import Banner from './Layoutbar/Banner';
import Catalog from './Layoutbar/Catalog';
import WhyUs from './Layoutbar/WhyUs';
import Product from './Layoutbar/Products';
import Brands from './Layoutbar/Brands';
import Blog from './Layoutbar/Blog';
import Lighting from './Layoutbar/Lighting';

function MainLayout(props) {

    return (
        <LayoutWrapper>
            <div style={{ flex: 1 }}>
                <Navbar />
                <Banner />
                <Catalog />
                <WhyUs />
                <Product />
                <Brands />
                <Blog />
                <Lighting />
            </div>
            <Footer />
        </LayoutWrapper>
    );
}

export default MainLayout;