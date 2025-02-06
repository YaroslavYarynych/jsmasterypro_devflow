import { NextResponse } from "next/server";

import tickets from "@/app/database";

export const GET = async () => NextResponse.json(tickets);

export const POST = async (request: Request) => {
  const ticket = await request.json();

  tickets.push({
    id: tickets.length + 1,
    ...ticket,
  });

  return NextResponse.json(tickets);
};
