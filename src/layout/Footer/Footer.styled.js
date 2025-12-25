import styled from "styled-components";
import { bgColors } from "../../theme";

export const FooterWrapper = styled.footer`
    background-color: ${bgColors.lightBlue};
    padding: 60px 0;
    margin-top: auto;
`;

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 0;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
    }

    a {
        font-size: 13px;
        color: #9a9a9a;
        text-decoration: none;

        &:hover {
            color: #555; // sichqoncha ustiga borganda yozuv rangi sal qorayadi
        }
    }
`;

export const SocialRow = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 12px;

    img {
        width: 28px;
        height: 28px;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }
`;


export const FooterPhone = styled.a`
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0;
`;
