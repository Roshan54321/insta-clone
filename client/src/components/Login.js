import React from 'react';
import logo from '../images/insta-name-big.png';
import logo1 from '../images/facebook.png';
import obj from '../images/appstore.png';
import obj1 from '../images/googleplay.png';
import obj2 from '../images/instagram.jpg';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useEffect } from 'react';
 

export default function Login() {
    let count = 1;
    let navigate = useNavigate();

    useEffect(() => {
        let ids=localStorage.getItem('id');
        let passs=localStorage.getItem('pass');
        if(ids && passs)
        {
            document.getElementById('loginid').value = ids;
            document.getElementById('loginpass').value = passs;
            handleClick();
        }
    }, [])

    function handleClick() {
        let id = document.getElementById('loginid');
        let pass = document.getElementById('loginpass');
        localStorage.setItem('id', id.value);
        localStorage.setItem('pass', pass.value);
        if (id.value === 'roshanneupane54321@gmail.com' && pass.value === 'happy123') {
            navigate('/', {replaceUrl: true});
        }

        else{
            if(count===1){
                Incorrectpass();
            }
        }
    }

    document.addEventListener('keydown',  function(event) {
        if(event.code === "Enter")
        {
            handleClick();
        }
    }
    )

    function Incorrectpass()
    {
        let id = document.getElementById('loginid');
        let pass = document.getElementById('loginpass');
        let referenceNode = document.querySelector('.Login__or');
        let newNode = document.createElement('div');
        newNode.classList = 'Login__incorrectpass';
        newNode.innerHTML = "Sorry, your password was incorrect. Please double-check your password.";
        id.value = "";
        pass.value = "";
        referenceNode.after(newNode);
        count++;
    }

    return (
        <div style={{ padding: '50px' }}>
            <div className='Loginandimage'>
                <img id="Login__phone" src={obj2} style={{ maxHeight: '630px' }} alt="" />
                <div className='Login'>
                    <div className='Login__container'>
                        <img id='Login__logo' src={logo} alt='' />
                        <div className='Login__info'>
                            <div style={{ margin: '5px' }}><input type='text' id='loginid' placeholder='Phone number, username, or email' /></div>
                            <div style={{ margin: '5px' }}><input type='password' id='loginpass' placeholder='Password' /></div>
                            <button style={{ marginTop: '15px' }} className='login__button' onClick={handleClick}>Log In</button>
                            <div classN  ame='Login__or' style={{ marginTop: '20px', color: '#8E8E8E' }}>
                                OR
                            </div>
                            {/* <div className='Login__incorrectpass'>
                            Sorry, your password was incorrect. Please double-check your password.
                            </div> */}
                            <div className='Login__facebookoption'>
                                <img src={logo1} alt='' />
                                <div style={{ margin: '5px' }}>Log in with Facebook</div>
                            </div>
                            <div className='Login__forgotpassword'>
                                Forgot password?
                            </div>
                        </div>
                    </div>
                    <div className='Login__signup'>
                        Don't have an account? <span style={{ color: 'blue', fontWeight: '500' }}>Sign up</span>
                    </div>
                    <div className='Login__getapp'>
                        <div>
                            Get the app.
                        </div>
                        <div className='Login__getapp__options'>
                            <img src={obj} alt='' />
                            <img src={obj1} alt='' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='Login__footer'>
                <div className='Login__footer__divisions'>
                    <div>Meta</div>
                    <div>About</div>
                    <div>Blog</div>
                    <div>Jobs</div>
                    <div>Help</div>
                    <div>API</div>
                    <div>Privacy </div>
                    <div>Terms</div>
                    <div>Top Accounts</div>
                    <div>Hashtags</div>
                    <div>Locations </div>
                    <div>Instagram Lite</div>
                </div>
                <div className='Login__footer__divisions'>
                    <div>Beauty</div>
                    <div>Dance</div>
                    <div>Fitness</div>
                    <div>Food & Drink</div>
                    <div>Home & Garden</div>
                    <div>Music</div>
                    <div>Visual Arts</div>
                </div>
                <div className='Login__footer__divisions'>
                    <div>English</div>
                    <div>© 2021 Instagram from Meta</div>
                </div>
            </div>
        </div>
    );
}
