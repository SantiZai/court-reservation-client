"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user, error, isLoading } = useUser();

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
          {user ? (
            <div className="flex items-center gap-4">
              <Image
                src={user.picture as string}
                alt="User image"
                width={50}
                height={80}
                className="rounded-full"
              />
              <p>{user.name}</p>
            </div>
          ) : (
            <Button>
              <Link href="/api/auth/login">Ingresar</Link>
            </Button>
          )}
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
