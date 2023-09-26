"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Food = {
  id: string;
  title: string;
  description: string;
};

export default function EditFoodForm({ id, title, description }: Food) {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/foods/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update food");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Name Food"
        className="border border-slate-900 px-8 py-2"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Description Food"
        className="border border-slate-900 px-8 py-2"
      />

      <button
        type="submit"
        className="bg-green-700 font-bold text-white py-3 px-6 "
      >
        Update Food
      </button>
    </form>
  );
}
