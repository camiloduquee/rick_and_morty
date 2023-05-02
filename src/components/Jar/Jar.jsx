import styles from "./Jar.module.css";
import stylesText from "../DetailId/DetailId.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Jar(props) {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const location = useLocation();
  const backToTheHome = () => {
    navigate("/home");
  };
  return (
    <div className={styles.center}>
      <img className={stylesText.imagen} src={props.character.image} />

      {/*---------- Jar -------------*/}

      <div className={styles.envase}>
        <div className={styles.positionState}>
          <div className={styles.capaOne} />
          <div className={styles.tapa} />
          <div className={styles.particlesEnvase} />
          <div className={styles.reflex} />
          <div className={styles.centerGrid}>
            {/*----------- Detail ------------- */}

            <div className={stylesText.BoxGrid}>
              <button className={stylesText.boton} onClick={backToTheHome}>
                x
              </button>
              <div className={stylesText.block}>
                <p>{detailId}</p>
              </div>

              <div className={stylesText.box} />
              <div className={stylesText.boxLeft} />
              <div className={stylesText.boxRight} />
              <div className={stylesText.container}>
                <h1 className={stylesText.name}> {props.character.name}</h1>

                <div>
                  {props.character.status && (
                    <p className={stylesText.text}>
                      Status: {props.character.status}
                    </p>
                  )}
                  {props.character.species && (
                    <p className={stylesText.text}>
                      Especie: {props.character.species}
                    </p>
                  )}

                  {props.character.gender && (
                    <p className={stylesText.text}>
                      Genero: {props.character.gender}
                    </p>
                  )}
                  {props.character.origin && (
                    <p className={stylesText.text}>
                      Origen: {props.character.origin.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ------- Detail  FIN -------*/}
            {/* <div className={styles.reflexTwo} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
