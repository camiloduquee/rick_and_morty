import React from "react";
import styles from  './Star.module.css';
const Star = () => {
  const divStar = () => {
     
    const star = [];
    for (let i = 0; i < 80; i++) {
      star.push(<div key={i} className={styles.star}></div>);

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
