"use client"

import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import BentoItem from "./BentoItem";
import { Button } from "./ui/button";

const SearchBento = (props: { class: string }) => {
  return (
    <form
    onSubmit={(e) => e.preventDefault()}
      className={`${props.class} w-full max-w-[1400px]
        grid md:grid-cols-10 auto-rows-[14rem] gap-4
        mx-auto p-6 md:p-12 lg:p-20`}
    >
      {/* ubicacion */}
      <BentoItem class="md:col-span-10">
        {/* pais */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="countries">
            <option value="Argentina">América</option>
            <option value="Brasil">América</option>
          </datalist>
          <Label htmlFor="countries">País</Label>
          <Input
            id="countries"
            list="countries"
            placeholder="Ingrese el país"
          />
        </div>

        {/* ciudad */}
        {/* TODO: va a depender del pais ingresado */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="cities">
            <option value="Ciudad Autónoma de Buenos Aires">Argentina</option>
            <option value="Buenos Aires">Argentina</option>
          </datalist>
          <Label htmlFor="cities">Ciudad</Label>
          <Input
            id="cities"
            list="cities"
            placeholder="Ingrese la ciudad"
          />
        </div>

        {/* barrio / municipio */}
        {/* TODO: va a depender de la provincia ingresada */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="neighborhoods">
            <option value="Vicente López">
              Ciudad Autónoma de Buenos Aires
            </option>
            <option value="Salto">Buenos Aires</option>
          </datalist>
          <Label htmlFor="neighborhoods">Barrio / municipio</Label>
          <Input
            id="neighborhoods"
            list="neighborhoods"
            placeholder="Ingrese el barrio o municipio"
          />
        </div>
      </BentoItem>

      {/* club */}
      {/* TODO: va a depender del barrio o municipio */}
      <BentoItem class="md:col-span-7">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="clubs">
            <option value="Sports">Salto</option>
            <option value="Náutico">Salto</option>
          </datalist>
          <Label htmlFor="clubs">Club</Label>
          <Input
            id="clubs"
            list="clubs"
            placeholder="Ingrese el club"
          />
        </div>
      </BentoItem>

      {/* deporte */}
      {/* TODO: va a depender del club elegido */}
      <BentoItem class="md:col-span-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="sports">
            <option value="Tenis"></option>
          </datalist>
          <Label htmlFor="sports">Deporte</Label>
          <Input
            id="sports"
            list="sports"
            placeholder="Seleccione un deporte"
          />
        </div>
      </BentoItem>

      {/* submit */}
      <Button type="submit" size="lg" className="mx-auto">Buscar</Button>
    </form>
  );
};

export default SearchBento;
