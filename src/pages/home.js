import React from 'react';
import { productList } from '../data/product';
import { foodCategory } from '../data/category';
import MenuList from '../components/MenuList';
import WhyUs from '../components/WhyUs';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='xl:px-14 lg:px-6 px-3'>
            <Header />
            <MenuList
                productsArrayRead={productList}
                categories={foodCategory}
                limit={true}
            />
            <AboutUs />
            <WhyUs />
        </div>
    );
};

export default Home;