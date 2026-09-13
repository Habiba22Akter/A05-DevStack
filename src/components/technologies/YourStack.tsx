import type { Technology } from "../../types/technology";

type YourStackProps = {
  selectedTechnologies: Technology[];
};

const YourStack = ({
  selectedTechnologies,
}: YourStackProps) => {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <h2 className="text-lg font-bold text-slate-900">
        Your Stack
      </h2>


      <p className="mt-1 text-sm text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technology Selected`}
      </p>

      {selectedTechnologies.length === 0 ? (

        <div className="mt-5 rounded-xl border border-dashed border-slate-300 py-8 text-center">

          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>

        </div>

      ) : (

        <div className="mt-5 flex flex-col gap-3">

          {selectedTechnologies.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-9 w-9 object-contain"
              />


              <div>

                <h3 className="text-sm font-semibold text-slate-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-slate-400">
                  {technology.category}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default YourStack;