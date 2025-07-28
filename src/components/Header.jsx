import ShoppingList from "./ShoppingList";
import headerImage from '../images/header-image.png';

const Header = () => (
    <header
        id="header"
        className="flex justify-between items-center relative h-[85vh] min-h-[610px]"
    >
        <div className="header-text w-6/12">
            <h1 className="font-bold text-6xl">Lorem ipsum dolor</h1>
            <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatum ex, debitis voluptatibus
                assumenda animi quibusdam? Quis fugiat repellat reprehenderit! Porro, provident omnis dolore aperiam
                repellat itaque accusamus nulla voluptate.
            </p>
            <button
                type="button"
                className="font-semibold mt-5 bg-red text-white rounded-full px-8 py-3"
            >
                View Menu
            </button>
            <ShoppingList />
        </div>

        <div className="header-image w-6/12 relative z-40">
            <div className="absolute rotate-[30deg] -right-[350px] -top-[100px] w-[800px] h-[800px] bg-red rounded-[130px] -z-10"></div>
            <img
                src={headerImage}
                alt="Header"
                className="rotate-[-20deg] relative -right-[190px] -top-[65px] drop-shadow-[0px_1px_8px_#000000c0]"
            />
        </div>
    </header>
);

export default Header;