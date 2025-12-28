import React from 'react';
import { Link } from 'react-router-dom';

import {
    WhyUsMobileButton,
    WhyUsSection,
    WhyUsHeader,
    WhyUsTitle,
    WhyUsButton,
    WhyUsGrid,
    WhyUsCard,
    WhyUsIcon,
    CardTitle,
    CardText
} from './WhyUs.styled';

import B1 from '../../../components/icons/src/WhyUs/b1.svg';
import B2 from '../../../components/icons/src/WhyUs/b2.svg';
import B3 from '../../../components/icons/src/WhyUs/b3.svg';
import B4 from '../../../components/icons/src/WhyUs/b4.svg';

const whyUsItems = [
    {
        title: "Только проверенные бренды",
        text: "Бренды, проверенные временем и качеством",
        img: B1,
    },
    {
        title: "Самые низкие цены",
        text: "Ниже не будет нигде",
        img: B2,
    },
    {
        title: "Быстрая доставка",
        text: "Доставляем за 1–3 дня",
        img: B3,
    },
    {
        title: "Большой ассортимент",
        text: "Более 1000 товаров",
        img: B4
    }
]

function WhyUs() {
    return (
        <WhyUsSection>
            <WhyUsHeader>
                <WhyUsTitle>Почему NORNLIGHT?</WhyUsTitle>
                <WhyUsButton
                    as={Link}
                    to="/about"
                    className="desktop-button">
                    О компании →
                </WhyUsButton>


            </WhyUsHeader>

            <WhyUsGrid>
                {whyUsItems.map((item, index) => {
                    return (
                        <WhyUsCard key={index}>
                            <WhyUsIcon>
                                <img src={item.img} alt={item.title} />
                            </WhyUsIcon>
                            <div>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.text}</CardText>
                            </div>
                        </WhyUsCard>
                    );
                })}
            </WhyUsGrid>

            <WhyUsMobileButton>
                <WhyUsButton as={Link} to="/about">
                    О компании →
                </WhyUsButton>
            </WhyUsMobileButton>

        </WhyUsSection>
    );
}

export default WhyUs;
