import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../Styles/Pages/home.css';

const Home = () => {
    return(
        <div id="page-landing">
        <div className="content-wrapper">
        <main>
          <h1>Melhores séries by Taline Joventino</h1>
          <p>Que tal seguir uma dessas indicações maravilhosas e garantir o entretenimento no final de semana?</p>
        </main>       

        <Link  to="/series" className ="enter-app">
          <FiArrowRight size={26} color=" #c2c1c0"/>
        </Link>
        <Link to='/profile' className ='enter-profile'>
          Conheça Taline Joventino
        </Link>
        </div>
    </div>
    )
}

export default Home;