import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import ContenedorPe from '../ContenedorPepinillo/containerPe';

export default function Form(props) {
  
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (input) => {
    const property = input.target.name;
    const value = input.target.value;
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
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!Object.keys(errors).length) {
      props.login(userData);
      setErrors({
        username: "",
        password: "",
      });
      setUserData({
        username: "",
        password: "",
      });
    }else {
      alert('Debes corregir los errores');
    }
    
  };

  return (
    <>
      <ContenedorPe />
      {/* Formulario */}
      <div className={style.loginBox}>
        <h2>Login</h2>
        <form >
          <div className={style.userBox}>
            <input
              className={style.input}
              type="text"
              name="username"
              placeholder="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            {errors.username && <p>{errors.username}</p>}
            <label className={style.label}>Username</label>
          </div>
          <div className={style.userBox}>
            <input
              className={style.input}
              type="password"
              name="password"
              placeholder="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <label className={style.label}>Password</label>
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      {/* Formulario */}
    </>
  );
}
// .containerGlobal {
//   position: relative;
//   width: 100%;
//   height: 400px;
//   border: 400px solid #73ad2100;
//   border-radius: 10px;
// }