import type { Technology } from "../../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  handleAddTechnology: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  handleAddTechnology,
  isAdded,
}: TechnologyCardProps) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-500">
          {badge}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h2>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
        {description}
      </p>


      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">

        <span className="rounded bg-slate-100 px-2 py-1 text-slate-500">
          {category}
        </span>

        <span className="text-slate-500">
          {difficulty}
        </span>

        <span className="font-medium text-slate-700">
          ⭐ {rating}
        </span>

      </div>


      <button
        onClick={() => handleAddTechnology(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-3 text-sm font-medium text-white ${
          isAdded
            ? "cursor-not-allowed bg-slate-400"
            : "cursor-pointer bg-slate-950"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;