import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    //koneksi ke database
    await connectDB();

    //menerima data dari form
    const formData = await req.formData();

    let event;

    try {
      //mengubah data dari form menjadi object
      event = Object.fromEntries(formData.entries());
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid JSON data format" },
        { status: 400 }
      );
    }

    //simpan data ke database
    const createdEvent = await Event.create(event);

    return NextResponse.json(
      {
        message: "Event created succesfully",
        event: createdEvent,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 400 }
    );
  }
}
