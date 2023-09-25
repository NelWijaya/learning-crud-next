export default function () {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Name Food"
        className="border border-slate-900 px-8 py-2"
      />

      <input
        type="text"
        placeholder="Description Food"
        className="border border-slate-900 px-8 py-2"
      />

      <button className="bg-green-700 font-bold text-white py-3 px-6 ">
        Upodate Food
      </button>
    </form>
  );
}
