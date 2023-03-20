import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import style from "../Form/Form.module.css";
import validate from "./validation";

const Form = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [property]: value });
    setErrors(validate({ ...user, [property]: value }, errors));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(user));
    alert("Usuario creado con exito");
  };

  return (
    <form onSubmit={handleSubmit} className={style.divForm}>
      <div>
        <label htmlFor="id">Id: </label>
        <input
          className={style.pId}
          type="text"
          name="id"
          value={user.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <input
          className={style.pEmail}
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={errors.id || errors.name || errors.email ? true : false}
      >
        Create user
      </button>
    </form>
  );
};

export default Form;
