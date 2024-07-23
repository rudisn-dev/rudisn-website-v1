import React from "react";
import ProjectDetailsWrapper from "../_components/ProjectDetailsWrapper";
import { allProjects } from "../../../../data/data";

function Page({ params: { slug } }) {
  const currentIndex = allProjects.findIndex((data) => data.slug === slug);

  const data = currentIndex !== -1 ? allProjects[currentIndex] : allProjects[0];
  const prevData = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextData =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : undefined;

  return (
    <ProjectDetailsWrapper
      projectData={data}
      prevData={prevData}
      nextData={nextData}
    />
  );
}

export default Page;
