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
  Breadcrumbs,
  CrumbLink,
  CrumbCurrent
} from "../Return/ReturnPage.styled";

function GuaranteesPage() {
    return (
        <Wrapper>
            <Breadcrumbs>
                <CrumbLink as={Link} to="/">Главная</CrumbLink>
                <span> &gt; </span>
                <CrumbCurrent>Гарантии</CrumbCurrent>
            </Breadcrumbs>
      
            <ContentWrapper>
                <TitleWrapper>
                    <Title>Гарантии</Title>
                </TitleWrapper>

                <SectionsWrapper>
                    <Section>
                        <SectionTitle>Обмен и возврат по желанию покупателя</SectionTitle>

                        <Text>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.</Text>
                        <Text>Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:</Text>
                        <Text blue>• Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</Text>
                        <Text blue>• Привезти товар к нам на склад или отправить его транспортной компанией.</Text>
                        <Text blue>• После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</Text>
                        <Text>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.</Text>
                        <Text>Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</Text>
                    </Section>
                </SectionsWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default GuaranteesPage;
