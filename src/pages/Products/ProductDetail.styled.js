import styled from "styled-components";
import { Link } from "react-router-dom";

export const Breadcrumb = styled.div`
    font-size: 14px;
    color: #999;
    margin-bottom: 24px;
`;

export const BreadcrumbLink = styled(Link)`
    color: #999;
    text-decoration: none;
`;

export const ImageBlock = styled.div`
    flex-shrink: 0;

    img {
        width: 420px;

        @media (max-width: 768px) {
            width: 400px;
        }
    }
`;


export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const InfoTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const SmallImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: ${({ active }) => (active ? '#000' : '#f5f5f5')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
`;

export const Brand = styled.p`
    color: #999;
`;

export const Article = styled.p`
    color: #999;
`;

export const Stock = styled.p`
    color: #4caf50;
    font-size: 14px;
`;

export const Price = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin-top: 16px;
`;

export const OldPrice = styled.span`
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
    margin-left: 12px;
`;

export const Description = styled.p`
    margin-top: 16px;
    color: #555;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 3px 8px;

    button {
        width: 32px;
        height: 32px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #fff;
        cursor: pointer;

        &:hover {
            background: #f5f5f5;
        }
    }

    span {
        min-width: 20px;
        text-align: center;
        display: inline-block;
    }
`;

export const CartButton = styled.button`
    background: #000;
    color: #fff;
    padding: 12px 24px;
    border-radius: 24px;
    border: none;
`;

export const LikeIcon = styled.img`
    width: 24px;
    cursor: pointer;
`;

export const Section = styled.section`
    padding: 5px 225px;

    @media (max-width: 1024px) {
        padding: 5px 50px;
    }

    @media (max-width: 768px) {
        padding: 5px 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    gap: 55px;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const Image = styled.img`
    width: 420px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px;
    background: #fff;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
    }
`;

export const RightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const ImagesRow = styled.div`
    display: flex;
    gap: 8px;

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const Characteristics = styled.div`
    margin-top: 120px;
    margin-bottom: 60px;

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    @media (max-width: 768px) {
        margin-top: 60px;
        margin-bottom: 40px;

        h2 {
            font-size: 20px;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 15px;
    border: 1px solid #f8f6f6ff;
    border-radius: 10px;
    overflow: hidden;

    tr:nth-child(even) {
        background: #f6f6f6;
    }

    th,
    td {
        padding: 14px 16px;
        vertical-align: top;
    }

    @media (max-width: 768px) {
        font-size: 14px;

        th {
            width: 120px;
        }

        td {
            word-break: break-word;
        }
    }
`;
