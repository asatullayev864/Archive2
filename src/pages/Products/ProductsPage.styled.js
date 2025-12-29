import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductSection = styled.section`
    padding: 50px 225px;
    margin-top: 150px;
    margin-bottom: 700px;

    @media (max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

export const ProductTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
`;

export const ProductButton = styled.button`
    padding: 10px 18px;
    border-radius: 24px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
    }

    &.desktop-button {
        @media(max-width: 768px) {
            display: none;
        }
    }
`;


export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    & > * {
        display: flex;
        width: 100%;
        box-sizing: border-box;
    }
}
`;

export const ProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 12px;
    border-radius: 8px;
    background: #fff;

    text-decoration: none;
    color: inherit;

    // animatsiya uchun
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05); //5 foiz kattalashtiradi
        box-shadow: 0 10px 20px rgba(0,0,0,0.15); // yumshoq soya
    }
`;

export const ProductImage = styled.img`
    width: 140px;
    height: auto;
    margin-bottom: 12px;
    align-self: center;
`;

export const ProductName = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const ProductOldPrice = styled.p`
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    margin-bottom: 4px;
`;

export const ProductNewPrice = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #222;
`;

export const LikeIcon = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const CartWrapper = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 55px;
    height: 36px;
    background: #454545;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 20px;
    height: 20px;
`;

export const ProductMobileButton = styled.div`
    display: none;

    @media(max-width: 768px) {
    display: block;
    margin-top: 36px;

    button {
        width: 100%;
        box-sizing: border-box;
        height: 44px;
        border-radius: 100px;
        font-size: 16px;
        font-weight: 600;
        background: #f7f7f7;
        border: 0.5px solid #d0d0d0;
        cursor: pointer;

        &:hover {
            background: white;
        }
    }
}
`;

export const ProductBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
    font-size: 14px;
`;

export const BreadcrumbLink = styled(Link)`
    color: #9a9a9a;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #454545;
        text-decoration: underline;
    }
`;

export const BreadcrumbSeparator = styled.span`
    color: #454545;
    font-weight: 500;
`;
