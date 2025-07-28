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