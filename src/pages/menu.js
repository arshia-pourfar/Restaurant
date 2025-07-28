import React, { useState } from 'react';
import { foodCategory, productList } from '../App';
import { Rating } from 'react-simple-star-rating';
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
`;

function Menu({ limit = false }) {

    const [productsArrayRead, setProductsArrayRead] = useState(productList);

    function handleClick(category) {
        foodCategory.filter(setIsActiveFalse);
        function setIsActiveFalse(cat) {
            return cat.isActive = false;
        }
        foodCategory.find(setIsActiveTrue);
        function setIsActiveTrue(cat) {
            if (cat.foodName === category) {
                return cat.isActive = true;
            }
        }
        if (category !== 'all') {
            const newProductsArray = productList.filter(creatNewProductList);
            function creatNewProductList(product) {
                if (product.category === category) {
                    return product;
                }
            }
            setProductsArrayRead(newProductsArray);
        } else {
            setProductsArrayRead(productList);
        }
    }
    const listCatItem = foodCategory.map(cat =>
        <div className={cat.isActive ? 'active' : ''}>
            <div onClick={() => handleClick(cat.foodName)} className='mx-2 px-6 py-2 rounded-md text-white bg-[#2E1B1B] text-lg opacity-20 text-center font-semibold cursor-pointer' >
                <h1 >{cat.foodName}</h1>
            </div>
        </div >
    );
    let childNum = -1;
    const listFoodItem = productsArrayRead.map(product =>
        <article key={product.id} className='items basis-1/4 p-2'>
            {(() => {
                if (productsArrayRead.length >= 1) {
                    childNum++;
                    if (limit === true) {
                        if (childNum <= 10) {
                            return (
                                <div className='text-center rounded-md h-[320px] shadow-md border-[1px] border-[#0000002d] py-3 px-4'>
                                    <div className='image text-center'>
                                        <img className='h-[100px] m-auto' src={product.imageSrc} alt="" />
                                    </div>
                                    <h1 className='font-bold text-[22px] mt-2 line-clamp-1'>{product.foodName}</h1>
                                    <p className='line-clamp-2 text-[14px] leading-5 mt-1'>{product.description}</p>
                                    {(() => {
                                        if (product.discount) {
                                            return (
                                                <div className='flex justify-between items-center h-[50px] mt-5'>
                                                    <div className='flex flex-col items-start'>
                                                        <span className='text-green-600 font-bold text-xl'>
                                                            ${product.price}
                                                            <span className='bg-[#FED03B] text-white px-[10px] py-[1px] rounded-full ms-2 text-[16px]'>{product.discount}</span>
                                                        </span>
                                                        <span className='text-[#F53D37] font-extrabold text-sm line-through'>
                                                            ${product.price}
                                                        </span>
                                                    </div>
                                                    <i className='fas fa-cart-shopping text-[#2E1B1B] fa-xl cursor-pointer'></i>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className='flex justify-between items-center mt-5 h-[50px]'>
                                                    <span className='text-green-600 font-bold text-xl inline-block'>
                                                        ${product.price}
                                                    </span>
                                                    <i className='fas fa-cart-shopping text-[#2E1B1B] fa-xl cursor-pointer'></i>
                                                </div>

                                            );
                                        }
                                    })()}
                                    <div className='border-t-[1px] h-[30px] mt-3 flex justify-between items-center'>
                                        <div className='flex items-center'>
                                            <Rating
                                                size={20}
                                                initialValue={product.productRate}
                                                readonly={true}
                                                allowFraction
                                                fillColor='#FED03B'
                                                emptyColor='gray'
                                            />
                                            <span className='rate-number h-[17px] font-semibold ms-2'>
                                                {product.productRate}
                                            </span>
                                        </div>
                                        <div className='text-gray-400 font-semibold mt-1'>
                                            (0 Review)
                                        </div>
                                    </div>
                                </div>
                            );
                        } else if (childNum >= 10 && childNum <= 11) {
                            return (
                                <NavLink className='font-medium' to="/menu" >
                                    <div className='text-center rounded-md relative h-[320px] cursor-pointer shadow-md border-[1px] border-[#0000002d] py-3 px-4 flex flex-col items-center justify-center'>
                                        <div className='absolute blur-[4px] p-3'>
                                            <div className='image text-center'>
                                                <img className='h-[100px] m-auto' src={product.imageSrc} alt="" />
                                            </div>
                                            <h1 className='font-bold text-[22px] mt-2 line-clamp-1'>{product.foodName}</h1>
                                            <p className='line-clamp-2 text-[14px] leading-5 mt-1'>{product.description}</p>
                                            {(() => {
                                                if (product.discount) {
                                                    return (
                                                        <div className='flex justify-between items-center h-[50px] mt-5'>
                                                            <div className='flex flex-col items-start'>
                                                                <span className='text-green-600 font-bold text-xl'>
                                                                    ${product.price}
                                                                    <span className='bg-[#FED03B] text-white px-[10px] py-[1px] rounded-full ms-2 text-[16px]'>{product.discount}</span>
                                                                </span>
                                                                <span className='text-[#F53D37] font-extrabold text-sm line-through'>
                                                                    ${product.price}
                                                                </span>
                                                            </div>
                                                            <i className='fas fa-cart-shopping fa-xl'></i>
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div className='flex justify-between items-center mt-5 h-[50px]'>
                                                            <span className='text-green-600 font-bold text-xl inline-block'>
                                                                ${product.price}
                                                            </span>
                                                            <i className='fas fa-cart-shopping fa-xl'></i>
                                                        </div>

                                                    );
                                                }
                                            })()}
                                            <div className='border-t-[1px] h-[30px] mt-3 flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <Rating
                                                        size={20}
                                                        initialValue={product.productRate}
                                                        readonly={true}
                                                        fillColor='orange'
                                                        emptyColor='gray'
                                                    />
                                                    <span className='rate-number h-[17px] font-semibold ms-2'>
                                                        {product.productRate}
                                                    </span>
                                                </div>
                                                <div className='text-gray-400 font-semibold mt-1'>
                                                    (0 Review)
                                                </div>
                                            </div>
                                        </div>
                                        <div className='z-10'>
                                            <i className="fa-solid fa-circle-arrow-right text-[#2E1B1B] text-5xl"></i>
                                            <div className='font-semibold text-[#2E1B1B] mt-2'>See More</div>
                                        </div>
                                    </div>
                                </NavLink>
                            );
                        }
                    } else {
                        return (
                            <div className='text-center rounded-md h-[320px] shadow-md border-[1px] border-[#0000002d] py-3 px-4'>
                                <div className='image text-center'>
                                    <img className='h-[100px] m-auto' src={product.imageSrc} alt="" />
                                </div>
                                <h1 className='font-bold text-[22px] mt-2 line-clamp-1'>{product.foodName}</h1>
                                <p className='line-clamp-2 text-[14px] leading-5 mt-1'>{product.description}</p>
                                {(() => {
                                    if (product.discount) {
                                        return (
                                            <div className='flex justify-between items-center h-[50px] mt-5'>
                                                <div className='flex flex-col items-start'>
                                                    <span className='text-green-600 font-bold text-xl'>
                                                        ${product.price}
                                                        <span className='bg-[#FED03B] text-white px-[10px] py-[1px] rounded-full ms-2 text-[16px]'>{product.discount}</span>
                                                    </span>
                                                    <span className='text-[#F53D37] font-extrabold text-sm line-through'>
                                                        ${product.price}
                                                    </span>
                                                </div>
                                                <i className='fas fa-cart-shopping text-[#2E1B1B] fa-xl '></i>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className='flex justify-between items-center mt-5 h-[50px]'>
                                                <span className='text-green-600 font-bold text-xl inline-block'>
                                                    ${product.price}
                                                </span>
                                                <i className='fas fa-cart-shopping text-[#2E1B1B] fa-xl'></i>
                                            </div>

                                        );
                                    }
                                })()}
                                <div className='border-t-[1px] h-[30px] mt-3 flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <Rating
                                            size={20}
                                            initialValue={product.productRate}
                                            readonly={true}
                                            allowFraction
                                            fillColor='#FED03B'
                                            emptyColor='gray'
                                        />
                                        <span className='rate-number h-[17px] font-semibold ms-2'>
                                            {product.productRate}
                                        </span>
                                    </div>
                                    <div className='text-gray-400 font-semibold mt-1'>
                                        (0 Review)
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            })()}
        </article>
    );

    return (
        <section id='menu' className='mt-10 px-12'>
            <h1 className='font-bold text-4xl ms-2'>Our Menu</h1>
            <div className='category flex justify-start items-center mt-8'>
                {listCatItem}
            </div>
            <div className='foods-item flex flex-wrap justify-start items-center mt-8'>
                {(() => {
                    if (listFoodItem.length >= 1) {
                        return listFoodItem;
                    } else {
                        return (
                            <div className='shadow-sm m-2 mt-0 rounded-lg w-full h-[320px] border-[1px] border-[#2e1b1b2a] flex justify-center items-center text-[38px] font-bold text-[#2e1b1b7e]'>
                                Not Found!
                            </div>
                        )
                    }
                })()}
            </div>
        </section>
    );
}

export default Menu;