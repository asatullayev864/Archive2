import styled from "styled-components";

export const LightingSection = styled.section`
    padding: 50px 225px; /* Products / Brands / Blog bilan bir xil */
`;

export const LightingContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 305px; /* sarlavha va matn orasidagi bo‘shliq */
`;

export const LightingHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LightingTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2; /* 2 qator uchun */
    margin: 0;
`;

export const LightingText = styled.p`
    font-size: 16px;
    line-height: 1.7;
    color: #333;
    max-width: 600px; /* optional: matn o‘ng tomonda normal ko‘rinishi uchun */
`;
