// lib/events.ts
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function getAllEventsFromDB() {
  await connectDB();
  return Event.find({}).lean();
}
