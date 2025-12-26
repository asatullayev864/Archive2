import styled from "styled-components";


export const WhyUsSection = styled.section`
    padding: 50px 225px;
`;

export const WhyUsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

export const WhyUsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
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
`;

export const WhyUsCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #fff;
    padding: 24px;
    border: 1px solid #ddd;
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
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #454545;
  line-height: 1.4;
`;