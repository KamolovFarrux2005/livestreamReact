import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <p className='footer__title'>Watchflix</p>
                <p className='footer__text'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                <p className='footer__username'>Join Newsletters</p>
                <div className='footer__form'>
                    <input type="text" className='footer__input' placeholder='Insert your mail here'/>
                    <button className='footer__button'>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className='footer__part'>
                <div className='footer__row'>
                    <ul className='footer__list'>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                        <li className='footer__list__item'>Product</li>
                    </ul>
                </div>
                <div className='footer__contact'>
                    <p>8819 Ohio St. South Gate, California 90280</p>
                    <p>ourstudio@hello.com</p>
                    <p>+271 386-647-3637</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
