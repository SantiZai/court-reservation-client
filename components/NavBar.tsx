"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createUser } from "@/utils/data/createData";
import { getUserByEmail } from "@/utils/data/getData";
import { User } from "@/utils/data/models";
import { useUserStore } from "./providers/user/userStoreProvider";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user, error, isLoading } = useUser();

  const userStore = useUserStore((state) => state.user);
  const setUserStore = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (user && !isLoading) {
      getUserByEmail(user.email as string).then((res) => {
        if (!res) {
          const newUser: User = {
            fullName: user.name as string,
            email: user.email as string,
          };
          createUser(newUser).finally(() =>
            getUserByEmail(res.email).then((res) => setUserStore(res))
          );
        }
        setUserStore(res);
      });
    }
  }, [user, isLoading]);

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
            <div className="w-full flex justify-between items-center">
              <section className="flex items-center gap-2">
                <Image
                  src={user.picture as string}
                  alt="User image"
                  width={50}
                  height={80}
                  className="rounded-full"
                />
                <p>{user.name}</p>
              </section>
              <Button variant="ghost">
                <Link href="/api/auth/logout">Cerrar sesión</Link>
              </Button>
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
