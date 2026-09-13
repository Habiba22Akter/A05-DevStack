import { use, useState } from "react";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";
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
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
    toast.success(`${technology.name} added to stack!`);
  };


  const handleRemoveTechnology = (id: string) => {
    const remainingTechnologies =
      selectedTechnologies.filter(
        (technology) => technology.id !== id
      );

    setSelectedTechnologies(remainingTechnologies);

    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === id
    );

    if (removedTechnology) {
      toast.error(
        `${removedTechnology.name} removed from stack!`
      );
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed!");
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


      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px]">


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const isAdded = selectedTechnologies.some(
              (item) => item.id === technology.id
            );

            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddTechnology={handleAddTechnology}
                isAdded={isAdded}
              />
            );
          })}
        </div>


        <div className="self-start">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemoveTechnology={handleRemoveTechnology}
            handleRemoveAll={handleRemoveAll}
          />
        </div>

      </div>
    </section>
  );
};

export default Technologies;