import React from "react";
import Navbar from "../components/Common/Navbar";
import Hero from "../components/Folder/Ser-page/Hero";
import Imgcard from "./../../app/components/Folder/Ser-page/Imgcard";
import Care from "../components/Folder/Ser-page/Care";
import Prevent from "../components/Folder/Ser-page/Prevent";
import Sick from "../components/Folder/Ser-page/Sick";
import Surgery from "../components/Folder/Ser-page/Surgery";
import Addition from "../components/Folder/Ser-page/Addition";
import Footer from "../components/Common/Footer";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Imgcard />
      <Care />
      <Prevent />
      <Sick />
      <Surgery />
      <Addition />
      <Footer />
    </>
  );
}

export default page;
