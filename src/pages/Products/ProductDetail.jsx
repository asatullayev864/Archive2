import React, { useState } from "react";
import { Link } from "react-router-dom";

import productImg from "../../components/icons/src/Product/pr.svg";
import like from "../../components/icons/src/Product/like.svg";
import a1 from '../../components/icons/src/Product/a1.svg';
import a2 from '../../components/icons/src/Product/a2.svg';
import a3 from '../../components/icons/src/Product/a3.svg';
import a4 from '../../components/icons/src/Product/a4.svg';
import a5 from '../../components/icons/src/Product/a5.svg';

import {
    Section,
    Breadcrumb,
    BreadcrumbLink,
    Title,
    Brand,
    Article,
    Stock,
    Price,
    OldPrice,
    Description,
    Actions,
    Counter,
    CartButton,
    LikeIcon,
    Image,
    ImagesRow,
    SmallImage,
    Content,
    ImageBlock,
    InfoBlock,
    RightTop,
    InfoTexts,
    Characteristics,
    Table
} from "./ProductDetail.styled";

const imagess = [a1, a2, a3, a4, a5];

function ProductDetail() {
    const [count, setCount] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Section>
            <Breadcrumb>
                <BreadcrumbLink to="/">Главная</BreadcrumbLink>
                <span>{'>'}</span>
            </Breadcrumb>

            <Content>
                <ImageBlock>
                    <Image src={productImg} />
                </ImageBlock>

                <InfoBlock>
                    <Title>Встраиваемый светильник Novotech</Title>
                    <RightTop>
                        <InfoTexts>
                            <Brand>Scott</Brand>
                            <Article>Артикул: 7655-188</Article>
                            <Stock>В наличии</Stock>
                        </InfoTexts>

                        <ImagesRow>
                            {imagess.map((img, index) => (
                                <SmallImage
                                    key={index}
                                    active={index === activeIndex}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <img src={img} alt={`preview-${index}`} />
                                </SmallImage>
                            ))}
                        </ImagesRow>
                    </RightTop>

                    <Price>
                        435 000 ₽
                        <OldPrice>522 000 ₽</OldPrice>
                    </Price>

                    <Description>
                        Профессиональный гоночный хардтейл для кросс-кантри уровня
                        Чемпионата и Кубка Мира. Одна из самых легких рам среди
                        гоночных хардтейлов.
                    </Description>

                    <Actions>
                        <Counter>
                            <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </Counter>

                        <CartButton>В корзину</CartButton>
                        <LikeIcon src={like} />
                    </Actions>
                </InfoBlock>
            </Content>

                    <Characteristics>
                        <h2>Характеристика</h2>

                        <Table>
                            <tbody>
                                <tr>
                                    <th>Цвет</th>
                                    <td>Жёлтый</td>
                                </tr>
                                <tr>
                                    <th>Год</th>
                                    <td>2016</td>
                                </tr>
                                <tr>
                                    <th>Диаметр колеса</th>
                                    <td>27.5</td>
                                </tr>
                                <tr>
                                    <th>Материал рамы</th>
                                    <td>Карбон</td>
                                </tr>
                                <tr>
                                    <th>Размер</th>
                                    <td>L</td>
                                </tr>
                                <tr>
                                    <th>Страна</th>
                                    <td>Швейцария</td>
                                </tr>
                                <tr>
                                    <th>Производитель</th>
                                    <td>Scott</td>
                                </tr>
                                <tr>
                                    <th>Покрышки</th>
                                    <td>
                                        Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy
                                    </td>
                                </tr>
                                <tr>
                                    <th>Рама</th>
                                    <td>
                                        Scale Carbon / HMX-технология / IMP / BB92 / SDS / IDS SL
                                    </td>
                                </tr>
                                <tr>
                                    <th>Подседельный Штырь</th>
                                    <td>
                                        Ritchey WCS 700 Series / Carbon Link FlexLogic / 31.6mm
                                    </td>
                                </tr>
                                <tr>
                                    <th>Седло</th>
                                    <td>Ritchey WCS Streem V3 Titanium rails</td>
                                </tr>
                                <tr>
                                    <th>Вилка</th>
                                    <td>
                                        Rock Shox SID RL3 Air / DNA3 / 100mm
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Characteristics>
        </Section>
    );
}

export default ProductDetail;
