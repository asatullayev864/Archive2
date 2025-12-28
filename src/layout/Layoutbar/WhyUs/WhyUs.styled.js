import styled from "styled-components";


export const WhyUsSection = styled.section`
    padding: 50px 225px;

    @media (max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const WhyUsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        .desktop-button {
        display: none;
        }
    }
`;

export const WhyUsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 34px;
        line-height: 1.3;
        max-width: 100%;
    }
`;

export const WhyUsButton = styled.button`
    padding: 10px 18px;
    border-radius: 24px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
    }
`;

export const WhyUsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
`;

export const WhyUsCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #fff;
    padding: 24px;
    border: 1px solid #ddd;

    @media (max-width: 768px) {
        gap: 24px;
        padding: 16px;
    }
`;

export const WhyUsIcon = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #454545;
    border-radius: 12px;
    margin: 0 auto 16px;
    margin-bottom: 16px;

    img {
        width: 40px;
        height: 40px;
    }

`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 768px) {
        
    }
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #454545;
  line-height: 1.4;

  @media (max-width: 768px) {
        
    }
`;

export const WhyUsMobileButton = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin-top: 36px;

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
