"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import React, { useState } from "react";

export default function layout({ children }) {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      <div className=" flex items-center justify-center ">{children}</div>
      <Footer />
    </>
  );
}


