import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/main';
import './Home.scss'

const Home = () => {
    
    return ( 
        <div>
            <Header/>
            <Main />
            <Outlet />
        </div>
            
            
    );
}

export default Home;

              
