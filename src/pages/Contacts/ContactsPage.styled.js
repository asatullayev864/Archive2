import styled from "styled-components";

export const Container = styled.div`
  padding: 55px 225px;

  @media (max-width: 1200px) {
    padding: 55px 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Kantakt = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;

    a {
      color: #454545;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #bbb8b8;
      }
    }

    span {
      color: #454545;
    }
  }
`;

export const Contact_texts = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    color: #454545;

    @media (min-width: 768px) {
      font-size: 64px;
    }
  }

  & h2 {
    font-weight: 600;
    font-size: 20px;
    color: #454545;
    padding-bottom: 10px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    color: #454545;
  }

  .kontakt_p {
    width: 100%;
    @media (min-width: 768px) {
      width: 215px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 55px 225px;

  @media (max-width: 1200px) {
    padding: 55px 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
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
  color: #555;
`;

export const MapWrapper = styled.div`
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  width: calc(100% + 260px);
  margin-left: -135px;

  iframe {
    width: 100%;
    height: 500px;
    border: 0;
  }

  @media (max-width: 992px) {
    width: calc(100% + 100px);
    margin-left: -50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;

    iframe {
      height: 400px;
    }
  }
`;

export const MapOverlay = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 1000px;
  background: #fff;
  border-radius: 15px;
  padding: 28px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    width: 100%;
    max-width: none;
    margin-top: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
    gap: 16px;
  }
`;



export const PhoneLink = styled.a`
  color: #454545;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;
