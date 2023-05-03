import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation";



const Form = (props) => {
    const [userData, setUserData] = useState({
    username: "",
    password: "",
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
        [property]:value,
    })
    setErrors(
        validation({
            ...userData,
            [property]:value,
    }))
  };
const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
        props.login(userData);
            setUserData({
                username:'',
                password:'',
            })
            setErrors({
                username:'',
                password:'', 
            })

    }
    else {
        alert('Debes corregir los errores');
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginBox}>
        <div className={styles.userBox}>
          <label htmlFor="username">User</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Escribe tu usuario..."
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <label htmlFor="password">Password</label>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Form;
