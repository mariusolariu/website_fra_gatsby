import React from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import About from "../components/About";
import ParentClinicBanner from "../components/ParentClinicBanner";
import Visit from "../components/Visit";
import MapEmbed from "../components/MapEmbed";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import Profiles from "../components/Profiles";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Topbar />
      <main id="main">
        <Hero />
        <Steps />
        <About />
        <ParentClinicBanner />
        <Visit />
        <MapEmbed />
        <Services />
        <Gallery />
        <Faq />
        <Profiles />
      </main>
      <Footer />
    </Layout>
  );
}
