const YourStack = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        No technologies selected yet.
      </p>

      <div className="mt-5 rounded-xl border border-dashed border-slate-300 px-6 py-8 text-center">
        <p className="text-sm text-slate-400">
          Your stack is empty.
        </p>
      </div>
    </div>
  );
};

export default YourStack;