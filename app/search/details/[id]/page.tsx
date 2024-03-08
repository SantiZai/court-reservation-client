"use client";

import HeaderMobile from "@/components/HeaderMobile";
import HeaderWeb from "@/components/HeaderWeb";
import { getClub } from "@/utils/data/getData";
import { Club, Court } from "@/utils/data/models";
import {
  formatDate,
  getDisponibility,
} from "@/utils/functions/manipulateHoursAndDates";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";

const DetailsPage = () => {
  const [club, setClub] = useState<Club>();
  const [date, setDate] = useState<Date>();
  const [disponibility, setDisponibility] = useState<string[][]>();
  const params = useParams();

  useEffect(() => {
    params.id &&
      getClub(params.id as string).then((club: Club) => setClub(club));
  }, [params.id]);

  useEffect(() => {
    /* TODO: every change on date, refresh available hours */
    club &&
      date &&
      setDisponibility(getDisponibility(club.courts, formatDate(date)));
  }, [date]);

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
            <fieldset className="w-full sm:w-min">
              <Popover>
                <PopoverTrigger
                  name="date"
                  asChild
                  className="hover:border-primary"
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal px-3 py-2 bg-primary text-white hover:bg-white hover:text-black",
                      !date && "text-gray-500"
                    )}
                  >
                    {date ? (
                      format(date, "eee d 'de' MMMM 'de' y", { locale: es })
                    ) : (
                      <div className="w-full flex justify-between gap-4">
                        <span>Selecciona una fecha</span>
                        {/* TODO: change for icon */}
                        <span>V</span>
                      </div>
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
            {club.courts.map((court: Court, index: number) => {
              return (
                <div key={court.id}>
                  <p>{court.name}</p>
                  <Carousel
                    opts={{
                      align: "start",
                      dragFree: true,
                    }}
                    className="w-full max-w-sm"
                  >
                    <CarouselContent className="mx-0">
                      {disponibility &&
                        disponibility[index].map((hour: string) => {
                          return (
                            <CarouselItem
                              key={hour}
                              className="basis-auto mx-2 rounded-lg bg-slate-300 px-3 py-1"
                            >
                              <Link
                                href={`../../new-reservation/${club.id}/${
                                  court.id
                                }?date=${date && formatDate(date)}&hour=${hour}`}
                              >
                                {hour}
                              </Link>
                            </CarouselItem>
                          );
                        })}
                    </CarouselContent>
                  </Carousel>
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
