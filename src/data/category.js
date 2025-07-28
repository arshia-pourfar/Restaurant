import {
    FaBarsProgress,
    FaBurger,
    FaPizzaSlice,
    FaFish,
    FaHotdog,
    FaDrumstickBite,
} from "react-icons/fa6";

export const foodCategory = [
    {
        id: 0,
        foodName: 'all',
        foodIcon: FaBarsProgress,
        isActive: true,
    },
    {
        id: 1,
        foodName: 'hamburger',
        foodIcon: FaBurger,
        isActive: true,
    },
    {
        id: 2,
        foodName: 'pizza',
        foodIcon: FaPizzaSlice,
        isActive: true,
    },
    {
        id: 3,
        foodName: 'hotdog',
        foodIcon: FaHotdog,
        isActive: true,
    },
    {
        id: 4,
        foodName: 'chicken',
        foodIcon: FaDrumstickBite,
        isActive: true,
    },
    {
        id: 5,
        foodName: 'fish',
        foodIcon: FaFish,
        isActive: true,
    },
    {
        id: 6,
        foodName: 'sushi',
        foodIcon: FaFish,
        isActive: false,
    },
];
