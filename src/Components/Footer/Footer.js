import React from 'react';
import '../../sass/footer.scss';
import logo from '../../asset/images/logo/logo.png'
import location from '../../asset/images/icons/location.png'
import phone from '../../asset/images/icons/phone.png'
import email from '../../asset/images/icons/email.png'
import shareHolder from '../../asset/images/shareHolder.png'
import playsote from '../../asset/images/icons/playstore.png'



const Footer = () => {
    return (
        <div className="footer_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <ul>
                            <li><img src={logo} alt="" className="pr-2" /></li>
                            <li><img src={location} alt="" className="pr-2 footer_icon" /> Level-4, 34, Awal Centre, Banani, Dhaka</li>
                            <li><img src={email} alt="" className="pr-2 footer_icon" /> Official: web@programming-hero.com </li>
                            <li><img src={phone} alt="" className="pr-2 footer_icon" /> Helpline : 01322810867 (Available : 09:00am to 7:00pm)</li>
                        </ul>

                        <div>
                            <img src={playsote} alt="" className="img-fluid playstoreIcon" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>About us</li>
                            <li>Success</li>
                            <li>Refund policy</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className="">
                            <i class="fab fa-facebook-square social_icons"></i>
                            <i class="fab fa-instagram social_icons"></i>
                            <i class="fab fa-linkedin social_icons"></i>
                            <i class="fab fa-youtube-square social_icons"></i>

                        </div>
                    </div>
                    <div className="col-md-4  d-flex align-items-center">
                        <img src={shareHolder} alt="" className="img-fluid w-100" />
                    </div>



                </div>
                <p className="text-center footer_Text">Copyright © 2022 Programming-hero.com</p>
            </div>
        </div>
    );
};

export default Footer;