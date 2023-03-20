export const GET_USERS = "GET_USERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CREATE_USER = "CREATE_USER"

export const getUsers = () => {
    return function(dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_USERS, payload: data}))
    }
}

export const getDetail = (id) => {
    return function(dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return {type: CLEAN_DETAIL}
}

export const createUser = (user) => {
    return {type: CREATE_USER, payload: user}
}