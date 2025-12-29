import React from "react";
import { Link } from "react-router-dom";
import Brands from "../../layout/Layoutbar/Brands";
import Blog from "../../layout/Layoutbar/Blog";
import Lighting from "../../layout/Layoutbar/Lighting";

import {
  PageWrapper,
  Breadcrumbs,
  CrumbLink,
  CrumbCurrent,
  AboutGrid,
  LeftColumn,
  PageTitle,
  InfoColumn,
  InfoCard,
  InfoNumber,
  InfoText,
  TextColumn,
  Description
} from "./WhyUs.styled";

function AboutPage() {
  return (
    <>
      <PageWrapper>

        <Breadcrumbs>
          <CrumbLink as={Link} to="/">Главная</CrumbLink>
          <span> &gt; </span>
          <CrumbCurrent>О компании</CrumbCurrent>
        </Breadcrumbs>

        <AboutGrid>
          <LeftColumn>
            <PageTitle>О компании</PageTitle>

            <InfoColumn>
              <InfoCard>
                <InfoNumber>170+</InfoNumber>
                <InfoText>Товаров</InfoText>
              </InfoCard>

              <InfoCard>
                <InfoNumber>1000+</InfoNumber>
                <InfoText>Довольных клиентов</InfoText>
              </InfoCard>

              <InfoCard>
                <InfoNumber>5+</InfoNumber>
                <InfoText>Лет опыта</InfoText>
              </InfoCard>
            </InfoColumn>
          </LeftColumn>

          <TextColumn>
            <Description>
                          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для
                          освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников,
                          от современных и стильных до классических и элегантных. Мы предлагаем
                          качественные и надежные светильники от лучших производителей, которые подарят
                          вам комфорт и уют.
              <br /><br />
                          Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение
                          цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог
                          насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня
                          и превратите ваш дом в оазис тепла и света с NORNLIGHT!
              <br /><br />
                          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для
                          освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников,
                          от современных и стильных до классических и элегантных. Мы предлагаем качественные и
                          надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
              <br /><br />
                          Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены
                          и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться
                          прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
                          дом в оазис тепла и света с NORNLIGHT!
            </Description>
          </TextColumn>
        </AboutGrid>

      </PageWrapper>

      <Brands />
      <Blog />
      <Lighting />
    </>
  );
}

export default AboutPage;
