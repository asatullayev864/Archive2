import styled from "styled-components";

export const BlogSection = styled.section`
    padding: 55px 225px;
    margin-top: 50px;
    margin-bottom: 15px;

    @media(max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const BlogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 24px;
    }
`;

export const BlogTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;

    @media(max-width: 768px) {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 16px;
    }
`;

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;


export const BlogCard = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    transition: transform 0.2s ease;

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    &:hover {
        transform: translateY(-4px);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    @media(max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;

        img {
            width: 100%;
            height: auto;
        }
    }
`;

export const BlogCardTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #222;
    margin-top: 16px;
    margin-bottom: 12px;
    line-height: 1.3;
    white-space: pre-line;
`;

export const BlogCardDate = styled.span`
    font-size: 12px;
    color: #999;
`;

export const BlogMobileButton = styled.div`
    display: none;

    @media(max-width: 768px) {
        display: block;
        margin-top: 24px;

        button {
            width: 100%;
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

export const BlogButton = styled.button`
    padding: 10px 18px;
    border-radius: 24px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    font-weight: 400;

    &:hover {
        background: #f5f5f5;
    }

    &.desktop-button {
        @media(max-width: 768px) {
            display: none;
        }
    }
`;

export const Breadcrumbs = styled.div`
  font-size: 13px;
  color: #9a9a9a;
  margin-bottom: 24px;
`;

export const CrumbLink = styled.span`
  cursor: pointer;
  color: #9a9a9a;

  &:hover {
    text-decoration: underline;
  }
`;

export const CrumbCurrent = styled.span`
  color: #454545;
  font-weight: 500;
`;