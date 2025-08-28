/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

const MenuList = ({ productsArrayRead, categories, limit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const safeProducts = Array.isArray(productsArrayRead) ? productsArrayRead : [];

    // فیلتر محصولات
    const filteredProducts = useMemo(() => {
        return safeProducts.filter(product => {
            const matchCategory = activeCategory === 'all' || product.category === activeCategory;
            const matchSearch = product.foodName.toLowerCase().includes(searchTerm.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [safeProducts, activeCategory, searchTerm]);

    // رندر محصولات با limit و See More
    const renderedFoods = filteredProducts.length >= 1
        ? filteredProducts.map((product, index) => {
            const currentNum = index + 1;

            if (limit && currentNum <= 11) {
                return (
                    <article key={product.id} >
                        <ProductCard product={product} />
                    </article>
                );
            }

            if (limit && currentNum === 12) {
                return (
                    <article key={product.id} >
                        <ProductCard product={product} blurred linkTo="/menu" />
                    </article>
                );
            }

            if (!limit) {
                return (
                    <article key={product.id}>
                        <ProductCard product={product} />
                    </article>
                );
            }

            return null;
        })
        : (
            <div className="shadow-sm m-2 mt-0 rounded-lg w-full h-[320px] border border-brown-border flex justify-center items-center text-[38px] font-bold text-brown-light">
                Not Found!
            </div>
        );

    return (
        <section id="menu" className="mt-10">
            <h1 className="font-bold text-4xl ms-2">{limit ? "Our Menu" : ""}</h1>

            <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* لیست محصولات */}
            <div className="foods-item mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-50">
                {renderedFoods}
            </div>
        </section>
    );
};

export default MenuList;