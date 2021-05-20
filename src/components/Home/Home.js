import React from 'react';
import Footer from '../Footer/Footer';
import Offers from '../Offers/Offers';
import Categories from '../Categories/Categories';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home text-center">
                    <Offers />
                    <Categories />
                </div>
                <Footer />
            </div>
        );
    }
};

export default Home;