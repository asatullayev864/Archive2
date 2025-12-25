import styled from "styled-components";

export const ProductSection = styled.section`
    padding: 50px 225px;
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
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
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
