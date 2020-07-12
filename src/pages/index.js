import React from "react"
import Layout from "../components/Layout";
import Description from "../components/Description";
import Header from "../components/Header";
import { MyImage } from "../components/MyImage";

export default function Home() {
  return <Layout>
    <Header />
    <div id="content" style={{ paddingLeft: 2.5 + "em", paddingRight: 2.5 + "em", paddingBottom: 2.5 + "em" }}>
      <Description />
    </div>
  </Layout >
}
