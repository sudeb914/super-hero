import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
           <div className='header-contaier'>
           <h1 className='main-heading'>Introduce Us</h1>
            <p>Deatails of Citizen in Our Country.In this web page we are collect many data.</p>
            <p className='resonable-salary-main'>Resonable salary : <span className='resonable-salary'>10000</span> </p>
           </div>
        </div>
    );
};

export default Header;