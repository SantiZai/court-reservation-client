"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
import { BaseItem, createAutocomplete } from "@algolia/autocomplete-core";
import clubs from "../utils/data/clubs.json";

const AutocompleteItem = ({location}: {location: string}) => {
  return (
    <li>{location}</li>
  )
}

const SearchCourts = (props: any) => {
  const [date, setDate] = useState<Date>();
  const [horasDisponibles, setHorasDisponibles] = useState<string[]>();
  const [autocompleteState, setAutocompleteState] = useState<any>({
    collections: [],
    isOpen: false,
  });

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Buscar ciudad",
        id: "location",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "cities-api",
            getItems: ({ query }) => {
              /* TODO: traer resultados de la base de datos */
              /* if (!!query) {
                    return fetch
                }
                return [] */
                if(!!query) {
                  const locations = clubs.map((club) => ({
                    label: club.location,
                  })) as BaseItem[];
                  console.log(locations)
                  const results = locations.filter((loc: any) => {
                    return loc.label.toLowerCase().includes(query.toLowerCase())
                  })
                  return results
                }
            },
          },
        ],
        ...props,
      }),
    [props]
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  useEffect(() => {
    setHorasDisponibles(hours.generateHours());
  }, []);

  return (
    <div className="max-w-xl lg:max-w-[70%] mx-auto rounded-2xl 2xl:rounded-full bg-white shadow-lg shadow-slate-800/40 pl-5 p-3">
      <form
        className="w-full flex 2xl:flex-row flex-col items-center justify-center gap-4 z-10"
        ref={formRef}
        {...formProps}
      >
        <div className="w-full 2xl:w-1/4">
          <fieldset className="w-full">
            <Input
              className="rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary text-gray-500 focus-visible:ring-transparent"
              ref={inputRef}
              {...inputProps}
            />
            {autocompleteState.isOpen && (
              <div
                ref={panelRef}
                {...autocomplete.getPanelProps()}
              >
                {autocompleteState.collections.map((collection: any, i: number) => {
                  const { items } = collection;
                  console.log(items)
                  return (
                    <section key={`section-${i}`}>
                      {items.length > 0 && (
                        <ul {...autocomplete.getListProps()}>
                          {
                            items.map((item: any, i: number) => <AutocompleteItem key={i} {...item} />)
                          }
                        </ul>
                      )}
                    </section>
                  )
                })}
              </div>
            )}
          </fieldset>
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
                    horasDisponibles.map((hour) => {
                      return (
                        <SelectItem
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
