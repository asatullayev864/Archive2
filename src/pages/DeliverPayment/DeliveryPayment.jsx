import React from "react";
import { Link } from "react-router-dom";

import {
  Wrapper,
  Title,
  TitleWrapper,
  ContentWrapper,
  SectionsWrapper,
  Section,
  SectionTitle,
  Text,
  MapWrapper,
  Breadcrumbs,
  CrumbLink,
  CrumbCurrent
} from "./DeliveryPayment.styled";

function DeliveryPayment() {
  return (
    <Wrapper>
      <Breadcrumbs>
          <CrumbLink as={Link} to="/">Главная</CrumbLink>
          <span> &gt; </span>
          <CrumbCurrent>О компании</CrumbCurrent>
      </Breadcrumbs>
      
      <ContentWrapper>
        <TitleWrapper>
          <Title>Доставка <br /> и оплата</Title>
        </TitleWrapper>

        <SectionsWrapper>
          <Section>
            <SectionTitle>Доставка</SectionTitle>
            <Text>
              Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель
            </Text>
          </Section>

          <Section>
            <SectionTitle>Курьерская доставка</SectionTitle>
            <Text>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
            </Text>
          </Section>

          <Section>
            <SectionTitle>Самовывоз</SectionTitle>
            <Text>
              Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2
            </Text>
          </Section>
        </SectionsWrapper>
      </ContentWrapper>

      <MapWrapper>
        <iframe
          title="map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c2a9d3f4c"
          frameBorder="0"
        />
      </MapWrapper>
    </Wrapper>
  );
}

export default DeliveryPayment;
