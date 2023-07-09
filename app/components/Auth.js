import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

function Auth({ children, authPage = false, name, logOutHandler}) {
  return (
    <>
      {!authPage && <Header logOutHandler={logOutHandler} name={name}/>}
      {children}
      {!authPage && <Footer />}
    </>
  );
}
export default Auth;
