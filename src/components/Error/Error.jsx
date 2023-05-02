import React from "react";
import styles from "./Error.module.css";
import Star from '../Star/Star.jsx';
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
function backToHome () {
    navigate("/home");
}   
  return (
    <div className={styles.box}>
      <Star />
      <div className={styles.center}>
        <div className={`${styles.circle} ${styles.circleOuter}`}></div>
        <div className={`${styles.circle} ${styles.circleInner}`}>
          <div className={`${styles.four} ${styles.fourOne}`}>4</div>
          <div className={`${styles.four} ${styles.fourTwo}`}>4</div>
          <div className={`${styles.circle} ${styles.oh}`}>
            <div className={styles.astronaut}>
              <div className={styles.astronautBackpack}></div>
              <div className={styles.astronautHead}></div>
              <div className={`${styles.astronautAntena} ${styles.antenaLeft}`}>
                <div className={styles.earDown}></div>
                <div className={styles.earUp}></div>
                <div className={styles.antena}></div>
                <div className={styles.antenaTip}></div>
              </div>
              <div
                className={`${styles.astronautAntena} ${styles.antenaRight}`}
              >
                <div className={styles.earDown}></div>
                <div className={styles.earUp}></div>
                <div className={styles.antena}></div>
                <div className={styles.antenaTip}></div>
              </div>
             
              <div className={styles.astronautHelmet}>
                <div className={styles.astronautGlass}></div>
                <div className={`${styles.glow} ${styles.glowOne}`}></div>
                <div className={`${styles.glow} ${styles.glowTwo}`}></div>
              </div>
              <div className={styles.astronautBody}></div>
            </div>
            <svg
              className={styles.astronautWire}
              viewBox="-9 -9 259 823"
              width="259"
              height="823"
            >
              <path
                d="M241 0c-24 54-30 113-78 148S63 159 27 215c-35 55 32 102 73 141s103 94 98 166c-6 97-169 66-192 157-10 43-8 84 9 126"
                fill="none"
                stroke-width="6"
                stroke="#FFF"
              ></path>
            </svg>
            <div className={`${styles.circle} ${styles.planet}`}>
              <div className={styles.craters}>
                <div className={`${styles.crater} ${styles.craterOne}`}></div>
                <div className={`${styles.crater} ${styles.craterTwo}`}></div>
                <div className={`${styles.crater} ${styles.craterThree}`}>
                  {" "}
                </div>
                <div className={`${styles.crater} ${styles.craterFour}`}></div>
                <div className={`${styles.crater} ${styles.craterFive}`}></div>
                <div className={`${styles.crater} ${styles.craterSix}`}></div>
              </div>
            </div>
            <div className={styles.astronautHands}>
              <div className={`${styles.astronautHand} ${styles.handLeft}`}>
                <svg width="35" height="75">
                  <path
                    d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
                    fill="#D2D2D2"
                  ></path>
                  <g fill="none" stroke="#999" stroke-linecap="round">
                    <path d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"></path>
                    <path
                      d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <g fill="#fff">
                    <path d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"></path>
                    <path d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"></path>
                    <path d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"></path>
                  </g>
                </svg>
              </div>
              <div className={`${styles.astronautHand} ${styles.handRight}`}>
                <svg width="35" height="75">
                  <path
                    d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
                    fill="#D2D2D2"
                  ></path>
                  <g fill="none" stroke="#999" stroke-linecap="round">
                    <path d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94"></path>
                    <path
                      d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <g fill="#fff">
                    <path d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z"></path>
                    <path d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z"></path>
                    <path d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={backToHome}>GO HOME</button>
        </div>
        <div className={styles.sorry}>
            <div className={styles.tex}>
              <p>Oops!</p>
              Lo Siento, La página no funciona.</div>
        </div>
        
      </div>
      
    </div>
  );
};
export default Error;
