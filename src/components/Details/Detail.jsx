import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDetail } from "../../redux/actions";
import style from "./Detail.module.css";
const Detail = (props) => {
  const params = useParams();
  const user = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(params.id));
    return () => {
      dispatch(cleanDetail())
    }
  }, []);

  return (
    <div className={style.divDetail}>
      <h1>{user.name}</h1>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <h2>{user.address?.street}</h2>
      <h2>{user.website}</h2>
      <h2>{user.phone}</h2>
    </div>
  );
};

export default Detail;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
// }
