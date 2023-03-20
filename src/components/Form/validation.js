const validate = (user, errorsState) => {
    let error = {...errorsState}

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!user.id) error.id ="Id no puede estar vacio";
    else error.id = ''
    if(!user.name) error.name ="Name no puede estar vacio";
    else error.name = ''
    if(!regexEmail.test(user.email)) error.email="Email incorrecto";
    else error.email = ''

    return error;
}

export default validate;