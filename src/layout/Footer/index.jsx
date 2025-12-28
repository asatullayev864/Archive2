import React from 'react';
import brandLogo from '../../components/icons/src/NORLIGHT/Vector.svg';
import PaymentLogos from '../../assets/payments.png';
import VkIcon from '../../components/icons/src/NORLIGHT/vk.svg';

import {
    FooterWrapper,
    FooterGrid,
    FooterColumn,
    FooterPhone,
    SocialRow,
    FooterLogo
} from './Footer.styled';

function Footer() {
    return (
        <FooterWrapper>
            <div className='container'>
                <FooterGrid>
                    <FooterColumn>
                        <FooterLogo>
                            <img src={brandLogo} alt="NORNLIGHT" />
                            <span>NORNLIGHT</span>
                        </FooterLogo>

                        <FooterPhone href="tel:88008904656">8 (800) 890-46-56</FooterPhone>
                        <img src={PaymentLogos} alt="Payments" width={180} />

                        <a href="/">Политика конфиденциальности</a>
                        <a href="/">Пользовательское соглашение</a>

                        <SocialRow>
                            <img src={VkIcon} alt="VK" />
                            <img src={VkIcon} alt="VK" />
                            <img src={VkIcon} alt="VK" />
                        </SocialRow>
                    </FooterColumn>

                    <FooterColumn>
                        <h4>Покупателям</h4>
                        <a href="/">О компании</a>
                        <a href="/">Доставка и оплата</a>
                        <a href="/">Возврат</a>
                        <a href="/">Гарантии</a>
                        <a href="/">Контакты</a>
                        <a href="/">Блог</a>
                    </FooterColumn>

                    <FooterColumn>
                        <h4>Товары</h4>
                        <a href="/">Люстры</a>
                        <a href="/">Светильники</a>
                        <a href="/">Бра</a>
                        <a href="/">Торшеры</a>
                        <a href="/">Комплектующие</a>
                        <a href="/">Настольные лампы</a>
                        <a href="/">Споты</a>
                        <a href="/">Трековые светильники</a>
                        <a href="/">Уличные светильники</a>
                        <a href="/">Технические светильники</a>
                        <a href="/">Светодиодные ленты</a>
                    </FooterColumn>
                </FooterGrid>
            </div>
        </FooterWrapper>
    );
}

export default Footer;
