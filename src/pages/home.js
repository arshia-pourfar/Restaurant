import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import headerImage from '../images/header-image.png';
import { productList } from '../App';
import Menu from './menu';

const Home = () => {

    function Header() {
        function ShoppingList() {
            const listItems = productList.map(product =>
                <div key={product.id} className='w-52 h-[200px] flex justify-center relative'>
                    <div className='image flex justify-center items-center absolute -top-[50px]'>
                        <img className='h-[95px] -rotate-12' src={product.imageSrc} alt="" />
                    </div>
                    <div className='w-[210px] h-[190px] shadow-md border-[2px] p-2 border-gray-300 rounded-xl flex justify-center items-start flex-col'>
                        <div className='mt-12'>
                            <h1 className='font-bold text-[20px]'>{product.foodName}</h1>
                            <span className='font-medium text-[14px]'>{product.category}</span>
                        </div>
                        {(() => {
                            if (product.discount) {
                                return (
                                    <div className='mt-4 flex flex-col'>
                                        <span className='text-green-600 font-bold text-lg'>
                                            ${product.price}
                                            <span className='bg-[#FED03B] text-white px-[10px] py-[1px] rounded-full ms-2 text-sm'>{product.discount}</span>
                                        </span>
                                        <span className='text-[#F53D37] font-extrabold text-sm line-through'>
                                            ${product.price}
                                        </span>
                                    </div>
                                );
                            } else {
                                return (
                                    <span className='text-green-600 font-bold text-lg mt-4'>
                                        ${product.price}
                                    </span>
                                );
                            }
                        })()}
                    </div>
                </div>

            );
            return (
                <ScrollCarousel
                    autoplay
                    autoplaySpeed={8}
                    speed={7}
                    className='mt-4'
                >
                    {listItems}
                </ScrollCarousel>
            );
        }

        return (
            <header id='header' className='flex justify-between items-center relative px-14'>
                <div className='header-text w-6/12 mt-20'>
                    <h1 className='font-bold text-6xl'>Lorem ipsum dolor </h1>
                    <p className='mt-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatum ex, debitis voluptatibus assumenda animi quibusdam? Quis fugiat repellat reprehenderit! Porro, provident omnis dolore aperiam repellat itaque accusamus nulla voluptate.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatum ex, debitis voluptatibus assumenda animi.
                    </p>
                    <button type="button" className='font-semibold mt-5 bg-[#F53D37] text-white rounded-full px-8 py-3'>View Menu</button>
                    <ShoppingList />
                </div>
                <div className='header-image w-6/12'>
                    <div className='bg-header-image'></div>
                    <img src={headerImage} alt="" />
                </div>
            </header>
        );
    }

    function AboutUs() {
        return (
            <section id='about-us' className='px-14 flex justify-between items-center relative'>
                <div className='text w-9/12'>
                    <h1 className='font-bold text-4xl'>About Us</h1>
                    <p className='mt-6 line-clamp-[8]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto, fugit tempore quia magni distinctio praesentium ullam fugiat eveniet asperiores a magnam consequuntur! Sequi adipisci molestiae laboriosam sunt, cumque tempore!
                        Culpa dolores distinctio non enim quae dolor iste impedit assumenda dolorem modi, veniam provident aliquid delectus. Sint accusamus consectetur soluta maxime asperiores doloremque quas suscipit, beatae saepe amet ipsam debitis.
                        Harum ducimus eaque placeat aut molestias eveniet veniam facere rem? Quo inventore nulla enim voluptas reprehenderit fuga in quod animi nihil non ratione omnis delectus iusto commodi, alias dolorem libero.
                        Consequatur et aspernatur necessitatibus fuga hic consequuntur, voluptate doloremque reiciendis quod fugit doloribus sapiente aperiam enim sit soluta eveniet mollitia aut error quia accusamus incidunt deleniti pariatur! Natus, voluptas dolores?
                    </p>
                    <button type="button" className='px-4 py-2 bg-[#FED03B] font-semibold text-[18px] shadow-sm hover:shadow-md transition-all hover:opacity-75 text-white rounded mt-6'>
                        <a href="./about">
                            Read More
                        </a>
                    </button>
                </div>
                <div className='image relative left-20 w-6/12'>
                    <img className='h-[600px] rounded-lg m-auto' src={require('../images/20230915135832_[fpdl.in]_vector-art-office-staff-their-jobs_975572-1876_full.jpg')} alt="" />
                </div>
            </section>
        );
    }

    function WhyUs() {
        return (
            <section id='whyus' className='mt-5 h-[300px] text-center'>
                <h1 className='font-bold text-3xl'>Why Us</h1>
                <div className='bg-[#FED03B] h-[170px] w-7/12 m-auto flex justify-around items-center rounded-xl relative shadow-md z-[2] mt-8'>
                    <article className='font-bold text-xl'>
                        <img className='w-[90px] m-auto' src={require('../images/food.png')} alt="" />
                        <div className='mt-3'>
                            Easy Order
                        </div>
                    </article>
                    <article className='font-bold text-xl'>
                        <img className='w-[90px] m-auto' src={require('../images/express-delivery.png')} alt="" />
                        <div className='mt-3'>
                            Fastest Delivery
                        </div>
                    </article>
                    <article className='font-bold text-xl'>
                        <img className='w-[90px] m-auto' src={require('../images/cooking.png')} alt="" />
                        <div className='mt-3'>
                            Best Quality
                        </div>
                    </article>
                </div>
                <div className='w-7/12 px-4 m-auto flex justify-around items-center rounded-xl relative -top-[167px] z-0'>
                    <div className='bg-[#FED03B] h-[180px] w-[100%] rounded-lg opacity-50 shadow-sm'>

                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <Header />
            <Menu limit={true} />
            <AboutUs />
            <WhyUs />
        </>
    );
};

export default Home;