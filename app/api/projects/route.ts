import { NextResponse } from "next/server";
import { getProjects } from "../../projects/lib/projects-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  return NextResponse.json(getProjects(type));
}
