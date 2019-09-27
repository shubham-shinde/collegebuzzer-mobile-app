import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {Segment, Button, Input, Dropdown, Icon} from 'semantic-ui-react'
import * as action from '../../actions/actions';
import Headroom from 'react-headroom'
import Slick from 'react-slick'

import './style.css'
import './css/responsive.css'
import './css/slick.css'
import image1 from "./img/bg-img/welcome-img.png"
import shubhamImage from "./img/team-img/shubham.jpg"
import specialImg from "./img/bg-img/special.png"
import app1 from "./img/scr-img/app-1.jpg"
import app2 from "./img/scr-img/app-2.jpg"
import app3 from "./img/scr-img/app-3.jpg"
import app4 from "./img/scr-img/app-4.jpg"
import app5 from "./img/scr-img/app-5.jpg"
import app6 from "./img/scr-img/app-6.jpg"
import app7 from "./img/scr-img/app-7.jpg"
import app8 from "./img/scr-img/app8.png"

class Login extends React.Component{
    render() {
        const routeTo = this.props.redirectTo;
        return(
            <div>
                <Headroom style={{
                    webkitTransition: 'all .5s ease-in-out',
                    mozTransition: 'all .5s ease-in-out',
                    oTransition: 'all .5s ease-in-out',
                    transition: 'all .5s ease-in-out',
                    position: "fixed"
                }}>
                <header className="header_area animated" style={{background:'var(--main-color)',padding: '5px', color:'white'}}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                        {/* Menu Area Start */}
                            <div className="col-12">
                                <div className="menu_area">
                                    <nav className="navbar-light" style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                                        {/* Logo */}
                                        <a className="navbar-brand" onClick={() => routeTo('/home')}>CollegeBuzzer</a>
                                        <div style={{display:'flex'}}>
                                            <a style={{cursor:'pointer',marginRight:'20px'}} onClick={() => routeTo('/register')}>Register</a>
                                            <a style={{cursor:'pointer'}} onClick={() => routeTo('/home')}>Login</a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                </Headroom>
                {/* ***** Header Area End ***** */}
                {/* ***** Wellcome Area Start ***** */}
                <section className="wellcome_area clearfix" id="home">
                <div className="container h-100">
                    <div className="row align-items-center" style={{height: '80%'}}>
                    <div className="col-12 col-md">
                        <div className="wellcome-heading">
                        <h2  style={{fontSize:'13vw'}}>CollegeBuzzer</h2>
                        <h3>CB</h3>
                        <p>Everything you need to get connected to your college</p>
                        </div>
                        <div className="get-start-area">
                        {/* Form Start */}
                        {/* <form action="#" method="post" className="form-inline">
                            <input type="email" className="form-control email" placeholder="name@company.com" />
                            <input type="submit" className="submit" defaultValue="Get Started" />
                        </form> */}
                        <div className="row">
                        <div style={{paddingLeft:'20px'}}>
                            <div className="sing-up-button d-lg-block">
                            <a style={{cursor:'pointer',background:'var(--secondary-color)',marginRight:'20px'}} onClick={() => routeTo('/register')}>Register</a>
                            </div>
                        </div>
                        <div style={{paddingLeft:'20px'}}>
                            <div className="sing-up-button d-lg-block">
                            <a style={{cursor:'pointer'}} onClick={() => routeTo('/home')}>Login</a>
                            </div>
                        </div>
                        </div>
                        {/* Form End */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* Welcome thumb */}
                <div className="welcome-thumb wow fadeInDown" data-wow-delay="0.5s">
                    <img src={image1} alt />
                </div>
                </section>
                {/* ***** Wellcome Area End ***** */}
                {/* ***** Special Area Start ***** */}
                <section className="special-area bg-white section_padding_100" id="about">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        {/* Section Heading Area */}
                        <div className="section-heading text-center">
                        <h2>What makes it Special</h2>
                        <div className="line-shape" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                        <div className="single-icon">
                            <Icon name="building outline" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Specially for College Student</h4>
                        <p>This is a Powerful tool which will connects each student with college activities.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                        <div className="single-icon">
                            <Icon name="mobile alternate" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Students Profile</h4>
                        <p>Shudents can make their profile. And see each others profile</p>
                        </div>
                    </div>
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.4s">
                        <div className="single-icon">
                            <Icon name="users" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Club Activity Updates</h4>
                        <p>Application will be updated with club and college activities so that students can get involved in them.</p>
                        </div>
                    </div>
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                        <div className="single-icon">
                            <Icon name="student" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Students Feed</h4>
                        <p>This is the best place for students to share their activities and projects.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                        <div className="single-icon">
                            <Icon name="user times" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Confessions</h4>
                        <p>Any college student who is registered on the app can add an anonymous confession.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                        <div className="single-icon">
                            <Icon name="user" style={{color:'var(--secondary-color)'}} size='huge'/>
                        </div>
                        <h4>Guest User</h4>
                        <p>Anyone who is not student of the university can login as guest. Guest are able to see students and club post for regular updates.</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Special Description Area */}
                <div className="special_description_area mt-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="special_description_img">
                            <img src={specialImg} alt />
                        </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 ml-xl-auto">
                        <div className="special_description_content">
                            <h2>Our Best Propositions for You!</h2>
                            <p>We have build a platform for the Colleges and Universities. It is everything a students need to connect themselves with college activity and keep updates of it. It also ensures that competion amonge students is maintained to improve there skills by watching each others achievements. Every student can showcase their projects even first year students. Students will start to know and work with each other.</p>
                            {/* <div className="app-download-area">
                            <div className="app-download-btn wow fadeInUp" data-wow-delay="0.2s">
                                
                                <a href="#">
                                <i className="fa fa-android" />
                                <p className="mb-0"><span>available on</span> Google Store</p>
                                </a>
                            </div>
                            <div className="app-download-btn wow fadeInDown" data-wow-delay="0.4s">
                                
                                <a href="#">
                                <i className="fa fa-apple" />
                                <p className="mb-0"><span>available on</span> Apple Store</p>
                                </a>
                            </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* ***** Special Area End ***** */}
                {/* ***** Awesome Features Start ***** */}
                {/* <section className="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                        <h2>Awesome Features</h2>
                        <div className="line-shape" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-user" aria-hidden="true" />
                        <h5>Awesome Experience</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-pulse" aria-hidden="true" />
                        <h5>Fast and Simple</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-dashboard" aria-hidden="true" />
                        <h5>Clean Code</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-palette" aria-hidden="true" />
                        <h5>Perfect Design</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-crown" aria-hidden="true" />
                        <h5>Best Industry Leader</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-feature">
                        <i className="ti-headphone" aria-hidden="true" />
                        <h5>24/7 Online Support</h5>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* ***** Awesome Features End ***** */}
                {/* ***** Video Area Start ***** */}
                {/* <div className="video-section">
                <div className="container">
                    <div className="row">
                    <div className="col-12"> */}
                        {/* Video Area Start */}
                        {/* <div className="video-area" style={{backgroundImage: 'url(img/bg-img/video.jpg)'}}>
                        <div className="video-play-btn">
                            <a href="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn"><i className="fa fa-play" aria-hidden="true" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}
                {/* ***** Video Area End ***** */}
                {/* ***** Cool Facts Area Start ***** */}
                {/* <section className="cool_facts_area clearfix">
                <div className="container">
                    <div className="row"> */}
                    {/* Single Cool Fact*/}
                    {/* <div className="col-12 col-md-3 col-lg-3">
                        <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                        <div className="counter-area">
                            <h3><span className="counter">90</span></h3>
                        </div>
                        <div className="cool-facts-content">
                            <i className="ion-arrow-down-a" />
                            <p>APP <br /> DOWNLOADS</p>
                        </div>
                        </div>
                    </div>*/}
                    {/* Single Cool Fact*/}
                    {/* <div className="col-12 col-md-3 col-lg-3">
                        <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                        <div className="counter-area">
                            <h3><span className="counter">120</span></h3>
                        </div>
                        <div className="cool-facts-content">
                            <i className="ion-happy-outline" />
                            <p>Happy <br /> Clients</p>
                        </div>
                        </div>
                    </div> */}
                    {/* Single Cool Fact*/}
                    {/* <div className="col-12 col-md-3 col-lg-3">
                        <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.6s">
                        <div className="counter-area">
                            <h3><span className="counter">40</span></h3>
                        </div>
                        <div className="cool-facts-content">
                            <i className="ion-person" />
                            <p>ACTIVE <br />ACCOUNTS</p>
                        </div>
                        </div>
                    </div> */}
                    {/* Single Cool Fact*/}
                    {/* <div className="col-12 col-md-3 col-lg-3">
                        <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.8s">
                        <div className="counter-area">
                            <h3><span className="counter">10</span></h3>
                        </div>
                        <div className="cool-facts-content">
                            <i className="ion-ios-star-outline" />
                            <p>TOTAL <br />APP RATES</p>
                        </div>
                        </div>
                    </div> */}
                    {/* </div>
                </div>
                </section> */}
                {/* ***** Cool Facts Area End ***** */}
                {/* ***** App Screenshots Area Start ***** */}
                <section className="app-screenshots-area bg-white section_padding_0_100 clearfix" id="screenshot">
                    <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-heading">
                        <h2>App Screenshots</h2>
                        <div className="line-shape" /><br/>
                        <Slick {...{
                            dots: true,
                            infinite: true,
                            auto: true,
                            speed: 500,
                            arrows: true,
                            centerPadding:'20px',    
                            centerMode:true,                      
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            responsive: [
                                {
                                  breakpoint: 1024,
                                  settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                                  }
                                },
                                {
                                  breakpoint: 600,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                  }
                                },
                                {
                                  breakpoint: 480,
                                  settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                  }
                                }
                                // You can unslick at a given breakpoint now by adding:
                                // settings: "unslick"
                                // instead of a settings object
                              ]
                        }}>
                            <div>
                                <img src={app1} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app2} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app3} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app4} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app5} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app6} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                            <div>
                                <img src={app7} style={{padding:'10px',maxHeight:'100%',width:'auto'}} alt=""/>
                            </div>
                        </Slick>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="container-fluid">
                    <div className="row">
                    <div className="col-12">
                        <div className="app_screenshots_slides owl-carousel">
                        <div className="single-shot">
                            <img src="img/scr-img/app-1.jpg" alt />
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-2.jpg" alt />
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-3.jpg" alt />
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-4.jpg" alt />
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-5.jpg" alt />
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-3.jpg" alt />
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                </section>
                {/* ***** App Screenshots Area End *****====== */}
                {/* ***** Pricing Plane Area Start *****==== */}
                {/* <section className="pricing-plane-area section_padding_100_70 clearfix" id="pricing">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                        <h2>Pricing Plan</h2>
                        <div className="line-shape" />
                        </div>
                    </div>
                    </div>
                    <div className="row no-gutters">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-price-plan text-center">
                        <div className="package-plan">
                            <h5>Starter Plan</h5>
                            <div className="ca-price d-flex justify-content-center">
                            <span>$</span>
                            <h4>29</h4>
                            </div>
                        </div>
                        <div className="package-description">
                            <p>Up to 10 users monthly</p>
                            <p>Unlimited updates</p>
                            <p>Free host &amp; domain</p>
                            <p>24/7 Support</p>
                            <p>10 Unique Users</p>
                        </div>
                        <div className="plan-button">
                            <a href="#">Select Plan</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-price-plan text-center">
                        <div className="package-plan">
                            <h5>Basic Plan</h5>
                            <div className="ca-price d-flex justify-content-center">
                            <span>$</span>
                            <h4>49</h4>
                            </div>
                        </div>
                        <div className="package-description">
                            <p>Up to 10 users monthly</p>
                            <p>Unlimited updates</p>
                            <p>Free host &amp; domain</p>
                            <p>24/7 Support</p>
                            <p>10 Unique Users</p>
                        </div>
                        <div className="plan-button">
                            <a href="#">Select Plan</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-price-plan active text-center">
                        <div className="package-plan">
                            <h5>Advenced Plan</h5>
                            <div className="ca-price d-flex justify-content-center">
                            <span>$</span>
                            <h4>69</h4>
                            </div>
                        </div>
                        <div className="package-description">
                            <p>Up to 10 users monthly</p>
                            <p>Unlimited updates</p>
                            <p>Free host &amp; domain</p>
                            <p>24/7 Support</p>
                            <p>10 Unique Users</p>
                        </div>
                        <div className="plan-button">
                            <a href="#">Select Plan</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-price-plan text-center">
                        <div className="package-plan">
                            <h5>Community Plan</h5>
                            <div className="ca-price d-flex justify-content-center">
                            <span>$</span>
                            <h4>99</h4>
                            </div>
                        </div>
                        <div className="package-description">
                            <p>Up to 10 users monthly</p>
                            <p>Unlimited updates</p>
                            <p>Free host &amp; domain</p>
                            <p>24/7 Support</p>
                            <p>10 Unique Users</p>
                        </div>
                        <div className="plan-button">
                            <a href="#">Select Plan</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* ***** Pricing Plane Area End ***** */}
                {/* ***** Client Feedback Area Start ***** */}
                {/* <section className="clients-feedback-area bg-white section_padding_100 clearfix" id="testimonials">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <Slick>
                        <div className="client-feedback-text text-center">
                            <div className="client">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            </div>
                            <div className="client-description text-center">
                            <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                            </div>
                            <div className="star-icon text-center">
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            </div>
                            <div className="client-name text-center">
                            <h5>Aigars Silkalns</h5>
                            <p>Ceo Colorlib</p>
                            </div>
                        </div>
                        <div className="client-feedback-text text-center">
                            <div className="client">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            </div>
                            <div className="client-description text-center">
                            <p>“ I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                            </div>
                            <div className="star-icon text-center">
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            </div>
                            <div className="client-name text-center">
                            <h5>Jennifer</h5>
                            <p>Developer</p>
                            </div>
                        </div>
                        <div className="client-feedback-text text-center">
                            <div className="client">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            </div>
                            <div className="client-description text-center">
                            <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job.”</p>
                            </div>
                            <div className="star-icon text-center">
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            </div>
                            <div className="client-name text-center">
                            <h5>Helen</h5>
                            <p>Marketer</p>
                            </div>
                        </div>
                        <div className="client-feedback-text text-center">
                            <div className="client">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            </div>
                            <div className="client-description text-center">
                            <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                            </div>
                            <div className="star-icon text-center">
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            </div>
                            <div className="client-name text-center">
                            <h5>Henry smith</h5>
                            <p>Developer</p>
                            </div>
                        </div>
                        </Slick>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="slider slider-nav">
                        <div className="client-thumbnail">
                            <img src="img/bg-img/client-3.jpg" alt />
                        </div>
                        <div className="client-thumbnail">
                            <img src="img/bg-img/client-2.jpg" alt />
                        </div>
                        <div className="client-thumbnail">
                            <img src="img/bg-img/client-1.jpg" alt />
                        </div>
                        <div className="client-thumbnail">
                            <img src="img/bg-img/client-2.jpg" alt />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* ***** Client Feedback Area End ***** */}
                {/* ***** CTA Area Start ***** */}
                <section className="our-monthly-membership section_padding_50 clearfix">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="membership-description">
                        <h2 style={{textAlign:'center',padding:'20px'}}>Coming soon</h2>
                        {/* <p>Coming soon on app Store and apple Store</p> */}
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="get-started-button wow bounceInDown" data-wow-delay="0.5s">
                        <a href="#">Get Started</a>
                        </div>
                    </div> */}
                            <div className="app-download-area col-md-6" style={{marginTop:'0'}}>
                            <div className="app-download-btn wow fadeInUp" data-wow-delay="0.2s">
                                {/* Google Store Btn */}
                                <a href="#"  style={{background:'var(--secondary-color)', color:'white'}}>
                                <Icon name="google" size="big" style={{color:'white'}}/>
                                <p className="mb-0" style={{color:'white'}}><span>Coming soon</span> Google Store</p>
                                </a>
                            </div>
                            <div className="app-download-btn wow fadeInDown" data-wow-delay="0.4s">
                                {/* Apple Store Btn */}
                                <a href="#"  style={{background:'var(--secondary-color)', color:'white'}}>
                                <Icon name="apple" size="big" style={{color:'white'}}/>
                                <p className="mb-0" style={{color:'white'}}><span>Coming soon</span> Apple Store</p>
                                </a>
                            </div>
                            </div>
                    </div>
                </div>
                </section>
                {/* ***** CTA Area End ***** */}
                {/* ***** Our Team Area Start ***** */}
                <section className="our-Team-area bg-white section_padding_100_50 clearfix" id="team">
                <div className="special_description_area mt-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 ml-xl-auto">
                        <div className="special_description_content" style={{padding:'0 0'}}>
                            <h2>Founder</h2>
                            <h4>Shubham Shinde</h4>
                            <p>Currently a 3rd year B.tech student from Galgotias College of Engineering and Technology of I.T. branch with the vision to make something before the starting of 3rd year he started this project in summer holidays. He worked alone on the entire platform. This app is a web applicaion. But soon after the success of this app it's andriod and ios versions will be released.<br/>Shubham is formaly from Maharashtra. But from his birth he lives in Varanasi. His interest in web technoloy brings this product alive.</p>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="special_description_img" style={{padding:'40px'}}>
                            <img src={shubhamImage} alt />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                        
                    {/* <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-team-member">
                        <div className="member-image">
                            <img src="img/team-img/team-2.jpg" alt />
                            <div className="team-hover-effects">
                            <div className="team-social-icon">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="member-text">
                            <h4>Alex Manning</h4>
                            <p>CEO-Founder</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-team-member">
                        <div className="member-image">
                            <img src="img/team-img/team-3.jpg" alt />
                            <div className="team-hover-effects">
                            <div className="team-social-icon">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="member-text">
                            <h4>Ollie Schneider</h4>
                            <p>Business Planner</p>
                        </div>
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-team-member">
                        <div className="member-image">
                            <img src="img/team-img/team-4.jpg" alt />
                            <div className="team-hover-effects">
                            <div className="team-social-icon">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="member-text">
                            <h4>Roger West</h4>
                            <p>Financer</p>
                        </div>
                        </div>
                    </div> */}
                {/* ***** Our Team Area End ***** */}
                {/* ***** Contact Us Area Start ***** */}
                <section className="footer-contact-area section_padding_100 clearfix" id="contact">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        {/* Heading Text  */}
                        <div className="section-heading">
                        <h2>Get in touch with us!</h2>
                        <div className="line-shape" />
                        </div>
                        {/* <div className="footer-text">
                        <p>We'll send you epic weekly blogs, whitepapers and things to make your app startup thrive, all FREE!</p>
                        </div> */}
                        <div className="address-text">
                        <p><span>Address:</span> Room no. 16, Sanskar Hostel, Knowledge Park III, Greater Noida, UP</p>
                        </div>
                        <div className="phone-text">
                        <p><span>Phone:</span> +91 9839883416</p>
                        </div>
                        <div className="email-text">
                        <p><span>Email:</span> shindes0321@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Form Start*/}
                        {/* <div className="contact_from">
                        <form action="#" method="post">
                            <div className="contact_input_area">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" required />
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Your Message *" required defaultValue={""} />
                                </div>
                                </div>
                                <div className="col-12">
                                <button type="submit" className="btn submit-btn">Send Now</button>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div> */}
                    </div>
                    </div>
                </div>
                </section>
                {/* ***** Contact Us Area End ***** */}
                {/* ***** Footer Area Start ***** */}
                <footer className="footer-social-icon text-center section_padding_70 clearfix">
                {/* footer logo */}
                <div className="footer-text">
                    <h2 style={{fontSize:'10vw'}}>CollegeBuzzer</h2>
                </div>
                {/* social icon*/}
                {/* <div className="footer-social-icon">
                    <a href="#"><Icon name="facebook" size="big"/></a>
                    <a href="#"><Icon name="twitter" size="big"/></a>
                    <a href="#"><Icon name="instagram" size="big"/></a>
                    <a href="#"><Icon name="google" size="big"/></a>
                </div> */}
                {/* <div className="footer-menu">
                    <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    </nav>
                </div> */}
                {/* Foooter Text*/}
                <div className="copyright-text">
                    {/* ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** */}
                    <p>Copyright ©2018 CollegeBuzzer. Designed by CollegeBuzzer</p>
                </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm : state.login
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);