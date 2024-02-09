import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="sm:hidden absolute top-0">
      <Drawer>
        <DrawerTrigger>Toggle</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex justify-center">
            <Image
              src="/next.svg"
              alt="Logo de RTC"
              width={80}
              height={80}
            />
            {/* TODO: icono para tener un chat de preguntas frecuentes */}
          </DrawerHeader>
          <DrawerFooter className="text-center">
            <Link href="#">Inicio</Link>
            <Link href="#">Contactanos</Link>
            <Link href="#">Quiero una demo</Link>
            <Link href="#">Software para clubes</Link>
            <DrawerClose>
              <Button variant="ghost">⬇️</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default NavBar;
