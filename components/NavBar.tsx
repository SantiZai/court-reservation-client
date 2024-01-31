import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full md:h-20 bg-slate-200 grid grid-rows-1 grid-cols-2">
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
  );
};

export default NavBar;
