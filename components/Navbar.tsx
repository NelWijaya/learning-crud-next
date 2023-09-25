import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        CRUD
      </Link>
      <Link className="bg-slate-100 p-2" href={"/addFood"}>
        Add Food
      </Link>
    </nav>
  );
}
