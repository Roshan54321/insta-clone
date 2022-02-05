import React, { Component, useEffect } from 'react';
import logo from '../images/insta-name.png';
import logo2 from '../images/home.png';
import logo3 from '../images/messenger.png';
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    let navigate = useNavigate();
    let count = 1;
    let getlogo = document.getElementById('header__logo');

    function logout()
    {
        let log = document.querySelector('.logout');
        log.addEventListener('click', () => {
            console.log('dsfsdfsdf');
            localStorage.removeItem('id');
            localStorage.removeItem('pass');
            navigate('/login');
        });
    }

    function CLICK() {
        let getlogo = document.getElementById('header__logo');
        getlogo.addEventListener('mouseover', () => {
            getlogo.style.cursor = 'pointer';
        });
    }

    function accountClick() {
        let header__account = document.querySelector('.header__account');
        if(header__account.style.display == 'block')
        {
            header__account.style.display = 'none';
        }
        else{
            header__account.style.display = 'block';
        }
    }

    return (
        <div className='Header' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='Header__forheader'>
                <div className='header'>
                    <Link to='/'><img id='header__logo' src={logo} alt='' /></Link>
                    <input className='header__search' type='text' placeholder='Search' ></input>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Link to='/' ><img className='header__home' src={logo2} alt='' /></Link>
                        <Link to='/messenger' ><img className='header__messenger' src={logo3} alt='' /></Link>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='header_accountcontainer'>
                                <button><Avatar className='header__avatar' alt="Rohan" style={{ width: '27px', height: '27px' }} src="" onClick={accountClick} /></button>
                            </div>
                        </div>
                    </div>
                    {/* {CLICK} */}
                </div>
                <div className = 'header__account'>
                    <div><button>Profile</button></div>
                    <div><button>Saved</button></div>
                    <div><button>Settings</button></div>
                    <div><button>Switch Accounts</button></div>
                    <hr/>
                    <div><button className = 'logout' onClick = {logout}>Log Out</button></div>
                </div>  
            </div>     
        </div>
    );
}

