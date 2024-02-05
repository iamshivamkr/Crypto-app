import React from "react";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <FaBitcoin color="orange" size={"30"} />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Playfair+Display&family=Workbench&display=swap"
          rel="stylesheet"
        />
        <Link to="/">
          <h1
            // className="font-['DM_Serif_Display',serif] text-[x-large]"
            onClick={() => {
              console.log("Home Clicked!!!!!!!!!");
            }}
          >
            100-DHA
          </h1>
        </Link>
        <FaEthereum color="black" size={"30"} />
      </div>

      <ul>
        <li>
          {" "}
          <Link
            // className="ml-48 no-underline text-white text-[20px] "
            to="/"
          >
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            // className="ml-48 no-underline text-white text-[20px] "
            to="/coins"
          >
            Coins
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
