import styled from "styled-components";

export const PageWrapper = styled.section`
  padding: 50px 225px;

  @media (max-width: 768px) {
    padding: 24px 16px;
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

/* GRID */
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: start; /* MUHIM */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* CHAP */
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoCard = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 36px 32px;
  text-align: center;
`;

export const InfoNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const InfoText = styled.div`
  font-size: 14px;
  color: #666;
`;

/* ONG */
export const TextColumn = styled.div`
  padding-top: 0; /* sarlavha bilan bir chiziqda */
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #454545;
`;
