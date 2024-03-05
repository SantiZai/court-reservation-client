"use client";

import HeaderMobile from "@/components/HeaderMobile";
import HeaderWeb from "@/components/HeaderWeb";
import { getClub } from "@/utils/data/getData";
import { Club, Court } from "@/utils/data/models";
import { getDisponibility } from "@/utils/functions/manipulateHours";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const [club, setClub] = useState<Club>();
  const params = useParams();

  useEffect(() => {
    params.id &&
      getClub(params.id as string).then((club: Club) => setClub(club));
  }, [params.id]);

  return (
    <main>
      <HeaderWeb>
        <section>web</section>
      </HeaderWeb>
      <HeaderMobile class="w-full pt-4 border-b-2">
        <section className="w-full flex items-center gap-4 p-4">logo</section>
      </HeaderMobile>
      {club && (
        <section className="w-full bg-slate-200">
          <article className="w-full p-4 aspect-video">photo</article>
          <article className="w-full p-4 bg-white rounded-t-3xl">
            <h3>{club.name}</h3>
            <h4>{club.location}</h4>
            {club.courts.map((court: Court) => {
              return (
                <div key={court.id}>
                  <p>{court.name}</p>
                  <ul className="flex gap-4 overflow-hidden">
                    {getDisponibility(court).map((hour: string) => {
                      return (
                        <li key={hour} className="text-sm py-1 px-2 rounded-lg bg-slate-300">
                          {hour}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </article>
        </section>
      )}
    </main>
  );
};

export default DetailsPage;
