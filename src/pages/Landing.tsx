import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logomImg from '../images/logo.svg'
import '../style/pages/landing.css'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logomImg} alt="Happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>Aparecida de Goiânia</strong>
                    <span>Goiás</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;
