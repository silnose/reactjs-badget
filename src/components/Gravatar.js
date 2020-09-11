import React from "react";
import md5 from "md5";
const Gravatar = (props) => {
  const email = props.email;
  var hash;
  try {
    hash = md5(email);
  } catch (error) {
    hash = "";
  }
  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt=''
    />
  );
};

export default Gravatar;
