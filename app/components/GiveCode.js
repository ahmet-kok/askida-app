import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const GiveCode = ({ onClose, classes, submitHandler }) => {
  /* const submitHandler = async (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
 */
  return (
    <>
      <div
        className={
          "absolute w-96 rounded-2xl block border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 " +
          classes
        }
        role="alert"
      >
        <div className="flex items-center gap-4">
          <p className="font-medium sm:text-lg">Send a Code!</p>
        </div>

        <p className="mt-4 text-gray-500">
          Do you really want to get the code?
        </p>

        <form className="w-full" onSubmit={submitHandler}>
          <select
          required
            className="w-full rounded p-1 mt-2 border-gray-200 border-2 bg-white appearance-none"
            name="appName"
            id="appName"
          >
            <option>Bluesky</option>
            <option disabled >Coming soon...</option>
          </select>
          <input
          required
            className="w-full rounded p-1 mt-2 border-gray-200 border-2"
            type="text"
            id="appCode"
            name="appCode"
            placeholder="Invitation code"
          ></input>
          <button
            className="inline-block w-full mt-2 px-5 py-3 text-center text-sm font-semibold transition rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 sm:w-30"
            type="submit"
          >
            Send a Code
          </button>
        </form>
        <div className="mt-2 w-full">
          <button
            className="inline-block w-full  bg-gray-50 hover:bg-gray-100 px-5 py-3 text-center text-sm font-semibold text-gray-500 transition rounded focus:outline-none focus:ring focus:ring-yellow-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
