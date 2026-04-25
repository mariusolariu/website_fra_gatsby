import React from "react";
import { Helmet } from "react-helmet";

const TITLE = "Cabinet Cardiologie Dr. Olariu Ioan — Bocșa";
const DESCRIPTION =
  "Cabinet de cardiologie Dr. Olariu Ioan în Bocșa. Consult cardiologic, EKG, ecocardiografie, Holter. Programări: 0740 016 561.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Cabinet Cardiologie Dr. Olariu Ioan",
  telephone: "+40740016561",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Carpați, nr. 2, Bl. 2",
    addressLocality: "Bocșa",
    addressRegion: "Caraș-Severin",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "15:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/clinicaolariumedtimisoara/",
    "https://www.soimiisanatatii.ro/profile-94603-cmp/",
  ],
};

export default function Seo() {
  return (
    <Helmet>
      <html lang="ro" />
      <meta charSet="utf-8" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="theme-color" content="#2c5e7a" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ro_RO" />
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
    </Helmet>
  );
}
