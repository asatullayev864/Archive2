import styled from "styled-components";

export const LightingSection = styled.section`
    padding: 50px 225px;

    @media(max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const LightingContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 305px;

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const LightingHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LightingTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 28px;
        line-height: 1.3;
    }
`;

export const LightingText = styled.p`
    font-size: 16px;
    line-height: 1.7;
    color: #333;
    max-width: 600px;

    @media(max-width: 768px) {
        max-width: 100%;
    }
`;
