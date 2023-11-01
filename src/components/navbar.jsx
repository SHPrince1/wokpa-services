import React from "react";
import Logo  from "../assets/logo.png";
import Style from '../style/navbar.module.css'

const NavBar = () => {

  

  return (
    <>
      <div className={Style.container}>

        <div className={Style.logoContainer}>
        <div className={Style.logoPart}>
           

           <a href="www.fakurl"><img src={Logo} /></a>
           <a href='#'className={Style.addsCenter}>Adds.center</a>
            
         </div>
         <div className={Style.signleLinks}>
         
           <a href="www.fakurl">FAQ</a>
           <a href="www.fakurl">Pricing</a>
 
           <a href="www.fakurl"> Resources</a>
         </div>
        </div>
       



        <div className={Style.signInPart}>
            <div className={Style.signInContainer}>
                <a href="www.fakurl" className={Style.started} >Get Started </a>
                <a href="www.fakeurl" className={Style.sign}>Sign in </a>
            </div>
            <div>

            </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
