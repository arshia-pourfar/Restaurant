const AboutUs = () => (
    <section id="about-us" className="flex lg:flex-row flex-col justify-between items-center relative lg:my-5 my-16">
        <div className="text lg:w-1/2">
            <h1 className="font-bold text-4xl">About Us</h1>
            <p className="mt-6 line-clamp-[8]">
                At our restaurant, every dish tells a story. We blend tradition with creativity to serve meals that are both comforting and unforgettable.
                From locally sourced ingredients to handcrafted recipes, quality is at the heart of everything we do.
                Whether you're here for a quick bite or a special celebration, we aim to make every moment delicious.
                Our team is passionate about hospitality, flavor, and creating experiences that linger long after the last bite.
                Come hungry—leave inspired.
            </p>
            <button
                type="button"
                className="px-4 py-2 bg-yellow font-semibold text-[18px] shadow-sm hover:shadow-md transition-all hover:opacity-75 text-white rounded mt-6"
            >
                <a href="./about">Read More</a>
            </button>
        </div>
        <div className="image relative w-1/2 lg:flex hidden">
            <img
                className="h-[600px] rounded-lg m-auto"
                src={require('../images/20230915135832_[fpdl.in]_vector-art-office-staff-their-jobs_975572-1876_full.jpg')}
                alt="About Us"
            />
        </div>
    </section>
);
export default AboutUs;