import React from "react";
import styles from  './Star.module.css';
const Star = () => {
  const divStar = () => {
    const elemt = <div className={styles.star}></div>;
    const star = [];
    for (let i = 0; i < 80; i++) {
      star.push(elemt);
    }
    return star;
  };
  return (
    <div className={styles.container}>
      <div className={styles.stars}>{divStar()}</div>
    </div>
  );
};
export default Star;
