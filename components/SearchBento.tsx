"use client";

import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import BentoItem from "./BentoItem";
import { Button } from "./ui/button";
import Select from "react-select";
import getClubs from "@/utils/data/clubs.json";
import courts from "@/utils/data/courts.json";
import { useEffect, useState } from "react";

interface Club {
  id: String;
  name: String;
  location: String;
  sports: String[];
}

const SearchBento = (props: { class: string }) => {
  
  /**
   * obtain an array of clubs and map the entries for use the data in the select box
   * @returns an array of mapped clubs
   */
  const getMappedClubs = (): { value: string; label: string }[] => {
    let mappedClubs: { value: string; label: string }[] = [];
    getClubs.forEach((club) => {
      const newClub: { value: string; label: string } = {
        value: club.name.toLowerCase(),
        label: club.name,
      };
      mappedClubs.push(newClub);
    });
    return mappedClubs;
  };

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
        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          <datalist id="sports">
            <option value="Tenis"></option>
          </datalist>
          <Label htmlFor="sports">Deporte</Label>
          <Input
            id="sports"
            list="sports"
            placeholder="Seleccione un deporte"
          />
        </div> */}
        <Select
          name="club"
          options={getMappedClubs()}
        />
      </BentoItem>

      {/* submit */}
      <Button
        type="submit"
        size="lg"
        className="mx-auto"
      >
        Buscar
      </Button>
    </form>
  );
};

export default SearchBento;
