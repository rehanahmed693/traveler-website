"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="w-[100%] h-auto sm:h-[50px]  flex justify-around items-center shadow-md bg-slate-100 text-black">
        <h1 className="sm:text-3xl text2xl font-semibold  ">FlyWith</h1>

        <ul className="sm:flex sm:flex-row hidden">
          <li className="px-4 hover:font-semibold ">
            <Link href="/">Popular Places</Link>
          </li>
          <li className="px-4 hover:font-semibold ">
            <Link href="/Outside">Travel Outside</Link>
          </li>
          <li className="px-4 hover:font-semibold ">
            <Link href="/Triside">Online Packages</Link>
          </li>
        </ul>

        <Link
          className="text-sm text-black bg-white rounded-full py-1 px-3 hover:scale-[1.2] "
          href=""
        >
          Registration
        </Link>
        <div className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <ul className="flex flex-col sm:hidden bg-slate-400 text-base gap-1 justify-center items-center">
          <li className="px-4">
            <Link href="/">Popular Places</Link>
          </li>
          <li className="px-4">
            <Link href="/Outside">Travel Outside</Link>
          </li>
          <li className="px-4">
            <Link href="/Triside">Online Packages</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
