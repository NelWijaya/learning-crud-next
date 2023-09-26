"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

interface RemoveBtnProps {
  id: string;
}

export default function RemoveBtn({ id }: RemoveBtnProps) {
  const router = useRouter();
  const removeFood = async () => {
    const comfirmed = confirm("Are you sure to remove this food?");

    if (comfirmed) {
      const res = await fetch(`http://localhost:3000/api/foods?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeFood} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}

// const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
//   const removeFood = async () => {
//     const comfirmed = confirm("Are you sure to remove this food?");

//     if (comfirmed) {
//       await fetch(`http://localhost:3000/api/foods?id=${id}`, {
//         method: "DELETE",
//       });
//     }
//   };
//   return (
//     <button onClick={removeFood} className="text-red-600">
//       <HiOutlineTrash size={24} />
//     </button>
//   );
// };

// export default RemoveBtn;
