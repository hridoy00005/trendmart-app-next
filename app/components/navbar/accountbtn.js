"use client";

import React from "react";
import Account from "../account/account";
import Link from "next/link";

export default function AccountBtn() {
    const isAuthenticate = true;
  return (
    <>
      {isAuthenticate ? (
        <Account />
      ) : (
        <Link
          href="/login"
          className="my-auto cursor-pointer hover:bg-slate-300 duration-[0.4s] hover:text-black rounded-lg p-1"
        >
          <i className="fa-regular fa-user"></i>
          <span className="ml-1">Login</span>
        </Link>
      )}
    </>
  );
}
