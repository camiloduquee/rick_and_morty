function validation ({username,password}) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};
        if(username === "") errors.username = "El nombre de usuario no puede estar vacío.";
        if(!regexEmail.test(username)) errors.username = 'El nombre de usuario tiene que ser un email.';
        if(username.length > 34) errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";

        if(password.length < 6 || password.length > 10) errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";

        return errors;
}
export default validation;