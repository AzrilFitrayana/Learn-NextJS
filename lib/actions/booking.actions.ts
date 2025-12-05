"use server";

import Booking from "@/database/booking.model";
import connectDB from "../mongodb";

interface ICreateBooking {
  eventId: string;
  slug: string;
  email: string;
}

export const createBooking = async ({
  eventId,
  slug,
  email,
}: ICreateBooking) => {
  try {
    await connectDB();

    await Booking.create({ eventId, email, slug });

    return { success: true };
  } catch (error) {
    console.error("create booking failed", error);
    return { success: false };
  }
};
