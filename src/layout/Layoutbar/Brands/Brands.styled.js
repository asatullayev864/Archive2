import styled from "styled-components";

export const BrandSection = styled.section`
    padding: 50px 225px;
`;

export const BrandHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`;

export const BrandTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
`;

export const BrandButton = styled.div`
    display: flex;
    gap: 8px;

    button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;
    }
`;

export const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const BrandCard = styled.div`
    height: 90px;
    border: 1px solid #eaeaea;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    img {
        max-width: 120px;
        max-height: 40px;
        opacity: 0.7;
    }

    &:hover img {
        opacity: 1;
    }
`;

