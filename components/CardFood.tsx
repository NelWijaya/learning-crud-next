import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getFoods = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/foods", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch foods");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading foods: ", error);
  }
};

type Food = {
  _id: string;
  title: string;
  description: string;
};

export default async function CardFood() {
  const { foods } = await getFoods();
  return (
    <>
      {foods.map((food: Food) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
          <div>
            <h3 className="text-bold text-3xl">{food.title}</h3>
            <p>{food.description}</p>
          </div>
          <div className="flex gap-2  items-start">
            <RemoveBtn />
            <Link href={`/editFood/${food._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
