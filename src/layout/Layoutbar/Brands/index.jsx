import React from 'react';

import brand1 from '../../../components/icons/src/Brands/brand1.svg';
import brand2 from '../../../components/icons/src/Brands/brand2.svg';
import brand3 from '../../../components/icons/src/Brands/brand3.svg';

import {
    BrandSection,
    BrandHeader,
    BrandTitle,
    BrandButton,
    BrandCard,
    BrandGrid,
} from './Brands.styled';

function Brands() {
    return (
        <BrandSection>
            <BrandHeader>
                <BrandTitle>Только проверенные бренды</BrandTitle>

                <BrandButton>
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </BrandButton>
            </BrandHeader>

            <BrandGrid>
                <BrandCard><img src={brand1} alt="brand" /></BrandCard>
                <BrandCard><img src={brand2} alt="brand" /></BrandCard>
                <BrandCard><img src={brand3} alt="brand" /></BrandCard>
                <BrandCard><img src={brand1} alt="brand" /></BrandCard>
            </BrandGrid>
        </BrandSection>
    );
}

export default Brands;
