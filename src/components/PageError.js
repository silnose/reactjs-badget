import React from "react";
import "../style/PageError.css";
const PageError = (props) => {
  return (
    <div id='oopss'>
      <div id='error-text'>
        <img
          src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg'
          alt='404'
        />
        <span>Ooops!</span>
        <p class='p-a'>{props.error}</p>
      </div>
    </div>
  );
};

export default PageError;
