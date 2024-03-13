"use client";

import HeaderMobile from "@/components/HeaderMobile";
import HeaderWeb from "@/components/HeaderWeb";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface NewReservation {
  reservation: {
    date: string;
    hour: string;
  };
  userId: string;
  clubId: string;
  courtId: string;
}

const NewReservationPage = () => {
  const [info, setInfo] = useState<NewReservation>();

  const params = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    setInfo({
      reservation: {
        date: searchParams.get("date") as string,
        hour: searchParams.get("hour") as string,
      },
      userId: "ba5f5bf4-1384-4981-9860-641674cfc6d1",
      clubId: params.clubId as string,
      courtId: params.courtId as string,
    });
  }, [params]);

  return (
    <main>
        <HeaderWeb>
        <section>web</section>
      </HeaderWeb>
      <HeaderMobile>
        <section className="w-full flex items-center gap-4 p-4">logo</section>
      </HeaderMobile>
    </main>
  );
};

export default NewReservationPage;
