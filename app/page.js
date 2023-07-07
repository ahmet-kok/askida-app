"use client";
import Link from "next/link";
import Auth from "./components/Auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CodeApp } from "./components/CodeApp";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (window) {
      

      // set props data to session storage or local storage
      if (!window.localStorage.getItem("token")) {
        router.push("/login");
      }
    }
  }, []);
  return (
    <Auth authPage={false} name={name}>
      <main className="flex flex-col h-auto items-center justify-between p-6">
        <section>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Kod Bağışlayarak Destek Ol!
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                  assumenda? Deleniti quasi inventore, libero reiciendis minima
                  aliquid tempora. Obcaecati, autem.
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <CodeApp name="Bluesky" description="test something" />
                <CodeApp name="Bluesky" description="test something" />
                <CodeApp name="Bluesky" description="test something" />
                <CodeApp name="Bluesky" description="test something" />
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </Auth>
  );
}
