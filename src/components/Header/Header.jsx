import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import Button from './Button';


const Header = () => {
    let navigate = useNavigate(); 
    const watchMovie = () =>{ 
        let path = `/singlemovie`; 
        navigate(path)
    }
    return (
        <div>
            <div className='header'>
                <div className='header-video'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5DACpQbRnCAKp5ss5KuHjIIrznbqhe3nAQ&usqp=CAU" alt="video here" className='video-image'/>
                    <button className='header-button' onClick={watchMovie}><Button/></button>
                </div>
                <div className='header-desc'>
                    <h2 className='header-title'>The Legend of Sunrise</h2>
                    <p className='desc-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p className='desc-details'>Genre : Adventure</p>
                    <p className='desc-details'>Duration : 2 hr 45 mins</p>
                    <p className='desc-details'>Ratings : 4.5</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
