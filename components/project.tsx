"use client";

import React from "react";

import Project from "./projects";
import { useSectionInView } from "@/src/app/lib/hook";
import { projectsData } from "@/src/app/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My project
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
