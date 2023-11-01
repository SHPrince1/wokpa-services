import React from "react";
import style from '../../style/addnewcampaign.module.css'
import Additem from '../../assets/additem.png';
import ColorWath from '../../assets/color-swatch.png'

const AddNewCampaign = () => {
  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.card}>
            <div>
          <img src={Additem} />

            </div>
            <div>
          <h5>Dynamic insertion ADD</h5>

            </div>
            <div>

          <form>
            <lael>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, accusantium?
            </lael>
            <input type="radio" />
          </form>
            </div>
        </div>

        
          <div className={style.card}>
            <img src={ColorWath} />
            <h5>Baked-In-Adds</h5>
            <form>
              <lael>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, accusantium?
              </lael>
              <input type="radio" />
            </form>
          </div>
        </div>
        <button className={style.nextBtn}>Next</button>

      </div>
    
  );
};

export default AddNewCampaign;
