"use client"

import { Dropdown } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Account() {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const handlLogout = () => {
    // dispatch(logoutreducer());
    console.log("Logout");
    ;
  };

  const itemsAccount = [
    {
      key: "1",
      label: (
        <Link href="/account/orders" className="text-[0.8rem]">
          <span className="mr-1">
            <i className="fa-solid fa-user"></i>
          </span>{" "}
          Account
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={handlLogout} className="text-[0.8rem]">
          <span className="mr-1">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>{" "}
          Logout
        </div>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items: itemsAccount }} placement="bottomRight" arrow className="my-auto">
        <div className="">
          <Image className="w-[30px] h-[30px] rounded-full" src="" alt='User img' ></Image>
        </div>
      </Dropdown>
  );
}