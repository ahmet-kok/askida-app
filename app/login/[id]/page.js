"use client"
import React from "react";
import { useEffect } from "react";

export default function Session({ params }) {
  const token = params.id;
  console.log(token);
  useEffect(() => {
    if (window) {
      // set props data to session storage or local storage
      window.localStorage.setItem("token", token);
    }
  }, []);
  return <h1>hello {token}</h1>;
}
