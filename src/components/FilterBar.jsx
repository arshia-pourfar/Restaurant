import { useState } from 'react';

const FilterBar = ({ categories, activeCategory, setActiveCategory, searchTerm, setSearchTerm }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <div
                className={`mt-8 transition-all duration-300`}
            >
                <div className="flex items-center gap-3 flex-wrap transition-all duration-700">
                    {/* دسته‌بندی‌ها فقط فعال‌ها */}
                    {categories
                        .filter(cat => cat.isActive)
                        .map(cat => {
                            const Icon = cat.foodIcon;
                            const isActive = activeCategory === cat.foodName;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.foodName)}
                                    className={`flex items-center justify-center rounded-full border-2 transition-all duration-500 ease-in-out ${searchOpen
                                        ? 'w-10 h-10 text-xl px-0'
                                        : 'px-4 py-2 text-base gap-2'
                                        } ${isActive
                                            ? 'bg-brown text-white border-brown shadow-md'
                                            : 'border-gray-300 text-brown hover:bg-brown hover:text-white hover:border-brown'
                                        }`}
                                    title={searchOpen ? cat.foodName : ''}
                                    style={{ transitionProperty: 'width, height, padding, gap' }}
                                >
                                    <Icon />
                                    {!searchOpen && (
                                        <span className="capitalize font-semibold">{cat.foodName}</span>
                                    )}
                                </button>
                            );
                        })}

                    {/* سرچ با انیمیشن */}
                    <div
                        className={`flex items-center border border-gray-300 rounded-full shadow-sm bg-white transition-all duration-500 ease-in-out ${searchOpen ? '' : 'animate-bounce'}`}
                        style={{
                            width: searchOpen ? '500px' : '48px',
                            overflow: 'hidden',
                            transitionProperty: 'width, padding',
                        }}
                    >
                        {searchOpen ? (
                            <input
                                type="text"
                                placeholder="Search food..."
                                className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-transparent focus:ring-brown rounded-full transition-all duration-300"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        ) : (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="w-12 h-12 flex items-center justify-center text-gray-500 hover:text-brown transition-all animate-spin"
                                title="Search"
                            >
                                <i className="fas fa-search text-lg" />
                            </button>
                        )}

                        {searchOpen && (
                            <button
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchTerm('');
                                }}
                                className="px-3 text-gray-400 hover:text-red transition-all"
                                title="Close"
                            >
                                <i className="fas fa-times text-lg" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterBar;