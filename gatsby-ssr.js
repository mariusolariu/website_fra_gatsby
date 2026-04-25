import React from "react";

const A11Y_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('a11y.textSize');var c=localStorage.getItem('a11y.highContrast');var m={normal:0.78,large:0.88,xl:1};if(s&&m[s]!==undefined){document.documentElement.style.setProperty('--scale',m[s]);}if(c==='true'){document.documentElement.setAttribute('data-contrast','high');}}catch(e){}})();`;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="gf-preconnect-1"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="gf-preconnect-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="gf-stylesheet"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
    />,
    <script key="a11y-init" dangerouslySetInnerHTML={{ __html: A11Y_INIT_SCRIPT }} />,
  ]);
};
