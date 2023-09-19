// import React, { useState } from "react";
import "./index.css";
function Headbar() {
  const hideSideBar = () => {
    const sidebar = document.getElementsByClassName("app-sidebar")[0];
    sidebar.classList.toggle("hide");
  };

  return (
    <div className="Headbar">
      <div id="header_bar">
        <button id="none_sidebar" onClick={hideSideBar}>
          &#9776;{" "}
        </button>
        <div id="subject">
          <h1> Lotion </h1>
          <p id="subheading">
            {" "}
            Like Notion. but worse.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Headbar;