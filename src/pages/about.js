import React from "react";

const About = () => {
    return (
        <section id='about-us' className='px-14 '>
            <div className="flex justify-between items-center relative">
                <div className='text w-11/12'>
                    <h1 className='font-bold text-4xl'>About Us</h1>
                    <p className='mt-6 text-[17px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto, fugit tempore quia magni distinctio praesentium ullam fugiat eveniet asperiores a magnam consequuntur! Sequi adipisci molestiae laboriosam sunt, cumque tempore!
                        Culpa dolores distinctio non enim quae dolor iste impedit assumenda dolorem modi, veniam provident aliquid delectus. Sint accusamus consectetur soluta maxime asperiores doloremque quas suscipit, beatae saepe amet ipsam debitis.
                        Harum ducimus eaque placeat aut molestias eveniet veniam facere rem? Quo inventore nulla enim voluptas reprehenderit fuga in quod animi nihil non ratione omnis delectus iusto commodi, alias dolorem libero.
                        Consequatur et aspernatur necessitatibus fuga hic consequuntur, voluptate doloremque reiciendis quod fugit doloribus sapiente aperiam enim sit soluta eveniet mollitia aut error quia accusamus incidunt deleniti pariatur! Natus, voluptas dolores?
                    </p>
                </div>
                <div className='image relative left-20 w-7/12'>
                    <img className='h-[600px] rounded-lg m-auto' src={require('../images/20230915135832_[fpdl.in]_vector-art-office-staff-their-jobs_975572-1876_full.jpg')} alt="" />
                </div>
            </div>
            <div className="our-team text-center">
                <h1 className='font-bold text-4xl'>Our Teams</h1>
                <div className='text flex justify-between relative'>
                    <img className='h-[400px] rounded-lg m-auto w-5/12' src={require('../images/16863874_5808241.jpg')} alt="" />
                    <p className='mt-16 text-[17px] text-left ms-4 w-6/12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto, fugit tempore quia magni distinctio praesentium ullam fugiat eveniet asperiores a magnam consequuntur! Sequi adipisci molestiae laboriosam sunt, cumque tempore!
                        Culpa dolores distinctio non enim quae dolor iste impedit assumenda dolorem modi, veniam provident aliquid delectus. Sint accusamus consectetur soluta maxime asperiores doloremque quas suscipit, beatae saepe amet ipsam debitis.
                        Harum ducimus eaque placeat aut molestias eveniet veniam facere rem? Quo inventore nulla enim voluptas reprehenderit fuga in quod animi nihil non ratione omnis delectus iusto commodi, alias dolorem libero.
                        Consequatur et aspernatur necessitatibus fuga hic consequuntur, voluptate doloremque reiciendis quod fugit doloribus sapiente aperiam enim sit soluta eveniet mollitia aut error quia accusamus incidunt deleniti pariatur! Natus, voluptas dolores?
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;