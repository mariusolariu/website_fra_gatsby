import React from "react"
import Layout from "../components/Layout";
import Description from "../components/Description";
import Header from "../components/Header";
import GeneralSlideshow from "../components/GeneralSlideshow";
import Cabinete from '../components/Cabinente';
import GoogleMap from '../components/GoogleMap';
import { Helmet } from "react-helmet";

export default function Home() {

  return <Layout>
    <Header />
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabinet Cardiologie dr. Olariu Ioan</title>
        <meta name="description" content="Informații utile despre cabinetele doctorului Olariu Ioan" />
      </Helmet>
    </div>
    <div
      id="content"
      style={{
        paddingTop: 1 + "%",
        paddingLeft: 5 + "%",
        paddingRight: 5 + "%",
        paddingBottom: 2 + "em",
        backgroundColor: "#F9F9F9",
      }}>
      <Description />

      <GeneralSlideshow />

      <Cabinete />

      <div style={{ clear: 'both' }} />

      <GoogleMap
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.592877972837!2d21.21576677386085!3d45.76799685044767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47456788946f41af%3A0x366cae4f50aaf37f!2sCABINET%20CARDIOLOGIE%20Dr.%20OLARIU%20IOAN!5e0!3m2!1sen!2suk!4v1593256507419!5m2!1sen!2suk"
        city="Timișoara"
        anchorId="timisoaraMap"
      />

      <GoogleMap
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.570139199307!2d21.72127031596177!3d45.377668679099976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fd9446ce8b2c1%3A0x4972f9adc2aa9c78!2sCabinet%20Cardiologie-Bocsa%20Dr%20Olariu%20Ioan!5e0!3m2!1sen!2suk!4v1593256773834!5m2!1sen!2suk"
        city="Bocșa"
        anchorId="bocsaMap"
      />

    </div>
  </Layout >
}
