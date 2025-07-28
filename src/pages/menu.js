import { productList } from '../data/product';
import { foodCategory } from '../data/category';
import MenuList from '../components/MenuList';

const Menu = () => {
    return (
        <section id="menu" className="mt-10">
            {/* عنوان و توضیح */}
            <div className="mb-14">
                <h1 className="font-bold text-5xl text-brown text-center">Our Full Menu</h1>
                <p className="text-gray-600 text-lg mt-4">
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