import { NextResponse } from "next/server";

import tickets from "@/app/database";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const ticket = tickets.find((ticket) => ticket.id === +id) || null;

  return NextResponse.json(ticket);
};

export const PUT = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const { name, status, type } = await request.json();

  const ticket = tickets.find((ticket) => ticket.id === +id) || null;

  if (!ticket)
    return NextResponse.json(new Error("Ticket not found"), { status: 404 });

  const updatedTicket = {
    ...ticket,
  };

  if (name) updatedTicket.name = name;
  if (status) updatedTicket.status = status;
  if (type) updatedTicket.type = type;

  return NextResponse.json(updatedTicket);
};

export const DELETE = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const ticketIndex = tickets.findIndex((ticket) => ticket.id === +id);

  if (ticketIndex === -1)
    return NextResponse.json(new Error("Ticket not found"), { status: 404 });

  const updatedTickets = tickets.filter((ticket) => ticket.id !== +id);

  return NextResponse.json(updatedTickets);
};
