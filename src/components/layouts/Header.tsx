import * as React from "react";
import Navbar from "./Navbar";
import VisuallyHidden from "../common/VisuallyHidden";

const Header = () => {
  return (
    <header className="container relative z-50 pt-6 lg:pt-12" role="banner">
      <VisuallyHidden>Main header</VisuallyHidden>
      <Navbar />
    </header>
  );
};

export default Header;
