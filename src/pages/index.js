import React from "react"
import Layout from "../components/Layout";
import Description from "../components/Description";
import Header from "../components/Header";

export default function Home() {
  return <Layout>
    <Header />
    <div id="content" style={{ paddingLeft: 2.5 + "em", paddingRight: 2.5 + "em" }}>
      <Description />
      <p></p>
    </div>
  </Layout >
}
