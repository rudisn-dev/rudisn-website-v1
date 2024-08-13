import React from "react";
import AllServices from "../(landingPage)/_components/AllServices";
import { defaultMetaData } from "../../../../data/data";

// Function to generate dynamic metadata for the main services page
export async function generateMetadata() {
  return {
    ...defaultMetaData,
    title: `${defaultMetaData.title} | All Services`,
  };
}

const ServiceDetailsPage = () => {
  return <AllServices />;
};

export default ServiceDetailsPage;
