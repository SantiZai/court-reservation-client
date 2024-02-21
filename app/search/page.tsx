"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderWeb from "@/components/HeaderWeb";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  const [location, setLocation] = useState<string>("");
  const [sport, setSport] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const searchParams = useSearchParams();

  useEffect(() => {
    setLocation(String(searchParams.get("location")).split("-").join(" "));
    setSport(searchParams.get("sport") as string);
    setDate(String(searchParams.get("date")).split(",").join(" de "));
    setHour(searchParams.get("hour") as string);
  }, [searchParams]);

  return (
    <main>
      <HeaderWeb>
        <section>web</section>
      </HeaderWeb>
      <HeaderMobile class="flex flex-col py-4 border-b-2">
        <section>
          <div className="w-full flex items-center gap-4 p-4">
            <Button>{"<"}</Button>
            <p>{location}</p>
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <p>{sport}</p>
            <p>{date}</p>
            <p>{hour}</p>
          </div>
        </section>
      </HeaderMobile>
    </main>
  );
};

export default SearchPage;
