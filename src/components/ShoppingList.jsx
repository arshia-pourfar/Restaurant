import { productList } from "../data/product";
import ScrollCarousel from 'scroll-carousel-react';

const ShoppingList = () => {
    return (
        <ScrollCarousel autoplay autoplaySpeed={8} speed={7} className="h-72">
            {productList.map(product => (
                <div key={product.id} className="w-52 h-72 flex justify-center items-end relative">
                    <div className="h-full flex justify-center items-center absolute -top-12">
                        <img className="h-[95px] -rotate-[12deg]" src={product.imageSrc} alt={product.foodName} />
                    </div>
                    <div className="w-[210px] h-[190px] shadow-md border-2 p-2 border-gray-300 rounded-xl flex flex-col justify-start items-start">
                        <div className="mt-12">
                            <h1 className="font-bold text-[20px]">{product.foodName}</h1>
                            <span className="font-medium text-[14px]">{product.category}</span>
                        </div>
                        {product.discount ? (
                            <div className="mt-4 flex flex-col">
                                <span className="text-green font-bold text-lg">
                                    ${product.price}
                                    <span className="bg-yellow text-white px-2 py-0.5 rounded-full ms-2 text-sm">
                                        {product.discount}
                                    </span>
                                </span>
                                <span className="text-red font-extrabold text-sm line-through">${product.price}</span>
                            </div>
                        ) : (
                            <span className="text-green font-bold text-lg mt-4">${product.price}</span>
                        )}
                    </div>
                </div>
            ))}
        </ScrollCarousel>
    );
};
export default ShoppingList;