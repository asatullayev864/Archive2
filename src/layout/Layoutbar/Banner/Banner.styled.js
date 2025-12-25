import styled from "styled-components";
import { bgColors } from '../../../theme';

export const BannerWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${bgColors.lightBlue};
  padding: 40px 20px;
  border-radius: 50px;
  margin: 75px;

  .banner__content {
    max-width: 650px;

    h2 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 10px;
      color: #454545;

      padding-left: 130px;

      .highlight-text {
        background-color: #454545;
        color: white;
        padding: 5px 10px;
        border-radius: 50px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }

    span {
      font-size: 1rem;
      color: gray;
    }
  }

  .banner__image {
    transform: translateX(-100px);

    img {
        width: 453px;
        height: 453px;
        height: auto;
        margin-top: -71px;
        display: block;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .banner__image {
      margin-top: 20px;
    }
  }
`;
