import React from "react";
import style from "../style/brandform.module.css";

const CreateBrandForm = () => {
  return (
    <div>
      <div>
        <form>
          <div className={style.formItem}>
            <label>Brand Name</label>
            <input type="text" placeholder="Enter brand name" />
          </div>
          <div className={style.formItem}>
            <label>Busine full Address</label>
            <input type="text" placeholder="Enter Address" />
          </div>

          <div className={style.formItem}>
            <label>Brand Name</label>
            <input type="text" placeholder="Enter brand name" />
          </div>
          <div className={style.formItem}>
            <label>Business Industry</label>

            <select name="select">
              <option value="valor1"> Music</option>
              <option value="valor2" selected>
                Movie
              </option>
              <option value="valor3">Sport</option>
            </select>
          </div>

          <div className={style.formItem}>
            <label>Currency</label>

            <select name="select">
              <option value="valor1"> Naira</option>
              <option value="valor2" selected>
                Euroes
              </option>
              <option value="valor3">Pounds</option>
            </select>
          </div>
        </form>
        <div>
        <a href="#">INVITE MEMBER</a><br /><br />


        </div>
        <button className={style.brandBtn}>CREATE BRAND</button><br />

      
      </div>
    </div>
  );
};

export default CreateBrandForm;
