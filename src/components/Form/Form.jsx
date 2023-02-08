import React from "react";
import style from "./Form.module.css";

export default function Form() {
  return (
    <div >

      {/* <label htmlFor="username"></label>
                <input type="text" />
            
            <label htmlFor="password"></label>
                <input type="text" name="password"  />
            
            <button></button> */}

      <div className={style.pickleRick}>
        <div className={style.shine}></div>
        <div className={style.particles}>
          <div className={style.dots}></div>
        </div>
        <div className={style.layerOne}></div>
        <div className={style.layerTwo}>
          <div className={style.Cwrap}>
            <div className={style.circle}></div>
            
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
          </div>
        </div>
        <div className={style.layerThree}>
          <div className={`${style.container} ${style.face}`}>
            <div className={style.eyebrow}>
              <div className={style.leftBrow}></div>
              <div className={style.rightBrow}></div>
            </div>
            <div className={style.wrapEyes}>
              <div className={style.eye}></div>
              <div className={style.eye}></div>
              <div className={style.eye}></div>
              <div className={style.eye}></div>
            </div>
            <div className={style.noseContainer}>
              <div className={style.nose}></div>
            </div>
            <div className={style.mouthContainer}>
              <div className={style.mouth}>
                <div className={style.wrap}>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                </div>
                <div className={style.wrap}>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                  <div className={style.tooth}></div>
                </div>
              </div>
              <div className={style.lines}>
                <div className={`${style.leftLine}${style.line}`}></div> 
                <div className={`${style.bottomLine}${style.line}`}></div>
                <div className={`${style.rightLine}${style.line}`}></div>
              </div>
            </div>
          </div>
          <div className={style.irregularities}>
            <div className={style.irregularity}></div>
            
          </div>
        </div>
      </div>

    </div>
  );
}


