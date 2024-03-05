"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderWeb from "@/components/HeaderWeb";
import { Button } from "@/components/ui/button";
import { getFilteredClubs } from "@/utils/data/getData";
import { Club } from "@/utils/data/models";
import Link from "next/link";

const SearchPage = () => {
  const [location, setLocation] = useState<string>("");
  const [sport, setSport] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const [filteredClubs, setFilteredClubs] = useState<Club[]>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setLocation(String(searchParams.get("location")).split("-").join(" "));
    setSport(searchParams.get("sport") as any);
    setDate(searchParams.get("date") as string);
    setHour(searchParams.get("hour") as string);

    getFilteredClubs({
      location: searchParams.get("location") as string,
      sport: searchParams.get("sport") as string,
    }).then((res: Club[]) => setFilteredClubs(res));
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
            {/* TODO: fix and display date with month */}
            <p>{date}</p>
            <p>{hour}</p>
          </div>
        </section>
      </HeaderMobile>
      <section className="mt-4">
        {filteredClubs &&
          filteredClubs.map((club: Club) => {
            return (
              <article
                key={club.id}
                className="w-[90%] h-auto mx-auto p-4 rounded-lg cursor-pointer bg-slate-200 hover:bg-slate-300 transition-all"
              >
                <Link href={`search/details/${club.id}`}>
                  <p>{club.name}</p>
                  <p>{club.location}</p>
                </Link>
              </article>
            );
          })}
      </section>
    </main>
  );
};

export default SearchPage;
