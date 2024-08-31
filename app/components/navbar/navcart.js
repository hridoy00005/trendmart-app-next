"use client";

import { Badge } from "antd";
import Link from "next/link";
import React from "react";

export default function NavCart() {
  return (
    <Link href="/cart">
      <Badge
        //   count={length}
        color="white"
        size="small"
        style={{ color: "#1e1e1e" }}
      >
        <i className="fa-solid fa-cart-shopping text-gray-300 hover:text-white text-[1rem]"></i>
      </Badge>
    </Link>
  );
}
