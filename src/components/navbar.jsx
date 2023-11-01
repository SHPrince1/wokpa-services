import React from "react";
import Logo  from "../assets/logo.png";
import Style from '../style/navbar.module.css'

const NavBar = () => {

  

  return (
    <>
      <div className={Style.container}>

        <div className={Style.logoContainer}>
        <div className={Style.logoPart}>
           

           <a href="#"><img src={Logo} /></a>
           <a href='#'className={Style.addsCenter}>Adds.center</a>
            
         </div>
         <div className={Style.signleLinks}>
         
           <a href="#">FAQ</a>
           <a href="#">Pricing</a>
 
           <a href="#"> Resources</a>
         </div>
        </div>
       



        <div className={Style.signInPart}>
            <div className={Style.signInContainer}>
                <a href="#" className={Style.started} >Get Started </a>
                <a href="http://wokpa.ddns.net:9000/#/Listener/post_api_listeners_login" className={Style.sign}>Sign in </a>
            </div>
            <div>

            </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
