import React from "react";
import ServicesWrapper from "../_components/ServicesWrapper";
import { allServices } from "../../../../data/data";

function Page({ params: { slug } }) {
  const currentIndex = allServices.findIndex((data) => data.slug === slug);

  const data = currentIndex !== -1 ? allServices[currentIndex] : allServices[0];
  const prevData = currentIndex > 0 ? allServices[currentIndex - 1] : undefined;
  const nextData =
    currentIndex < allServices.length - 1
      ? allServices[currentIndex + 1]
      : undefined;

  return (
    <ServicesWrapper
      serviceData={data}
      prevData={prevData}
      nextData={nextData}
    />
  );
}

export default Page;
