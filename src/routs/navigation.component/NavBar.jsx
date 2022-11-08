import "./navBar.scss";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import LogoImage from "../../components/logoImage/LogoImage";
import LinkNav from "../links/LinkNav";
import navBarLinks from "../../dataBox/navBarLinks";

const NavBar = ({ cartNumber }) => {
  const [logoName, setLogoName] = useState("");

  useEffect(() => {
    setLogoName("OwlStreet");
  }, []);
  return (
    <>
      <div className="navBarDiv">
        <LogoImage name={logoName} />
        <div className="emptyDiv"></div>
        <div className="linkNav">
          {navBarLinks.map((link) => {
            return (
              <Link key={link.id} className={link.classname} to={link.to}>
                <LinkNav name={link.name} />
              </Link>
            );
          })}
          <Link className="cartLink" to="/cart-items">
            <i className="fa-solid fa-bag-shopping"></i>
            <span>{cartNumber}</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
