import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";

type TechnologiesProps = {
  technologiesPromise: Promise<Technology[]>;
};

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {

  const technologies = use(technologiesPromise);

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-0"
    >

      <div className="mb-10">

        <h1 className="text-3xl font-bold text-slate-950">
          Explore the{" "}
          <span className="brand-gradient">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}

      </div>

    </section>
  );
};

export default Technologies;