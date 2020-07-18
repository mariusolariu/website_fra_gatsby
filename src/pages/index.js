import React from "react"
import Layout from "../components/Layout";
import Description from "../components/Description";
import Header from "../components/Header";
import GeneralSlideshow from "../components/GeneralSlideshow";

export default function Home() {

  return <Layout>
    <Header />
    <div id="content" style={{ paddingLeft: 2.5 + "em", paddingRight: 2.5 + "em", paddingBottom: 2.5 + "em" }}>
      <Description />

      <div style={{ clear: "both" }}> </div>

      {/* <div id="slideshowWrapper" style={{
        backgroundColor: "#222323",
        width: 100 + "%",
        height: 50 + "%",
        maxWidth: 850 + "px",
        maxHeight: (width / 2) + "px",
        border: "2px solid red",
        marginTop: 2 + "em",
        padding: 1 + "em",
        display: "block",
      }}> */}
      <GeneralSlideshow />
      {/* </div> */}


    </div>
  </Layout >
}
