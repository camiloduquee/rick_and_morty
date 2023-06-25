import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsArrowLeftSquareFill } from "react-icons/bs";


const Signup = (props) => {
const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    passwordTwo: "",
    type:"",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    passwordTwo: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
     userData.type = "register";
        if (!Object.values(errors).length) {
        
    
      props.login(userData);
      setUserData({
        username: "",
        password: "",
        passwordTwo: "",
      });
      setErrors({
        username: "",
        password: "",
        passwordTwo: "",
      });
    } else {
      alert("Debes corregir los errores");
    }
  };
  const backToLogin = () =>{
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginBox}>
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
            placeholder="Enter your password..."
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <label className={styles.label} htmlFor="passwordTwo">
            repeat password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Re-enter your password..."
            name="passwordTwo"
            value={userData.passwordTwo}
            onChange={handleInputChange}
          />
          {errors.passwordTwo && (
            <p className={styles.error}>{errors.passwordTwo}</p>
          )}
        </div>
        <div className={styles.boxbutton}>
          <button type="submit" className={styles.button}>
            Register
          </button>
          <button
            onClick={backToLogin}
            title={"return to login"}
            className={styles.buttonThree}
          >
            <BsArrowLeftSquareFill />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
