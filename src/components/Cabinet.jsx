import React from 'react';

export default function Cabinet({
  props: { title } }) {


  return (
    <>
      <h1 style={{ color: "#ff0000" }}>{{ title }}</h1>
    </>
  )
}