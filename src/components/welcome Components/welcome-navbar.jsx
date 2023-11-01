// import React from 'react'
import React, { useState } from 'react';
import Style from '../../style/welcomnav.module.css'
import  Logo from '../../assets/log.png'
import Menu from '../../assets/menu.png'
import Avatar from '../../assets/avatar.png'
import MenuComp from '../../components/menu'
import CreateModal from '../create-modal';
import CreateBrandForm from '../../components/create-brand-form'
import AddNewCampaign from './add-new-campaign';
import NewCampaignModal from './new-campaign-modal';
const WelcomeNavbar = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // camp

  const [isCampModal, setIsCampModaln] = useState(false);

  const openCampModal = () => {
    setIsCampModaln(true);
  };

  const closeCampModal = () => {
    setIsCampModaln(false);
  };

  return (
    <div className={Style.container}>

        <div className={Style.leftDiv}>
            
            <a><img src={Logo} /></a>

            <img src={Menu} />

            {/* <MenuComp /> */}

            <a href='#'>Account Overview</a>

        </div>
        <div className={Style.rightDiv}>
            <button onClick={openModal} >Create a brand</button>
            <button  onClick={openCampModal}>+ New Campaign</button>
            <div>
                <img src={Avatar} />
            </div>

        </div>

        <CreateModal isOpen={isModalOpen} onClose={closeModal}>
        < CreateBrandForm />
      </CreateModal>
        <NewCampaignModal isOpen={isCampModal} onClose={closeCampModal} >
       <AddNewCampaign />
      </NewCampaignModal>
    </div>
  )
}

export default WelcomeNavbar