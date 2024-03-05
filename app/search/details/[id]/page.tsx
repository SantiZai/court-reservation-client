"use client"

import { useParams } from "next/navigation";
import { useEffect } from "react";

const DetailsPage = () => {
  const params = useParams();

  useEffect(() => {
    
  }, [params.id])

  return (
    <div>
      <section>details page</section>
    </div>
  );
};

export default DetailsPage;
