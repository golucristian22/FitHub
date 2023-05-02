import React from "react";
import Banner from "../../components/organisms/banner/banner-component.tsx";
import Footer from "../../components/organisms/footer/footer-component.tsx";
import Nav from "../../components/organisms/navigation/navigation-component.tsx";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
