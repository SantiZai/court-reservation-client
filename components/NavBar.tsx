"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sm:hidden fixed w-full">
      <section className="absolute top-0 right-0 p-2 z-20">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </section>
      <section
        className={`${
          isOpen ? "right-0" : "-right-full"
        } h-screen w-full absolute top-0 flex flex-col justify-between bg-slate-200/90 transition-all duration-500 p-4 touch-none`}
      >
        <div>
          <Image
            src="next.svg"
            alt="Logo de Sale Partidito"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <Link
            href="/"
            onClick={() => setIsOpen(!isOpen)}
          >
            Inicio
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contactanos
          </Link>
          <Link
            href=""
            onClick={() => setIsOpen(!isOpen)}
          >
            Software para clubes
          </Link>
          <Link
            href=""
            onClick={() => setIsOpen(!isOpen)}
          >
            Quiero una demo
          </Link>
        </div>
        <div>
          <Button>
            <Link href="/auth/login">Iniciar sesión</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/auth/register">Registrarse</Link>
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
