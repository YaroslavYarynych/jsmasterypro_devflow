import { NextResponse } from "next/server";

import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";

export const GET = async () => {
  try {
    await dbConnect();

    const users = await User.find();

    const response = {
      data: users,
      success: true,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
};

export const POST = async (request: Request) => {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = UserSchema.safeParse(body);

    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    const { email, name } = validatedData.data;

    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error("User already exists");

    const existingUsername = await User.findOne({ name });

    if (existingUsername) throw new Error("Username already exists");

    const newUser = await User.create(validatedData.data);

    return NextResponse.json(
      {
        success: true,
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    handleError(e, "api") as APIErrorResponse;
  }
};
