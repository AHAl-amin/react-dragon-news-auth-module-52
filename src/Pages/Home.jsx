import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Header/Navbar/Navbar';
import LeftSideNav from '../Shared/Header/LeftSideNav/LeftSideNav';
import RightSiteNav from '../Shared/Header/RightSiteNav/RightSiteNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './Home/NewsCard';

const Home = () => {
    const news = useLoaderData();
    // console.log(news)
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
                {/* news containar */}
                <div className='lg:col-span-2 '>
                
                    {
                     news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)   
                    }
                </div>
                <div>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;