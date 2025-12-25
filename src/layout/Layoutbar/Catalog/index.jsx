import React from "react";
import {
    CatalogSection,
    CatalogHeader,
    CatalogTitle,
    CatalogButton,
    CatalogGrid,
    CatalogCard,
    CardTitle,
    CardPrice,
    CardImage,
} from './Catalog.styled';

import a1 from '../../../components/icons/src/Catalog/a1.svg';
import a2 from '../../../components/icons/src/Catalog/a2.svg';
import a3 from '../../../components/icons/src/Catalog/a3.svg';
import a4 from '../../../components/icons/src/Catalog/a4.svg';
import a5 from '../../../components/icons/src/Catalog/a5.svg';
import a6 from '../../../components/icons/src/Catalog/a6.svg';

const items = [
    { title: "Люстры", img: a1 },
    { title: "Светильники", img: a2 },
    { title: "Бра", img: a3 },
    { title: "Торшеры", img: a4 },
    { title: "Настольные лампы", img: a5 },
    { title: "Споты", img: a6 },
]

function Catalog() {
    return (
        <CatalogSection>
            <CatalogHeader>
                <CatalogTitle>Каталог</CatalogTitle>
                <CatalogButton>Весь каталог →</CatalogButton>
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
        </CatalogSection>
    );
}

export default Catalog;
