import React from "react";
import Nav from "../../components/organisms/navigation/navigation-component";
import Footer from "../../components/organisms/footer/footer-component";

function ProteinProductPage() {
  return (
    <>
      <Nav />
      <a className="text-color-primary" href="/protein">
        <h2>Get Back</h2>
      </a>
      <Footer />
    </>
  );
}

export default ProteinProductPage;
