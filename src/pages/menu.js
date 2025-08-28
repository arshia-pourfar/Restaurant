import { productList } from '../data/product';
import { foodCategory } from '../data/category';
import MenuList from '../components/MenuList';

const Menu = () => {
    return (
        <section id="menu" className="lg:mt-10 xl:px-14 lg:px-6 px-3">
            {/* عنوان و توضیح */}
            <div className="mb-14">
                <h1 className="font-bold lg:text-6xl text-4xl text-brown text-center">Our Full Menu</h1>
                <p className="text-gray-600 lg:text-lg mt-4">
                    Explore our complete selection of delicious dishes, crafted with fresh ingredients and bold flavors. Whether you're craving something classic or adventurous, we've got something for every taste.
                </p>
            </div>

            {/* لیست محصولات */}
            <MenuList
                productsArrayRead={productList}
                categories={foodCategory}
                limit={false}
            />
        </section>
    );
};

export default Menu;