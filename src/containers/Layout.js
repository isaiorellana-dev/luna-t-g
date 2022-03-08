import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@styles/global/global.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
