import React from "react";
import "../App.css";
import { BsBarChartLine } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
import { MdOutlinePersonPin } from "react-icons/md";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <a href="#">
            <BsBarChartLine size="1.2rem" /> Dashboard
          </a>
          <a href="#">
            <GiNotebook size="1.2rem" />
            Assesments
          </a>
          <a href="#">
            <BsPerson size="1.2rem" />
            Candidates
          </a>
          <a href="#">
            <VscLibrary size="1.2rem" />
            Library
          </a>
          <a href="#">
            <MdOutlinePersonPin size="1.2rem" />
            My Profile
          </a>
        </div>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Type Something here" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
