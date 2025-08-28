const WhyUs = () => (
    <section id="whyus" className="mt-5 md:h-[300px] h-[600px] text-center">
        <h1 className="font-bold text-3xl">Why Us</h1>
        <div className="bg-yellow md:h-[170px] lg:w-7/12 w-11/12 md:py-0 py-6 m-auto flex md:flex-row flex-col gap-10 justify-around items-center rounded-xl relative shadow-md z-10 mt-8">
            {[
                { img: 'food.png', text: 'Easy Order' },
                { img: 'express-delivery.png', text: 'Fastest Delivery' },
                { img: 'cooking.png', text: 'Best Quality' },
            ].map((item, index) => (
                <article key={index} className="font-bold text-xl">
                    <img className="w-[90px] m-auto" src={require(`../images/${item.img}`)} alt={item.text} />
                    <div className="mt-3">{item.text}</div>
                </article>
            ))}
        </div>
        <div className="lg:w-7/12 w-11/12 px-4 m-auto flex justify-around items-center rounded-xl relative -top-[167px] z-0">
            <div className="bg-yellow h-[180px] w-full rounded-lg opacity-50 shadow-sm" />
        </div>
    </section>
);
export default WhyUs;