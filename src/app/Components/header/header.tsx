import React from 'react'
import "./header.scss";
import Cover from '../../../img/cover.jpg';
import {useState} from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">



            <div className="Navbar">
                    <span className="nav-logo">
                      <span className="span1">Elbrus</span>Agency</span>
                    <div className={`nav-items ${isOpen && "open"}`}>
                      <a href="#">честность</a>
                      <a href="#">молчит</a>
                      <a href="#">говоря</a>
                      <a href="#">стность</a>
                      <a href="#">Когда</a>
                    </div>
                    <a href="#" className="num"> +22 01090596070</a>
                    <div
                      className={`nav-toggle ${isOpen && "open"}`}
                      onClick={() => setIsOpen(!isOpen)}>
                      <div className="bar"></div>
                    </div>
            </div>




          <main>
            <div className="container">
              <h2>Когда деньги говорят, честность молчит Когда деньги говоря</h2>
              <p>честность молчит Когда деньги говоря</p>
              <button className="btn">честность молчит</button>
            </div>
          </main>


          <section>
            <div className="container">
              <div className="box boxx">
                <h3>19 молчит</h3>
                <p>стность молчит Когда</p>
              </div>
              <div className="box boxx">
                <h3>19 молчит</h3>
                <p>стность молчит Когда</p>
              </div>
              <div className="box boxx">
                <h3>19 молчит</h3>
                <p>стность молчит Когда</p>
              </div>
            </div>
          </section>




        </div>
    </header>




  )
}
