import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

function Auth({ children, authPage = false, name}) {
  return (
    <>
      {!authPage && <Header name={name}/>}
      {children}
      {!authPage && <Footer />}
    </>
  );
}
export default Auth;
