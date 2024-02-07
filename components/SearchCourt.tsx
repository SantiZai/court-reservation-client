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

const SearchCourts = (props: { class: string }) => {
  const [date, setDate] = useState<Date>();
  const [horasDisponibles, setHorasDisponibles] = useState<string[]>();

  useEffect(() => {
    setHorasDisponibles(hours.generateHours());
  }, []);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={props.class}
    >
      <fieldset className="w-[200px]">
        <Label htmlFor="location">Ubicación</Label>
        <Input
          id="location"
          type="text"
          placeholder="Buscar ciudad"
        />
      </fieldset>
      <fieldset className="w-[200px]">
        <Label>Elige el deporte</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Deporte" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tenis">Tenis</SelectItem>
            <SelectItem value="futbol">Fútbol</SelectItem>
          </SelectContent>
        </Select>
      </fieldset>
      <fieldset className="w-[200px]">
        <Label>Selecciona el día</Label>
        <Popover>
          <PopoverTrigger asChild>
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
        <Label>Elige un horario</Label>
        <Select>
          <SelectTrigger>
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
      <Button type="submit">Buscar</Button>
    </form>
  );
};

export default SearchCourts;
