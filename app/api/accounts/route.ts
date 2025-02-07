import { NextResponse } from "next/server";

import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";

export const GET = async () => {
  try {
    await dbConnect();

    const accounts = await Account.find();

    const response = {
      data: accounts,
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

    const validatedData = AccountSchema.parse(body);

    const existingAccount = await Account.findOne({
      provider: validatedData.provider,
      providerAccountId: validatedData.providerAccountId,
    });

    if (existingAccount)
      throw new ForbiddenError(
        "An account with the same provider already exists"
      );

    const newAccount = await Account.create(validatedData);

    return NextResponse.json(
      {
        success: true,
        data: newAccount,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    handleError(e, "api") as APIErrorResponse;
  }
};
