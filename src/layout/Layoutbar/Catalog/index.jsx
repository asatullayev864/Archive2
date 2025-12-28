import React from "react";
import { useNavigate } from "react-router-dom";

import {
    CatalogSection,
    CatalogHeader,
    CatalogTitle,
    CatalogButton,
    CatalogMobileButton,
    CatalogGrid,
    CatalogCard,
    CardTitle,
    CardPrice,
    CardImage,
} from './Catalog.styled';

import a1 from '../../../components/icons/src/Catalog/lyustra.svg';
import a2 from '../../../components/icons/src/Catalog/svetilnik.svg';
import a3 from '../../../components/icons/src/Catalog/bra.svg';
import a4 from '../../../components/icons/src/Catalog/torsheri.svg';
import a5 from '../../../components/icons/src/Catalog/stolni_lamps.svg';
import a6 from '../../../components/icons/src/Catalog/spots.svg';

const items = [
    { title: "Люстры", img: a1 },
    { title: "Светильники", img: a2 },
    { title: "Бра", img: a3 },
    { title: "Торшеры", img: a4 },
    { title: "Настольные лампы", img: a5 },
    { title: "Споты", img: a6 },
]

function Catalog() {
    const navigate = useNavigate();
    
    return (
        <CatalogSection>
            <CatalogHeader>
                <CatalogTitle>Каталог</CatalogTitle>
                <CatalogButton onClick={() => navigate("/catalog")}>
                    Весь каталог →
                </CatalogButton>
            </CatalogHeader>

            <CatalogGrid>
                {items.map((item, index) => (
                    <CatalogCard key={index}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardImage src={item.img} alt={item.title} />
                        <CardPrice>От 540₽ →</CardPrice>
                    </CatalogCard>
                ))}
            </CatalogGrid>

            <CatalogMobileButton>
                <button onClick={() => navigate("/catalog")}>
                    Весь каталог →
                </button>
            </CatalogMobileButton>

        </CatalogSection>
    );
}

export default Catalog;
