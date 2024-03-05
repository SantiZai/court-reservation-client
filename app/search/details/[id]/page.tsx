"use client";

import { getClub } from "@/utils/data/getData";
import { Club } from "@/utils/data/models";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const [club, setClub] = useState<Club>();
  const params = useParams();

  useEffect(() => {
    params.id && getClub(params.id as string).then((club: Club) => setClub(club));
  }, [params.id]);

  return (
    <div>
      <section>{club && <h3>{club.name}</h3>}</section>
    </div>
  );
};

export default DetailsPage;
