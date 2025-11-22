import React from 'react';
import Slider from '../components/Slider';
import Populer from '../components/Populer';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Slider/>
            <Populer/>
        </div>
    );
};

export default Home;