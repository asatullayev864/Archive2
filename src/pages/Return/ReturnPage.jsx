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
} from "./ReturnPage.styled";

function ReturnPage() {
    return (
        <Wrapper>
            <Breadcrumbs>
                <CrumbLink as={Link} to="/">Главная</CrumbLink>
                <span> &gt; </span>
                <CrumbCurrent>Возврат</CrumbCurrent>
            </Breadcrumbs>
      
            <ContentWrapper>
                <TitleWrapper>
                    <Title>Возврат</Title>
                </TitleWrapper>

                <SectionsWrapper>
                    <Section>
                        <SectionTitle>Обмен и возврат по желанию покупателя</SectionTitle>
                        <Text>
                            Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:
                        </Text>

                        <Text blue>• Товар имеет первоначальный вид, имеется товарная кондиция;</Text>
                        <Text blue>• Товар имеет полную комплектацию, включая упаковочные материалы;</Text>
                        <Text blue>• Товар не имеет следов подключения и не имеет признаков монтажа;</Text>
                        <Text blue>• Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</Text>
                        <Text blue>• Есть документ, подтверждающий покупку в нашем интернет-магазине.</Text>
                        <Text blue>• Для возврата товара необходимо привезти его к нам в офис.</Text>
                        <Text blue>• Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании оплачиваются клиентом.</Text>
                        <Text blue>*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера.</Text>

                    </Section>

                    <Section>
                        <SectionTitle>Обмен и возврат по ошибке продавца</SectionTitle>
                        <Text>Причины обмена или возврата по ошибке продавца:</Text>
                        <Text blue>• Неполная комплектация товара</Text>
                        <Text blue>• Брак или дефект товара</Text>
                        <Text blue>• Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</Text>
                        <Text blue>• Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно.</Text>
                    </Section>

                    <Section>
                        <SectionTitle>Возврат денежных средств</SectionTitle>
                        <Text>Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.</Text>
                    </Section>
                </SectionsWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default ReturnPage;
