import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  function ToSignup() {
    navigate("/register");
  }
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });
    setErrors(
      validation({
        ...userData,
        [property]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    userData.type = "login";
    if (!Object.values(errors).length) {
      props.login(userData);
      setUserData({
        username: "",
        password: "",
      });
      setErrors({
        username: "",
        password: "",
      });
    } else {
      alert("Debes corregir los errores");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginBox}>
        <div className={styles.title}>
          <h1>rick and morty</h1>
        </div>
          <div className={styles.userBox}>
          <label className={styles.label} htmlFor="username">
            User
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Escribe tu usuario..."
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Escribe tu constraseña..."
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles.boxbutton}>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <button onClick={ToSignup} className={styles.buttonTwo}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
