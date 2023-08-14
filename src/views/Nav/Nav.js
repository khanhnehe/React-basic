import React from "react";
import "./Nav.scss";

import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
            {/* thuộc tính exact={true} khi và chỉ khi we vào trang home thì nó mới
            thêm class là active Home */}
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todos
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
      </>
    );
  }
}

export default Nav;
