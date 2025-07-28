// const WhyUs = () => (
//     <section id="whyus" className="mt-20 text-center px-6 md:px-0">
//         <h1 className="font-bold text-4xl text-primary mb-10">Why Choose Us</h1>

//         {/* Main Card */}
//         <div className="relative w-full md:w-9/12 lg:w-7/12 m-auto">
//             {/* Background Layer */}
//             <div className="absolute inset-0 bg-yellow rounded-xl opacity-40 shadow-md z-0 h-[200px]" />

//             {/* Foreground Content */}
//             <div className="relative z-10 bg-yellow rounded-xl shadow-lg py-10 px-6 flex flex-col md:flex-row justify-around items-center gap-8">
//                 {[
//                     {
//                         img: "food.png",
//                         title: "Easy Ordering",
//                         desc: "Simple, intuitive menu with fast checkout.",
//                     },
//                     {
//                         img: "express-delivery.png",
//                         title: "Fastest Delivery",
//                         desc: "Hot meals delivered in record time.",
//                     },
//                     {
//                         img: "cooking.png",
//                         title: "Top Quality",
//                         desc: "Fresh ingredients, crafted by expert chefs.",
//                     },
//                 ].map((item, index) => (
//                     <article key={index} className="text-center max-w-[180px]">
//                         <img
//                             className="w-[80px] h-[80px] m-auto mb-4"
//                             src={require(`../images/${item.img}`)}
//                             alt={item.title}
//                         />
//                         <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
//                         <p className="text-sm text-gray-600 mt-2 leading-snug">{item.desc}</p>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     </section>
// );

// export default WhyUs;
const WhyUs = () => (
    <section id="whyus" className="mt-5 h-[300px] text-center">
        <h1 className="font-bold text-3xl">Why Us</h1>
        <div className="bg-yellow h-[170px] w-7/12 m-auto flex justify-around items-center rounded-xl relative shadow-md z-[2] mt-8">
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
        <div className="w-7/12 px-4 m-auto flex justify-around items-center rounded-xl relative -top-[167px] z-0">
            <div className="bg-yellow h-[180px] w-full rounded-lg opacity-50 shadow-sm" />
        </div>
    </section>
);
export default WhyUs;