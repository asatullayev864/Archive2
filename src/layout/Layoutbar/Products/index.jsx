import React from "react";

import productImg from '../../../components/icons/src/Product/pr.svg';
import like from '../../../components/icons/src/Product/like.svg';
import savat from '../../../components/icons/src/Product/savat.svg';

import {
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
    CartWrapper
} from './Products.styled';

const products = Array(8).fill({
    img: productImg,
    name: <>Встраиваемый <br /> светильник Novotech</>,
    oldPrice: "7 000₽",
    newPrice: "6 399₽"
});

function Products() {
    return (
        <ProductSection>
            <ProductHeader>
                <ProductTitle>Популярные товары</ProductTitle>
                <ProductButton>Все товары →</ProductButton>
            </ProductHeader>

            <ProductGrid>
                {products.map((item, index) => {
                    return (
                        <ProductCard key={index}>
                            <LikeIcon src={like} alt="Like" />
                            <ProductImage src={item.img} alt={item.name} />
                            <ProductName>{item.name}</ProductName>
                            <ProductOldPrice>{item.oldPrice}</ProductOldPrice>
                            <ProductNewPrice>{item.newPrice}</ProductNewPrice>
                            <CartWrapper>
                                <CartIcon src={savat} alt="Add to cart" />
                            </CartWrapper>
                        </ProductCard>
                    );
                })}
            </ProductGrid>
        </ProductSection>
    );
}

export default Products;
