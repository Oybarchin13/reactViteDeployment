import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa";

function App() {

  return (
    <div className='bigDiv'>
      <header className='d-flex'>
        <div className="logo"><h1>wix</h1></div>
        <div className="header-right d-flex">
          <div className='icon'>
            <p><HiOutlineComputerDesktop /></p>
            <p>|</p>
            <p><MdPhoneAndroid /></p>
           
          </div>
          <div className='button d-flex'>
            <p>Нажмите «Редактировать», чтобы создать свой сайт</p>
            <p><a href="#">Подробнее</a></p>
            <button className='btn btn-primary'>Редактировать</button>
          </div>
        </div>
      </header>
      <main>
        <div className="text d-flex">
          <h1>Олег Марков</h1>
          <ul>
            <li>Главная</li>
            <li>O6o мне</li>
            <li>Связаться</li>
          </ul>
        </div>

        <div className="img-container">
        <div className="img-box">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        </div>

        <div className="footer">
          <p className='footer-p'>© 2035 Олег Марков. Сайт создан на <a href="#">Wix.com.</a></p>
          <div className="icon-footer">
            <p><FaFacebookSquare /></p>
            <p><FaTwitterSquare /></p>
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
