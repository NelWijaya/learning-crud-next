import EditFoodForm from "@/components/EditFoodForm";

const getFoodById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/foods/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return new Error("Failed to fetch food");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

interface EditFoodProps {
  params: {
    id: string;
  };
}

type Food = {
  food: {
    title: string;
    description: string;
  };
};

export default async function EditFood({ params }: EditFoodProps) {
  const { id } = params;
  const { food }: Food = await getFoodById(id);
  const { title, description } = food;

  return <EditFoodForm id={id} title={title} description={description} />;
}
