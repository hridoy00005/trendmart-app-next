
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NavCart from './navcart';
import AccountBtn from './accountbtn';

export default function Navbar() {
    
  return (
    <nav className="hidden py-1 sm:flex sticky sm:py-2 md:py-4 top-0 z-[999] bg-[#1e1e1e] sm:px-20 mb-3">
      <div className="flex justify-between w-full h-full text-gray-300 text-[0.85rem]">
        <Link href="/">
          <Image src="/images/logo.png" width={20} height={20} alt="Logo" className="w-8" />
        </Link>
        {/* <NavMenu /> */}
        <div className="flex items-center gap-3 my-auto">
          <NavCart />
          {/* <Link to="/favourites">
            <div className="duration-[0.4s] hover:text-rose-700 rounded-lg cursor-pointer">
              <i className="fa-regular fa-heart"></i>
            </div>
          </Link> */}
          <AccountBtn />
        </div>
      </div>
    </nav>
  );
}