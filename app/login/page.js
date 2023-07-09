"use client";
import Auth from "../components/Auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const [toggleStatus, setToggleStatus] = useState(true);
  function handleChange() {
    if (toggleStatus) {
      setToggleStatus(false);
    } else {
      setToggleStatus(true);
    }
  }
  const submitContact = async (event) => {
    event.preventDefault();
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
    } else console.log("parola yanlış");
  };
  return (
    <>
      <Auth authPage={true}>
        <div className="min-h-screen bg-white">
          <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <Image
                  alt="Night"
                  width={1080}
                  height={1080}
                  src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="hidden lg:relative lg:block lg:p-12">
                  <Link className="block text-white" href="/">
                    <span className="sr-only">Home</span>
                    <svg
                      className="h-8 sm:h-10"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>

                  <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    Welcome to Squid 🦑
                  </h2>

                  <p className="mt-4 leading-relaxed text-white/90">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                  </p>
                </div>
              </section>

              <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="max-w-xl lg:max-w-3xl">
                  <div className="relative -mt-16 block lg:hidden">
                    <Link
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                      href="/"
                    >
                      <span className="sr-only">Home</span>
                      <svg
                        className="h-8 sm:h-10"
                        viewBox="0 0 28 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Welcome to Squid 🦑
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi nam dolorum aliquam, quibusdam aperiam
                      voluptatum.
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-center ">
                    <p className=" lg:w-max text-md text-gray-700 inline-flex">Don&apos;t have an account? Sign up!</p>
                    <div className="inline-flex w-max  ml-4 mr-4">
                      <label
                        htmlFor="AcceptConditions"
                        className="relative h-8 w-14 cursor-pointer"
                      >
                        <input
                          onChange={handleChange}
                          type="checkbox"
                          id="AcceptConditions"
                          className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                        />

                        <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
                          <svg
                            data-unchecked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            data-checked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>

                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                      </label>
                    </div>
                    <p className="lg:w-max text-md text-gray-700 inline-flex">Have an account? Sign in!</p>
                  </div>
                  {!toggleStatus && (
                    <>
                      <form
                        onSubmit={submitContact}
                        className="mt-8 grid grid-cols-6 gap-6"
                      >
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="FirstName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>

                          <input
                            required
                            type="text"
                            id="FirstName"
                            name="first_name"
                            className="mt-1 w-full pt-1 pb-1 pl-1 pr-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="LastName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>

                          <input
                            required
                            type="text"
                            id="LastName"
                            name="last_name"
                            className="mt-1 w-full pt-1 pb-1 pl-1 pr-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>

                          <input
                            required
                            type="email"
                            id="Email"
                            name="email"
                            className="mt-1 w-full rounded-md pt-1 pb-1 pl-1 pr-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>

                          <input
                            required
                            type="password"
                            id="Password"
                            name="password"
                            className="mt-1 w-full rounded-md pt-1 pb-1 pl-1 pr-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="PasswordConfirmation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password Confirmation
                          </label>

                          <input
                            required
                            type="password"
                            id="PasswordConfirmation"
                            name="password_confirmation"
                            className="mt-1 w-full rounded-md pt-1 pb-1 pl-1 pr-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="MarketingAccept"
                            className="flex gap-4"
                          >
                            <input
                              required
                              type="checkbox"
                              id="MarketingAccept"
                              name="marketing_accept"
                              className="h-5 w-5 rounded-md pt-1 pb-1 pl-1 pr-1 border-gray-200 bg-white shadow-sm"
                            />

                            <span className="text-sm text-gray-700">
                              I want to receive emails about events, product
                              updates and company announcements.
                            </span>
                          </label>
                        </div>

                        <div className="col-span-6">
                          <p className="text-sm text-gray-500">
                            {"By creating an account, you agree to our "}
                            <Link href="#" className="text-gray-700 underline">
                              terms and conditions
                            </Link>
                            {" and "}
                            <Link href="#" className="text-gray-700 underline">
                              privacy policy
                            </Link>
                            .
                          </p>
                        </div>

                        <div className="col-span-6 flex items-center gap-4">
                          <button
                            type="submit"
                            className="w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                          >
                            Create an account
                          </button>
                        </div>
                      </form>

                      <div className="col-span-6 flex items-center gap-4 mt-4">
                        <Link
                          href="https://askida-kod.onrender.com/api/public/google/login"
                          className="text-center w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Create an account with Google
                        </Link>
                      </div>
                    </>
                  )}
                  {toggleStatus && (
                    <>
                      <form
                        onSubmit={submitContact}
                        className="mt-8 grid grid-cols-6 gap-6"
                      >
                        <div className="col-span-6">
                          <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>

                          <input
                            required
                            type="email"
                            id="Email"
                            name="email"
                            className="mt-1 w-full rounded-md pt-1 pb-1 pl-1 pr-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>

                          <input
                            required
                            type="password"
                            id="Password"
                            name="password"
                            className="mt-1 w-full pt-1 pb-1 pl-1 pr-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 flex items-center gap-4 mt-4">
                          <button
                            type="submit"
                            className="w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                          >
                            Login
                          </button>
                        </div>
                      </form>

                      <div className="col-span-6 flex items-center gap-4 mt-4">
                        <Link
                          href="https://askida-kod.onrender.com/api/public/google/login"
                          className="text-center w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                          Login with Google
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </main>
            </div>
          </section>
        </div>
      </Auth>
    </>
  );
}
