"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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

const SearchCourts = () => {
  const [date, setDate] = useState<Date>();
  const [horasDisponibles, setHorasDisponibles] = useState<string[]>();

  useEffect(() => {
    setHorasDisponibles(hours.generateHours());
  }, []);

  return (
    <div className="fixed bottom-10 right-[20%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-center gap-4 z-10 rounded-3xl p-4"
      >
        <fieldset className="w-[200px]">
          <Input
            id="location"
            type="text"
            placeholder="Buscar ciudad"
            className="rounded-xl"
          />
        </fieldset>
        <fieldset className="w-[200px]">
          <Select>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Deporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tenis">Tenis</SelectItem>
              <SelectItem value="futbol">Fútbol</SelectItem>
            </SelectContent>
          </Select>
        </fieldset>
        <fieldset className="w-[200px]">
          <Popover>
            <PopoverTrigger asChild className="rounded-xl">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal px-3 py-2",
                  !date && "text-muted-foreground"
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
        <fieldset className="w-[200px]">
          <Select>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Horario" />
            </SelectTrigger>
            <SelectContent>
              {horasDisponibles &&
                horasDisponibles.map((hour) => {
                  return <SelectItem value={hour}>{hour}</SelectItem>;
                })}
            </SelectContent>
          </Select>
        </fieldset>
        <Button type="submit" className="px-10 rounded-xl">Buscar</Button>
      </form>
    </div>
  );
};

export default SearchCourts;
