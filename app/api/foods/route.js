import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Food from "../../../models/food";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Food.create({ title, description });
  return NextResponse.json({ message: "Food Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const foods = await Food.find();
  return NextResponse.json({ foods });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Food.findByIdAndDelete(id);
  return NextResponse.json({ message: "Food Deleted" }, { status: 200 });
}
