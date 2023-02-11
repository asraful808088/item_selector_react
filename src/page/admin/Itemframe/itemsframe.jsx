import React from "react";
import style from "./style.module.css";
export default function Itemsframe({ icons, name, counter, counterItemName }) {
  return (
    <div className={` ${style.item}`}>
      <div className={style.icon}>
        <img src={icons} alt="" height={"100%"} width={"100%"} />
      </div>

      <div className={style.name}>{name}</div>
      <hr
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      />
      <div className={style.counter}>
        {counterItemName} : {counter}
      </div>
    </div>
  );
}
