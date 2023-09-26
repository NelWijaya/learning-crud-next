"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title or description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/foods", {
        method: "POST",
        headers: {
          "Content-type": "applicaiton/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a food");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Name Food"
        className="border border-slate-900 px-8 py-2"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Description Food"
        className="border border-slate-900 px-8 py-2"
      />

      <button
        type="submit"
        className="bg-green-700 font-bold text-white py-3 px-6 "
      >
        Add Food
      </button>
    </form>
  );
}
