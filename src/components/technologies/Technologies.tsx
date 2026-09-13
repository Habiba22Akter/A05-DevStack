import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../../types/technology";

type TechnologiesProps = {
  technologiesPromise: Promise<Technology[]>;
};

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {

  
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const handleAddTechnology = (technology: Technology) => {

    const isExist = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (isExist) {
      alert("Technology already added!");
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1568px] px-6 pb-24"
    >

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-950">
          Explore the{" "}
          <span className="brand-text">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAddTechnology={handleAddTechnology}
            />
          ))}

        </div>

        <YourStack
          selectedTechnologies={selectedTechnologies}
        />

      </div>

    </section>
  );
};

export default Technologies;