import styled from "styled-components";
import { bgColors } from '../../../theme';

export const CatalogSection = styled.section`
    padding: 50px 225px;
`;

export const CatalogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

export const CatalogTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;

export const CatalogButton = styled.button`
    padding: 10px 18px;
    border-radius: 24px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
    }
`;

export const CatalogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

export const CatalogCard = styled.div`
    background: #f5f5f5;
    border-radius:  25px;
    padding: 20px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // animatsiya
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05); // 5 foiz kattalashadi
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); // yumshoq soya
    }
`;

export const CardTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin: 10px 0;
`;

export const CardPrice = styled.span`
  font-size: 14px;
  color: #777;
`;

