import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 55px 225px;

  @media (max-width: 1200px) {
    padding: 55px 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 165px;

  @media (max-width: 992px) {
    gap: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TitleWrapper = styled.div`
  flex: 0 0 250px;

  @media (max-width: 768px) {
    flex: none;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SectionsWrapper = styled.div`
  flex: 1;
`;

export const Section = styled.div`
  margin-bottom: 25px;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${props => (props.blue ? "#007bff" : "#000")}; /* blue=true -> ko‘k, aks holda qora */
  margin-bottom: 6px;
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
