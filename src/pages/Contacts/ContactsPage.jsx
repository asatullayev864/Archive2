import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Kantakt,
    Contact_texts,
    MapWrapper,
    MapOverlay,
    PhoneLink
} from "./ContactsPage.styled";

function ContactsPage() {
    return (
        <Container>
            <div className="container">
                <Kantakt>
                    <div className="Katalog_strelka">
                        <Link to="/">Главная</Link>
                        <span>&gt;</span>
                        <span>Контакты</span>
                    </div>
                </Kantakt>

                <Contact_texts>
                    <div>
                        <h1>Контакты</h1>
                    </div>

                    <div className="kontakt_p">
                        <h2>
                            <PhoneLink href="tel:+78008904656">8 (800) 890-46-56</PhoneLink>
                        </h2>
                        <p>Пн-Пт: 10:00 до 19:00</p>
                        <p>Сб-Вс: заказ через корзину</p>
                    </div>
                </Contact_texts>

            </div>

            <MapWrapper>
                <iframe
                    title="yandex-map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c2a9d3f4c"
                    frameBorder="0"
                />

                <MapOverlay>
                    <div>
                        <h2>Адрес магазина</h2>
                        <p>г. Москва, Дмитровское шоссе д.100с2</p>
                    </div>

                    <div>
                        <h2>Почта</h2>
                        <p>jorabekasatullayev61@mail.com</p>
                    </div>

                    <div>
                        <h2>Телефон</h2>
                        <p>
                            <PhoneLink href="tel:+78008904656">8 (800) 890-46-56</PhoneLink>
                        </p>
                    </div>

                    <div>
                        <button>Оставить заявку</button>
                    </div>
                </MapOverlay>
            </MapWrapper>

        </Container>
    );
}

export default ContactsPage;
