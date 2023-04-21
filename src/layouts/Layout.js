import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../wrappers/header/Header";
import Footer from "../wrappers/footer/Footer";
import ScrollToTop from "../components/scroll-to-top"

const Layout = ({ children, footerBgClass }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer
        backgroundColorClass={footerBgClass ? footerBgClass : "bg-gray"}
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  footerBgClass: PropTypes.string
};

export default Layout;