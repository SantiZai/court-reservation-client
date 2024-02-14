"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { es } from "date-fns/locale";
import * as hours from "@/utils/functions/manipulateHours";

import clubs from "../utils/data/clubs.json";
import SearchComponent from "./SearchComponent";

const SearchCourts = (props: any) => {
  const [date, setDate] = useState<Date>();
  const [horasDisponibles, setHorasDisponibles] = useState<string[]>();

  useEffect(() => {
    setHorasDisponibles(hours.generateHours());
  }, []);

  return (
    <div className="max-w-xl lg:max-w-[70%] mx-auto rounded-2xl 2xl:rounded-full bg-white shadow-lg shadow-slate-800/40 pl-5 p-3">
      <form className="w-full flex 2xl:flex-row flex-col items-center justify-center gap-4 z-10">
        <div className="w-full 2xl:w-1/4">
          <SearchComponent data={clubs} />
        </div>
        <div className="w-full flex md:flex-row 2xl:w-3/4 flex-col gap-4">
          <fieldset className="w-full md:w-1/2 2xl:w-1/2">
            <Select>
              <SelectTrigger className="rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary text-gray-500 hover:text-black focus-visible:ring-transparent">
                <SelectValue placeholder="Deporte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tenis">Tenis</SelectItem>
                <SelectItem value="futbol">Fútbol</SelectItem>
              </SelectContent>
            </Select>
          </fieldset>
          <div className="w-full lg:w-full flex gap-4">
            <fieldset className="w-1/2 md:w-1/2 2xl:w-1/2">
              <Popover>
                <PopoverTrigger
                  asChild
                  className="rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary"
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal px-3 py-2 hover:bg-inherit",
                      !date && "text-gray-500"
                    )}
                  >
                    {date ? (
                      format(date, "eee d 'de' MMMM 'de' y", { locale: es })
                    ) : (
                      <span>Selecciona una fecha</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </fieldset>

            <fieldset className="w-1/2 md:w-1/2 2xl:w-1/2">
              <Select>
                <SelectTrigger className="rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary text-gray-500 hover:text-black focus-visible:ring-transparent">
                  <SelectValue placeholder="Horario" />
                </SelectTrigger>
                <SelectContent>
                  {horasDisponibles &&
                    horasDisponibles.map((hour, i) => {
                      return (
                        <SelectItem
                          key={i}
                          value={hour}
                          className="focus-visible:ring-transparent"
                        >
                          {hour}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </fieldset>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full 2xl:w-auto px-10 py-6 rounded-full"
        >
          Buscar canchas
        </Button>
      </form>
    </div>
  );
};

export default SearchCourts;
