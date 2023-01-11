import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Mail, Menu, Login, WhatsApp, Instagram } from '@mui/icons-material';

const Navbar = () => {
    const [sbOpen,setSbOpen] = useState(false);

    const showSb = () => {
      setSbOpen(true);
    }
    const dontShowSb = () => {
      setSbOpen(false);
    }
    return (
        <div>   
            <div className="nb__container">
                <div className="nb__container__dd" onClick={showSb}>
                <Menu />
                </div> 
                <div className="nb__container__logo">
                    <Link exact to="/">
                <img src="https://www.feba.co.in/static/media/logo.9f98b1b6.png" alt="logo" />  
                <span> Feba </span>
                    </Link>
                </div>
            </div>
            <div className={`sb__container ${sbOpen ? "sb__container__open" : ""}`}>
                <div className="sb__tab">
                <div className="sb__tab__up">
                    <div className="sb__tab__up__ele">
                    <HomeIcon /> <span> Wedding Services</span>
                    </div>
                    <div className="sb__tab__up__ele">
                    <Login /> <span> Vendor Login</span>
                    </div>
                </div>
                <div className="sb__tab__down">
                    <div className="sb__tab__down__ele">
                    <Mail /> <span> <a href="mailto:contact@feba.co.in" >contact@feba.co.in</a></span>
                    </div>
                    <div className="sb__tab__down__ele">
                    <WhatsApp /> <span> <a href="https://wa.me/917304879310" target="_blank" >+91 7304879310</a></span>
                    </div>
                    <div className="sb__tab__down__ele">
                    <Instagram /> <span> <a href="https://www.instagram.com/feba__/" target="_blank">@feba___</a></span>
                    </div>
                </div>
                </div>
                <div className="sb__container__close" onClick={dontShowSb}>
                </div>  
            </div>
        </div>
    )
}

export default Navbar;