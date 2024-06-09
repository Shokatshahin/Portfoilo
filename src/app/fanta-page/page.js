"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "../fanta-page/style.css"

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
      },
    });

    tl.to('#fanta', { top: '120%', left: '0%' }, 'orange')
      .to('#orange-cut', { top: '160%', left: '23%' }, 'orange')
      .to('#orange', { width: '15%', top: '160%', right: '10%' }, 'orange')
      .to('#leaf', { top: '110%', rotate: '130deg', left: '70%' }, 'orange')
      .to('#leaf2', { top: '110%', rotate: '130deg', left: '0%' }, 'orange');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
      },
    });

    tl2.from('.lemon1', { rotate: '-90deg', left: '-100%', top: '110%' }, 'ca')
      .from('#cocacola', { rotate: '-90deg', top: '110%', left: '-100%' }, 'ca')
      .from('.lemon2', { rotate: '90deg', left: '100%', top: '110%' }, 'ca')
      .from('#pepsi', { rotate: '90deg', top: '110%', left: '100%' }, 'ca')
      .to('#orange-cut', { width: '18%', left: '42%', top: '204%' }, 'ca')
      .to('#fanta', { width: '35%', top: '210%', left: '33%' }, 'ca');
  }, []);

  return (
    <div id="main " className='overflow-hidden'>
      <nav>
        <a href="#">Developergtm</a>
        <div className="cntr-nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
        <i className="ri-menu-fill"></i>
      </nav>
      <div className="one">
        <h1>FANTA</h1>
        <img id="orange-cut" src="/orange2.png" alt="Orange Cut" />
        <img id="fanta" src="/fanta.png" alt="Fanta" />
        <img id="orange" src="/orange.webp" alt="Orange" />
        <img id="leaf" src="/leaf.webp" alt="Leaf" />
        <img id="leaf2" src="/leaf2.png" alt="Leaf 2" />
        <img id="leaf3" src="/coconoutleaf.png" alt="Coconut Leaf" />
      </div>
      <div className="two">
        <div className="lft-two">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e04428"
              d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="rght-two">
          <h1>Flavour Updated</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a
            laborum laboriosam dolorem illum labore sit, voluptates commodi
            neque dolores tempore temporibus deleniti? Nobis, ratione hic error
            quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam
            enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque!
            Amet voluptatem illo similique recusandae! Ex quaerat quibusdam
            asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex
            repellendus provident mollitia laboriosam adipisci alias a impedit,
            cum accusamus rerum delectus eaque facilis veniam quia laborum
            incidunt ea assumenda! Eos magni aspernatur quod distinctio.
          </p>
        </div>
      </div>
      <div className="three">
        <div className="card">
          <img className="lemon lemon1" src="/lemon.webp" alt="Lemon" />
          <img id="cocacola" src="/cocacola.png" alt="Coca-Cola" />
          <h1>CocaCola</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <h1>Fanta</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <img className="lemon lemon2" src="/lemon.webp" alt="Lemon" />
          <img id="pepsi" src="/pepsi.png" alt="Pepsi" />
          <h1>Pepsi</h1>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;