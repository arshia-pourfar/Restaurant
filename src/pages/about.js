import React from "react";

const About = () => {
    return (
        <section id="about-us" className="bg-white py-24 space-y-28 xl:px-14 lg:px-6 px-3">
            {/* About Us */}
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                <div className="lg:w-6/12 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brown">About Us</h1>
                    <p className="text-lg leading-relaxed text-brown-light">
                        At our restaurant, food isn't just nourishment — it's connection, culture, and community. From our roots to your plate, we craft more than just meals — we craft experiences.
                    </p>
                    <p className="text-lg leading-relaxed text-brown-light">
                        Whether you're here for a quick bite or a long evening, we pour our heart into every detail to make you feel truly welcome.
                    </p>
                </div>
                <div className="lg:w-6/12">
                    <img
                        src={require("../images/16863874_5808241.jpg")}
                        alt="Smiling team members in our kitchen"
                        className="rounded-2xl shadow-lg border border-brown-border object-cover w-full h-[400px]"
                    />
                </div>
            </div>

            {/* Our Story */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brown">Our Story</h2>
                <p className="text-lg text-brown-light leading-relaxed">
                    What began in a small kitchen has become a hub of flavor, friendship, and family. With each dish, we share the story of our passion and heritage.
                </p>
            </div>

            {/* Our Values */}
            <div className="text-center max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-brown mb-10">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Authenticity",
                            desc: "True to our roots, our story, and every bite we serve.",
                        },
                        {
                            title: "Quality",
                            desc: "We use only fresh, high-standard ingredients, every time.",
                        },
                        {
                            title: "Warmth",
                            desc: "Every guest is family. Every experience matters.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-yellow text-brown shadow-md p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-brown-light text-base leading-snug">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Founder's Note */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                <div className="lg:w-6/12 space-y-6">
                    <h2 className="text-3xl font-bold text-brown">A Note from Our Founder</h2>
                    <p className="text-lg text-brown-light leading-relaxed">
                        “Food has always been my way to bring people together. This restaurant was born from a dream — to make every bite feel like home.”
                    </p>
                    <p className="text-primary font-bold">— Arshia, Founder & Head Chef</p>
                </div>
                <div className="lg:w-6/12">
                    <img
                        src={require("../images/16863874_5808241.jpg")}
                        alt="Founder Arman in the kitchen"
                        className="rounded-2xl shadow-lg border border-brown-border object-cover w-full h-[400px]"
                    />
                </div>
            </div>

            {/* Meet Our Team */}
            <div className="text-center space-y-10 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-brown">Meet Our Team</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="lg:w-6/12">
                        <img
                            src={require("../images/20230915135832_[fpdl.in]_vector-art-office-staff-their-jobs_975572-1876_full.jpg")}
                            alt="Our dedicated restaurant team"
                            className="rounded-2xl shadow-md border border-brown-border object-cover w-full h-[400px]"
                        />
                    </div>
                    <div className="lg:w-6/12 text-left space-y-5 text-brown-light">
                        <p className="text-lg leading-relaxed">
                            From our chefs to our servers, everyone here shares one mission: to make every guest feel welcome, cared for, and at home.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We're not just coworkers. We're a family — and you're invited to join us at our table.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;