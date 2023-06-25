const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  // ---------  Condicionales para el username  ----------

  if (!regexEmail.test(userData.username)) {
    errors.username = "El usuario debe ser un email";
  }
  if (!userData.username) {
    errors.username = "El nombre de usuario no puede estar vacío.";
  }
  if (userData.username.length > 35) {
    errors.username =
      "El nombre de usuario no puede tener más de 35 caracteres.";
  }

  // ---------  Condicionales para el Password  ----------

  if (!userData.password ) {
    errors.password = "la contraseña tiene que tener al menos un número.";
  }

  if (userData.password.length > 10  || userData.password.length < 6 ) {
    errors.password =
      "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
  }
  if(userData.password === userData.passwordTwo){
    return errors;
  }
  
  errors.passwordTwo = "la constraseña debe ser igual";
  return errors;
};
export default validation;
