import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const ProductCard = ({ product, blurred = false, linkTo, showDiscount = true }) => {
    const isBlurred = blurred && linkTo;

    useEffect(() => {
        const stars = document.querySelectorAll('.star-svg');
        stars.forEach((star) => {
            Object.assign(star.style, {
                display: 'inline-block',
                marginBottom: '4px',
            });
        });
    }, []);

    return (
        <div className="relative group h-[340px]">
            <div
                className={`rounded-md relative h-full shadow-md border border-brown-border py-3 px-4 text-center transition-all duration-300 ${isBlurred ? 'blur-[3px] opacity-90 pointer-events-none' : ''
                    }`}
            >
                <div className="image text-center">
                    <img className="h-[100px] mx-auto" src={product.imageSrc} alt={product.foodName} />
                </div>
                <h1 className="font-bold text-[22px] mt-2 line-clamp-1">{product.foodName}</h1>
                <p className="line-clamp-2 text-[14px] leading-5 mt-1">{product.description}</p>

                <div className="flex justify-between items-center h-[50px] mt-5">
                    <div className="flex flex-col items-start">
                        <span className="text-green font-bold text-xl">
                            ${product.price}
                            {product.discount && showDiscount && (
                                <span className="bg-yellow text-white px-2 py-0.5 rounded-full ms-2 text-[16px]">
                                    {product.discount}
                                </span>
                            )}
                        </span>
                        {product.discount && showDiscount && (
                            <span className="text-red font-extrabold text-sm line-through">
                                ${product.price}
                            </span>
                        )}
                    </div>
                    <i className="fas fa-cart-shopping text-brown fa-xl" />
                </div>

                <div className="flex justify-center items-center">
                    <div className='border-t absolute w-[95%] bottom-1 p-2 border-gray-300 flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Rating
                                size={19}
                                initialValue={product.productRate}
                                readonly
                                allowFraction
                                fillColor="#FED03B"
                                emptyColor="gray"
                            />
                            <span className="font-semibold text-sm">{product.productRate}</span>
                        </div>
                        <div className="text-gray-400 font-semibold text-sm">(0 Review)</div>
                    </div>
                </div>
            </div>

            {isBlurred && (
                <NavLink
                    to={linkTo}
                    className="absolute inset-0 flex items-center justify-center rounded-md"
                >
                    <div className="group-hover:scale-110 transition-all flex flex-col items-center justify-center">
                        <i className="fa-solid fa-circle-arrow-right text-brown text-5xl" />
                        <div className="font-semibold text-brown mt-2">See More</div>
                    </div>
                </NavLink>
            )}
        </div>
    );
};

export default ProductCard;