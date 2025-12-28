import React from "react";
import Brands from "../../layout/Layoutbar/Brands";
import Blog from "../../layout/Layoutbar/Blog";
import Lighting from "../../layout/Layoutbar/Lighting";

import {
  PageWrapper,
  PageTitle,
  CatalogGrid,
  CatalogCard,
  CardTitle,
  CardPrice,
    CardImage,
    LastRow,
  CategoryBar
} from "./CatalogPage.styled";

import a1 from '../../components/icons/src/Catalog/lyustra.svg';
import a2 from '../../components/icons/src/Catalog/svetilnik.svg';
import a3 from '../../components/icons/src/Catalog/bra.svg';
import a4 from '../../components/icons/src/Catalog/torsheri.svg';
import a5 from '../../components/icons/src/Catalog/stolni_lamps.svg';
import a6 from '../../components/icons/src/Catalog/spots.svg';
import a7 from '../../components/icons/src/Catalog/trekovie_svetilniki.svg';
import a8 from '../../components/icons/src/Catalog/ulichnie_svetilniki.svg';
import a9 from '../../components/icons/src/Catalog/texnichiskie_svetilniki.svg';
import a10 from '../../components/icons/src/Catalog/svetdiodni_lenti.svg';
import a11 from '../../components/icons/src/Catalog/komplect.svg';

const categories = [
  { title: "Люстры", img: a1 },
  { title: "Светильники", img: a2 },
  { title: "Бра", img: a3 },
  { title: "Торшеры", img: a4 },
  { title: "Настольные лампы", img: a5 },
  { title: "Споты", img: a6 },
  { title: "Трековые светильники", img: a7 },
  { title: "Уличные светильники", img: a8 },
  { title: "Технические светильники", img: a9 },
  { title: "Светодиодные ленты", img: a10 },
  { title: "Комплектующие", img: a11 },
];

function CatalogPage() {

    return (
        <>
            <PageWrapper>
                <CategoryBar>
                    <span>Светильники</span>
                    <span>Люстры</span>
                    <span>Лампы</span>
                    <span>Настольные лампы</span>
                    <span>Ночники</span>
                    <span>Подстветка</span>
                    <span>Уличное освещение</span>
                    <span>Мебельные установки</span>
                </CategoryBar>
                
                <PageTitle>Каталог</PageTitle>

                <CatalogGrid>
                    {categories.slice(0, 9).map((item, index) => (
                        <CatalogCard key={index}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardImage src={item.img} alt={item.title} />
                            <CardPrice>От 540₽ →</CardPrice>
                        </CatalogCard>
                    ))}
                </CatalogGrid>

                <LastRow>
                    {categories.slice(9).map((item, index) => (
                        <CatalogCard key={index}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardImage src={item.img} alt={item.title} />
                            <CardPrice>От 540₽ →</CardPrice>
                        </CatalogCard>
                    ))}
                </LastRow>
            </PageWrapper>

            <Brands />
            
            <Blog />

            <Lighting />
        </>
    );
}

export default CatalogPage;
