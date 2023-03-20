import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import Card from "../Card/Card";

const Cards = () => {
  const {users} = useSelector((state) => state);
  const myUser = useSelector((state) => state.myUser)
  const dispatch = useDispatch();

  const allUsers = [...users, ...myUser];
  useEffect(() => {
    dispatch(getUsers());
  }, []);
console.log(users)
  return (
    <div>
      {console.log(users)}
      {allUsers.map((user) => {
        return (
        <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
        />)
      })}
    </div>
  );
};

export default Cards;
