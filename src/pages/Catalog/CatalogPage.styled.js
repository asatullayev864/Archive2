import styled from "styled-components";

export const PageWrapper = styled.section`
  padding: 50px 225px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const CatalogCard = styled.div`
  background: #f5f5f5;
  border-radius: 25px;
  padding: 20px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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

// styled.js
export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const LastRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
    & > :last-child {
      grid-column: 1 / -1;
    }

  }
`;

export const CategoryBar = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 30px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  span {
    font-size: 12.5px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 20px;
    background: #f5f5f5;
    flex-shrink: 0;

    &:hover {
      background: #e0e0e0;
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
    span {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;
