"use client";
import jsCookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useEffect } from "react";

export default function Session({ params }) {
  const router = useRouter();
  const token = params.id;
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  useEffect(() => {
    if (window) {
      jsCookie.set("token", token);
      jsCookie.set("name", name);
      jsCookie.set("email", email);
      window.localStorage.setItem("token", token);
    }
  }, [name, email, token]);
  return router.push("/");
}
