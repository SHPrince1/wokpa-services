import React from 'react'
import Style from "../../style/campaign.module.css";
import Style2 from "../../style/billing.module.css";
import Style3 from '../../style/campbill.module.css'
import Man from '../../assets/man.png'

const CampBill = () => {
  return (

    <div>
         <div className={Style3.genDiv}>


<div className={Style.CampParentDiv}>
      <div className={Style.container}>
        <div className={Style.summary}>
          <div className={Style.camp}>
            <h4>CAMPAIGN SUMMARY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur
             
            </p>
          </div>
          <div>
            <button className={Style.btndate}>April 18, 2023 - April 25, 2023</button>
          </div>
        </div>

        <div className={Style.campText}>
          <img src={Man} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat debitis dolorem, numquam maiores culpa? Ipsum obcaecati quis
            voluptatem cumque!
          </p>
        </div><br/><br />
        <div className={Style.campTextLink}>
          <a href="">+ New campgaign</a>
        </div>
      </div>

    
    </div>


    <div className={Style2.BillParentDiv}>
        <div className={Style2.summary}>
          <div className={Style2.camp}>
            <h4>BILLING SUMMARY</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className={Style2.btnDiv}>
            <button className={Style2.weekBtn}>Today</button>
            <button className={Style2.weekBtn}>This week</button>
            <button className={Style2.weekBtn}>This month</button>
            <button className={Style2.weekBtn}>Over all</button>
            <button className={Style2.weekBtn}>customer</button>
            
          </div>
        </div>

        <div className={Style2.balanceDiv}>
          <div className={Style2.balance}>
            <p>Amount Spent</p>
            <h3>N 0.00</h3>
          </div>
          <div className={Style2.balance}>
            <p>Amount Spent</p>
            <h3>N 0.00</h3><br/>
            <div>
              
              <a href=''><h4>+ Add funds</h4></a> </div>
          </div>
         
        </div>
      </div>

    </div>

    <div className={Style.tipsParentDiv}>
       <div>
        <h4>Tips and Resources</h4>
       </div>
       <div className={Style.btnDiv}>

       <button>Prev</button>
       <button>Next</button>
       </div>
       
    </div>

    {/* <div className={Style.secBtndiv}>
    <button>Prev</button>
       <button>Next</button>

    </div> */}

    </div>
   
  )
}

export default CampBill