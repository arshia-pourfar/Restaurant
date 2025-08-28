import ShoppingList from "./ShoppingList";
import headerImage from '../images/header-image.png';

const Header = () => (
    <header
        id="header"
        className="flex justify-between items-center relative xl:h-[85vh] min-h-[610px]"
    >
        <div className="header-text lg:w-6/12 w-full">
            <h1 className="font-bold lg:text-6x text-4xl">Lorem ipsum dolor</h1>
            <p className="mt-5 lg:text-lg text-base">
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

        <div className="header-image lg:w-6/12 relative z-40 xl:-top-[800px] xl:-right-[17%] -top-[400px] -right-[150px] lg:inline-block hidden">
            <div className="absolute rotate-[30deg] xl:size-[1400px] size-[800px] bg-red rounded-[130px] z-0"></div>
            <img
                src={headerImage}
                alt="Header"
                className="rotate-[-20deg] 2xl:w-[500px] xl:w-[400px] absolute 2xl:translate-y-1/2 xl:translate-y-3/4 lg:top-24 drop-shadow-[0px_1px_8px_#000000c0]"
            />
        </div>
    </header>
);

export default Header;