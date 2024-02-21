"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { MdCancel } from "react-icons/md";
import { Club } from "@/utils/data/models";

const SearchAutocomplete = (props: { data: Club[], setLocation: Dispatch<SetStateAction<string>> }) => {
  const [data, setData] = useState<string[]>();
  const [filteredData, setFilteredData] = useState<string[]>();
  const [panelOpen, setPanelOpen] = useState<boolean>(false);

  const inputRef = useRef<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFilteredData(undefined);
      setPanelOpen(false);
      return;
    }
    if (!data) return;
    setPanelOpen(true);
    const filtered = data.filter((each: string) =>
      each.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    props.setLocation(e.target.value)
  };

  useEffect(() => {
    setData(props.data.map((club: any) => club.location));
  }, [props.data]);

  return (
    <fieldset className="w-full">
      <div className="w-full flex items-center">
        <Input
          name="location"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Buscar ciudad"
          className="w-full rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary text-gray-500 focus-visible:ring-transparent ring-offset-transparent hover:placeholder:text-black"
        />
        {/* {filteredData && (
          <MdCancel
            size={20}
            onClick={() => {
              inputRef.current.value = "";
              setFilteredData(undefined);
              setPanelOpen(false);
            }}
          />
        )} */}
      </div>
      <div className="w-full max-h-1 relative z-[1000]">
        {panelOpen && (
          <div
            className={`${
              panelOpen ?? "absolute top-0 right-0"
            } w-full bg-white/80 overflow-y-auto rounded-b-lg`}
          >
            <ul className="p-4 flex flex-col gap-2 max-h-[10rem] overflow-y-auto">
              {filteredData &&
                filteredData.map((location: string, i: number) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        inputRef.current.value = location;
                        setPanelOpen(false);
                        props.setLocation(location)
                      }}
                    >
                      {location}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default SearchAutocomplete;
