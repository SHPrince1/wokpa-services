import React from 'react'
import CampaignSummary from './campaign-summary'
import WelcomeNavbar from './welcome-navbar'
// import BillingSummary from './billing-summary'
import Style from '../../style/welcomindex.module.css'
import CampBill from './camp-bil'

const Index = () => {
  return (
    <div>
      <WelcomeNavbar />
      <div className={Style.campBill}>
        {/* <CampaignSummary />
        <BillingSummary /> */}
        

     <CampBill />

      </div>
    </div>
  )
}

export default Index