import styled from "styled-components";

export const BlogSection = styled.section`
    padding: 50px 225px;
`;

export const BlogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`;

export const BlogTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
`;

export const BlogButton = styled.button`
    padding: 10px 18px;
    border-radius: 24px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background: #f5f5f5;
    }
`;

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const BlogCard = styled.div`
    position: relative;
    cursor: pointer;
    transition: 0.2s ease;
    display: flex;
    flex-direction: column;

    padding-bottom: 16px;

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    &:hover {
        transform: translateY(-4px);
    }

    // To'g'ri chiziq qoshish
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export const BlogCardTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #222;
    margin-top: 30px;
    margin-bottom: 16px;
    line-height: 1.3;
    white-space: pre-line;
`;

export const BlogCardDate = styled.span`
    font-size: 12px;
    color: #999;
`;