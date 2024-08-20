import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';

import {
    FaBarsProgress,
    FaBurger,
    FaPizzaSlice,
} from "react-icons/fa6";

export const foodCategory = [
    {
        id: 0,
        foodName: 'all',
        foodIcon: FaBarsProgress,
        isActive: true
    },
    {
        id: 1,
        foodName: 'hamburger',
        foodIcon: FaBurger,
        isActive: false
    },
    {
        id: 2,
        foodName: 'pizza',
        foodIcon: FaPizzaSlice,
        isActive: false
    },
    {
        id: 3,
        foodName: 'tako',
        foodIcon: FaBurger,
        isActive: false
    },
    {
        id: 4,
        foodName: 'pasta',
        foodIcon: FaBurger,
        isActive: false
    },
    {
        id: 5,
        foodName: 'fish',
        foodIcon: FaBurger,
        isActive: false
    },
    {
        id: 6,
        foodName: 'sushi',
        foodIcon: FaBurger,
        isActive: false
    },
];

export const productList = [
    {
        id: 0,
        foodName: 'Lorem ipsum',
        productRate: 0,
        price: '30.00',
        discount: '20%',
        category: 'hamburger',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/hamburger.png')
    },
    {
        id: 1,
        foodName: 'Lorem ipsum',
        productRate: 2.5,
        price: '30.00',
        discount: '20%',
        category: 'hamburger',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/hamburger2.png'),
    },
    {
        id: 2,
        foodName: 'Lorem ipsum',
        productRate: 4,
        price: '30.00',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/OIP.png')
    },
    {
        id: 3,
        foodName: 'Lorem ipsum',
        productRate: 0,
        price: '30.00',
        discount: '20%',
        category: 'pasta',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/pasta.png'),
    },
    {
        id: 4,
        foodName: 'Lorem ipsum',
        productRate: 0,
        price: '30.00',
        discount: '20%',
        category: 'pizza',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/pizza.png')
    },
    {
        id: 5,
        foodName: 'Lorem ipsum',
        productRate: 5,
        price: '30.00',
        category: 'pizza',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/pizza2.png'),
    },
    {
        id: 6,
        foodName: 'Lorem ipsum',
        productRate: 0,
        price: '30.00',
        discount: '20%',
        category: 'pizza',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/pizza3.png')
    },
    {
        id: 7,
        foodName: 'Lorem ipsum',
        productRate: 2,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako.png'),
    },
    {
        id: 8,
        foodName: 'Lorem ipsum',
        productRate: 3,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako2.png')
    },
    {
        id: 9,
        foodName: 'Lorem ipsum',
        productRate: 0,
        price: '30.00',
        discount: '20%',
        category: 'pizza',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/pizza3.png')
    },
    {
        id: 10,
        foodName: 'Lorem ipsum',
        productRate: 2,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako.png'),
    },
    {
        id: 11,
        foodName: 'Lorem ipsum',
        productRate: 3,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako2.png')
    },
    {
        id: 12,
        foodName: 'Lorem ipsum',
        productRate: 3,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako2.png')
    },
    {
        id: 13,
        foodName: 'Lorem ipsum',
        productRate: 3,
        price: '30.00',
        discount: '20%',
        category: 'tako',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae amet recusandae asperiores atque et repellat, accusamus praesentium, reiciendis ratione sit reprehenderit perferendis explicabo, rerum laboriosam dolorem assumenda molestias labore.',
        imageSrc: require('./images/foodImage/tako2.png')
    },
];


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;