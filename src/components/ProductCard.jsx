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
        <div className="relative group h-[340px] z-20">
            <div
                className={`rounded-md relative h-full shadow-md w-full z-20 bg-white border border-brown-border py-3 px-4 text-center transition-all duration-300 ${isBlurred ? 'blur-[3px] opacity-90 pointer-events-none' : ''
                    }`}
            >
                {/* تصویر */}
                <div className="image text-center">
                    <img
                        className="h-[100px] sm:h-[110px] md:h-[120px] mx-auto object-contain"
                        src={product.imageSrc}
                        alt={product.foodName}
                    />
                </div>

                {/* عنوان */}
                <h1 className="font-bold text-[20px] sm:text-[22px] mt-2 line-clamp-1">
                    {product.foodName}
                </h1>

                {/* توضیحات */}
                <p className="line-clamp-2 text-[13px] sm:text-[14px] leading-5 mt-1">
                    {product.description}
                </p>

                {/* قیمت و آیکون */}
                <div className="flex justify-between items-center h-[50px] mt-5">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-green font-bold text-lg sm:text-xl">
                            ${product.price}
                            {product.discount && showDiscount && (
                                <span className="bg-yellow text-white px-2 py-0.5 rounded-full ms-2 text-[14px] sm:text-[16px]">
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
                    <i className="fas fa-cart-shopping text-brown text-lg sm:text-xl" />
                </div>

                {/* امتیاز و نقد */}
                <div className="flex justify-center items-center">
                    <div className="border-t absolute w-[95%] bottom-1 p-2 border-gray-300 flex justify-between items-center text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                            <Rating
                                size={18}
                                initialValue={product.productRate}
                                readonly
                                allowFraction
                                fillColor="#FED03B"
                                emptyColor="gray"
                            />
                            <span className="font-semibold">{product.productRate}</span>
                        </div>
                        <div className="text-gray-400 font-semibold">(0 Review)</div>
                    </div>
                </div>
            </div>

            {/* لایه‌ی بلور و لینک */}
            {isBlurred && (
                <NavLink
                    to={linkTo}
                    className="absolute inset-0 flex items-center justify-center rounded-md"
                >
                    <div className="group-hover:scale-110 transition-all flex flex-col items-center justify-center">
                        <i className="fa-solid fa-circle-arrow-right text-brown text-4xl sm:text-5xl" />
                        <div className="font-semibold text-brown mt-2 text-sm sm:text-base">See More</div>
                    </div>
                </NavLink>
            )}
        </div>
    );
};

export default ProductCard;