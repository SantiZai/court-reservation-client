"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";

const SearchComponent = (props: { data: {}[] }) => {
  const [data, setData] = useState<string[]>();
  const [filteredData, setFilteredData] = useState<string[]>();
  const [panelOpen, setPanelOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFilteredData(undefined);
      setPanelOpen(false);
      return;
    }
    if (!data) return;
    setPanelOpen(true)
    const filtered = data.filter((each: string) =>
      each.includes(e.target.value)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    setData(props.data.map((club: any) => club.location.toLowerCase()));
  }, [props.data]);

  return (
    <fieldset className="w-full">
      <Input
        onChange={handleChange}
        placeholder="Buscar ciudad"
        className="rounded-none border-2 border-t-0 border-r-0 border-l-0 border-primary text-gray-500 focus-visible:ring-transparent"
      />
      <div className="w-full max-h-1 relative">
      {filteredData && (
        <div className={`${panelOpen ?? "absolute top-0 right-0 z-100"} w-full bg-white overflow-y-auto rounded-b-lg`}>
          <ul className="p-4 flex flex-col gap-2 max-h-[10rem] overflow-y-auto">
            {filteredData.map((location: string, i: number) => {
              return <li key={i}>{location}</li>;
            })}
          </ul>
        </div>
      )}
      </div>
    </fieldset>
  );
};

export default SearchComponent;
