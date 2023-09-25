import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import Food from "../../../../models/food";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Food.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Updated Food" }, { status: 200 });
}
