"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="sm:hidden absolute top-0 right-0 m-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        toggle
      </button>
      <nav
        className={`
        w-2/3 sm:w-full h-full sm:h-20
        absolute top-0 right-0 sm:sticky -z-10
        grid grid-cols-1 grid-rows-2 place-items-center sm:grid sm:grid-rows-1 sm:grid-cols-2
        ${
          !isOpen ? "-right-2/3" : "right-0"
        }
        bg-slate-200 transition-all duration-500`}
      >
        <section className="px-6 py-2">
          <article className="h-full flex gap-2 justify-start items-center">
            <Image
              width={50}
              height={50}
              src="/next.svg"
              alt="The logo of the web site"
            />
            <p>RTC</p>
          </article>
        </section>
        <section className="px-6 py-2">
          <ul className="h-full flex gap-2 justify-end items-center">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
            <li>
              <Link href="/login">Iniciar sesión</Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
