import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Header/Navbar/Navbar';
import LeftSideNav from '../Shared/Header/LeftSideNav/LeftSideNav';
import RightSiteNav from '../Shared/Header/RightSiteNav/RightSiteNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className='text-3xl font-poppins'>this is home</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2 '>
                    <h2 className='text-3xl'> News comming soon...</h2>
                </div>
                <div>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;