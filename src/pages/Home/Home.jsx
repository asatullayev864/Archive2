import Banner from '../../layout/Layoutbar/Banner';
import Catalog from '../../layout/Layoutbar/Catalog';
import WhyUs from '../../layout/Layoutbar/WhyUs';
import Product from '../../layout/Layoutbar/Products';
import Brands from '../../layout/Layoutbar/Brands';
import Blog from '../../layout/Layoutbar/Blog';
import Lighting from '../../layout/Layoutbar/Lighting';

function Home() {
    return (
        <>
            <Banner />
            <Catalog />
            <WhyUs />
            <Product />
            <Brands />
            <Blog />
            <Lighting />
        </>
    );
}

export default Home;
