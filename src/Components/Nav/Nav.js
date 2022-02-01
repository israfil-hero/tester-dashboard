import React, { useEffect, useState } from 'react';
import logo from '../../asset/images/logo/logo.png';
import profile from '../../asset/images/icons/profile.png';
import notification from '../../asset/images/icons/notification.png';
import gem from '../../asset/images/icons/gem.svg';
import cart from '../../asset/images/icons/shopping-cart.png';

const Nav = ({ user , gems}) => {


   

    return (
        <div className="navbar_container">
            <nav className=" container navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo_img img-fluid" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">My Classes</a>
                        </li>

                        <li className="nav-item">
                            <img src={notification} alt="profile" className="" />
                        </li>
                        <li className="nav-item">
                            <img src={cart} alt="profile" className="" />
                        </li>

                        <li className="nav-item">
                            <div className="d-flex justify-content-center align-items-center gem_section">
                                <img src={gem} alt="profile" className="gem" />
                                <span className="ml-2 gem_count">{gems}</span>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <img id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={profile} alt="profile" className=" nav-link profile_icon " />
                            <div class="dropdown-menu profiler_section " aria-labelledby="navbarDropdownMenuLink ">
                                <div className="text-center">
                                    <img src={profile} alt="" />
                                    <p className="user_name">{user?.fullName}</p>
                                    <span className="text-muted">Student ID: N/A</span> <br />
                                    <button className="btn text-white mt-3 profile_btn">View Profile</button>
                                    <hr />
                                </div>
                                <div>
                                    <a class="dropdown-item" href="#"><i class="far fa-bookmark profiler_icons"></i> Bookmark</a>
                                    <a class="dropdown-item" href="#"><i class="far fa-chart-bar profiler_icons"></i> Student Analysis</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-trophy profiler_icons"></i> Leader Board</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-bullhorn profiler_icons"></i> Announcement</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-play-circle profiler_icons"></i> Conceptual Sessions</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt profiler_icons"></i> logout</a>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;