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
      id="interior_div"
      style={{
        paddingTop: 1 + "%",
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
        paddingBottom: 2 + "em",
        backgroundColor: "#F9F9F9",
      }}>
      <Description />

      <GeneralSlideshow />

      <Cabinete />

      <div style={{ clear: 'both' }} />

      <GoogleMap
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.816667956942!2d21.694567214128103!3d45.369919918273474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fd9446ce8b2c1%3A0x4972f9adc2aa9c78!2sOLARIU%20MED%20CARDIOLOGIE-BOCSA!5e0!3m2!1sen!2suk!4v1648983785697!5m2!1sen!2suk"
        city="Bocșa"
        anchorId="bocsaMap"
      />

    </div>
  </Layout >
}
