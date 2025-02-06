import { NextRequest, NextResponse } from "next/server";

import tickets from "@/app/database";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");

  if (!query) return NextResponse.json(tickets);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(query.toLowerCase().trim())
  );

  return NextResponse.json(filteredTickets);
};
