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

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    h4 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
    }

    a {
        font-size: 14px; /* kattaroq link */
        color: #222;
        text-decoration: none;

        &:hover {
            color: #555;
        }
    }

    @media(max-width: 768px) {
        h4 {
            font-size: 28px; /* mobile-da ham kattaroq */
        }

        a {
            font-size: 14px;
            color: #555;
            opacity: 0.7;
            text-decoration: none;

             &:hover {
            color: #222;
            opacity: 1;
            }
        }
    }
`;

export const FooterPhone = styled.a`
    font-size: 20px; /* kattaroq telefon raqam */
    font-weight: 600;
    margin: 12px 0;

    @media(max-width: 768px) {
        font-size: 22px;
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

export const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    img {
        width: 40px;
        height: auto;
    }

    span {
        font-size: 32px; /* NORNLIGHT yozuvi kattaroq */
        font-weight: 700;
        color: #222;

        @media(max-width: 768px) {
            font-size: 36px; /* mobile-da ham kattaroq */
        }
    }
`;
