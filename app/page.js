"use client";
import Link from "next/link";
import Auth from "./components/Auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CodeApp } from "./components/CodeApp";
import jsCookie from "js-cookie";
import { useState } from "react";
import { GetCode } from "./components/GetCode";
import { GiveCode } from "./components/GiveCode";

export default function Home() {
  const router = useRouter();
  const [disable, setDisable] = useState(null);
  const [logout, setLogout] = useState(false);
  function logOutHandler() {
    setAppInfo("logout");
    setWindowsState(true);
    setDisable("opacity-25 z-0");
  }
  function giveCodeHandler() {
    setGiveCodeWindowState(true);
    setDisable("opacity-25 z-0");
  }
  const [name, setName] = useState("");
  const [appInfo, setAppInfo] = useState({
    name: "bsky",
    key: "1",
  });
  const [windowState, setWindowsState] = useState(false);
  const [giveCodeWindowState, setGiveCodeWindowState] = useState(false);
  function onClose() {
    if (windowState) {
      setWindowsState(false);
      setDisable(null);
      setAppInfo(null);
    } else if (giveCodeWindowState) {
      setGiveCodeWindowState(false);
      setDisable(null);
    }
  }
  function onOpen(appName, appKey) {
    setAppInfo({
      name: appName,
      key: appKey,
    });
    setDisable("opacity-25 z-0");
    setWindowsState(true);
  }
  function loggedOutHandler() {
    window.localStorage.clear();
    router.push("/login");
  }
  useEffect(() => {
    setName(jsCookie.get("name"));
    if (window) {
      // set props data to session storage or local storage
      if (!window.localStorage.getItem("token")) {
        router.push("/login");
      }
    }
  }, [router]);
  const Apps = [
    {
      name: "bsky",
      key: "1",
    },
    {
      name: "Insta",
      key: "2",
    },
    {
      name: "Twitter",
      key: "3",
    },
    {
      name: "facebook",
      key: "4",
    },
  ];

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    const name = event.target.appName.value;
      const code = event.target.appCode.value;

      const body = JSON.stringify({
        name: name,
        code: code
      });

      const res = await fetch(
        "https://askida-kod.onrender.com/api/public/register",
        {
          body: body,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      const result = await res.json();
  };
    /* 
    if (
      event.target.password_confirmation.value == event.target.password.value
    ) {
      const fname = event.target.first_name.value;
      const lname = event.target.last_name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const body = JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });
      console.log(body);

      const res = await fetch(
        "https://askida-kod.onrender.com/api/public/register",
        {
          body: body,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      const result = await res.json();
    } else console.log("parola yanlış"); */
  

  return (
    <>
      {windowState && (
        <div className="absolute z-10 bottom-0 top-0 items-center grid grid-cols-1 w-full">
          <GetCode
            onClose={onClose}
            loggedOutHandler={loggedOutHandler}
            info={appInfo}
            classes="justify-self-center z-10"
          />
          <div className="z-0 w-full h-full" onClick={onClose}></div>
        </div>
      )}
      {giveCodeWindowState && (
        <div className="absolute z-10 bottom-0 top-0 items-center grid grid-cols-1 w-full">
          <GiveCode submitHandler={submitHandler} onClose={onClose} classes="justify-self-center z-10" />
          <div className="z-0 w-full h-full" onClick={onClose}></div>
        </div>
      )}
      <Auth authPage={false} logOutHandler={logOutHandler} name={name}>
        <main
          className={
            "flex flex-col h-auto items-center justify-between p-6 " + disable
          }
          onClick={onClose}
        >
          <section>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Kod Bağışlayarak Destek Ol!
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vero aliquid sint distinctio iure ipsum cupiditate? Quis,
                    odit assumenda? Deleniti quasi inventore, libero reiciendis
                    minima aliquid tempora. Obcaecati, autem.
                  </p>

                  <a
                    onClick={giveCodeHandler}
                    
                    className="mt-8 inline-block   px-12 py-3 text-sm font-medium text-white transition rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Give Invitation Code
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Apps.map((app) => (
                    <CodeApp
                      key={app.key}
                      name={app.name}
                      description="test something new yauuuwwww"
                      onClick={() => onOpen(app.name, app.key)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Auth>
    </>
  );
}
