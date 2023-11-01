import React from "react";
import Style from "../../style/campaign.module.css";
import Man from '../../assets/man.png'

const CampaignSummary = () => {
  return (
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
            <button>April 18, 2023 - April 25, 2023</button>
          </div>
        </div>

        <div className={Style.campText}>
          <img src={Man} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat debitis dolorem, numquam maiores culpa? Ipsum obcaecati quis
            voluptatem cumque!
          </p>
        </div>
        <div className={Style.campTextLink}>
          <a href="www.jh">+ New campgaign</a>
        </div>
      </div>

    
    </div>
  );
};

export default CampaignSummary;
