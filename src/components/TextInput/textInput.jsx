import React from "react";
import blood from "../icon/blood.png";
import email from "../icon/email.png";
import father from "../icon/father.png";
import key from "../icon/key.png";
import address from "../icon/location.png";
import mother from "../icon/mother.png";
import searchIcon from "../icon/search.png";
import usernameIcon from "../icon/username.png";
import style from "./style.module.css";
export default function TextInput({
  error,
  placeholder,
  type,
  iconType,
  option,
}) {
  return (
    <div className={style.root}>
      <div className={style.inputBox}>
        <input
          {...option}
          className={style.input}
          type={
            type === "email"
              ? "email"
              : type === "password"
              ? "password"
              : "text"
          }
          name=""
          id=""
          placeholder={placeholder}
        />{" "}
        <div className={style.icon}>
          <img
            src={
              iconType === "email"
                ? email
                : iconType === "password"
                ? key
                : iconType === "username"
                ? usernameIcon
                : iconType === "username"
                ? ""
                : iconType === "father"
                ? father
                : iconType === "mother"
                ? mother
                : iconType === "location"
                ? address
                : iconType === "blood"
                ? blood
                : iconType === "search"
                ? searchIcon
                : ""
            }
            alt=""
            height={"100%"}
            width="100%"
          />
        </div>
      </div>
      <div className={style.error}>{error}</div>
    </div>
  );
}
