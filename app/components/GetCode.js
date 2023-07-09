import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const GetCode = ({ info, onClose, classes, loggedOutHandler }) => {
  return (
    <>
      {info != "logout" ? (
        <div
          className={
            "absolute w-80 rounded-2xl block border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 " +
            classes
          }
          role="alert"
        >
          <div className="flex items-center gap-4">
            <p className="font-medium sm:text-lg">Get a {info.name} Code!</p>
          </div>

          <p className="mt-4 text-gray-500">
            Do you really want to get the code?
          </p>

          <div className="mt-6 sm:flex sm:gap-4">
            <button
              className="inline-block w-full  px-5 py-3 text-center text-sm font-semibold transition rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 sm:w-30"
              href=""
            >
              Get Code
            </button>

            <button
              className="mt-2 inline-block w-full  bg-gray-50 hover:bg-gray-100 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto transition rounded focus:outline-none focus:ring focus:ring-yellow-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          className={
            "absolute w-80 rounded-2xl block border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 " +
            classes
          }
          role="alert"
        >
          <div className="flex items-center gap-4">
            <p className="font-medium sm:text-lg">Do you want to log out?</p>
          </div>

          <p className="mt-4 text-gray-500">
            You will redirect to login page after logout.
          </p>

          <div className="mt-6 sm:flex sm:gap-4">
            <button
              className="inline-block w-full  px-5 py-3 text-center text-sm font-semibold transition rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 sm:w-30"
              onClick={loggedOutHandler}
            >
              Log out
            </button>

            <button
              className="mt-2 inline-block w-full  bg-gray-50 hover:bg-gray-100 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto transition rounded focus:outline-none focus:ring focus:ring-yellow-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
