import React from "react";
import { Link } from "react-router-dom";

import productImg from '../../components/icons/src/Product/pr.svg';
import like from '../../components/icons/src/Product/like.svg';
import savat from '../../components/icons/src/Product/savat.svg';

import {
    ProductMobileButton,
    ProductSection,
    ProductHeader,
    ProductTitle,
    ProductButton,
    ProductGrid,
    ProductCard,
    ProductImage,
    ProductName,
    ProductOldPrice,
    ProductNewPrice,
    LikeIcon,
    CartIcon,
    CartWrapper,
    ProductBreadcrumb,
    BreadcrumbLink,
    BreadcrumbSeparator
} from './ProductsPage.styled';

const products = Array(8).fill({
    img: productImg,
    name: <>Встраиваемый <br /> светильник Novotech</>,
    oldPrice: "7 000₽",
    newPrice: "6 399₽"
});

function ProductPage() {
    return (
        <ProductSection>
            <ProductBreadcrumb>
                <BreadcrumbLink to="/">Главная</BreadcrumbLink>
                <BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
            </ProductBreadcrumb>


            <ProductHeader>
                <ProductTitle>Популярные товары</ProductTitle>
            </ProductHeader>

            <ProductGrid>
                {products.map((item, index) => (
                    <ProductCard
                        as={Link}
                        to={`/products/${index}`}
                        key={index}>
                        <LikeIcon src={like} alt="Like" />
                        <ProductImage src={item.img} alt={item.name} />
                        <ProductName>{item.name}</ProductName>
                        <ProductOldPrice>{item.oldPrice}</ProductOldPrice>
                        <ProductNewPrice>{item.newPrice}</ProductNewPrice>
                        <CartWrapper>
                            <CartIcon src={savat} alt="Add to cart" />
                        </CartWrapper>
                    </ProductCard>
                ))}
            </ProductGrid>

            <ProductMobileButton>
                <ProductButton>Все товары →</ProductButton>
            </ProductMobileButton>
        </ProductSection>
    );
}

export default ProductPage;
