import React from "react";
import Button from ".././elements/Button";
import BrandIcon from ".././parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon></BrandIcon>
          <ul className="navbar-nav ml-auto">
            <li
              style={{ marginLeft: 50 }}
              className={`nav-item${getNavLinkClass("/")}`}
            >
              <Button className="nav-link" type="link" href="">
                Find Kost
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/browse")}`}>
              <Button className="nav-link" type="link" href="/browse">
                Browse
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/testimonials")}`}>
              <Button className="nav-link" type="link" href="/testimonials">
                Testimonials
              </Button>
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/login")}`}>
                <Button className="btn px-4" hasShadow isPrimary>
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
