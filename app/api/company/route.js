import companyController from "@/controller/companyController";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  if (
    !body.companyId ||
    !body.companyName ||
    !body.serviceOptions ||
    !body.buckSavings
    ) {
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }
    

  try {
    const company = new companyController();
    const newCompany = await company.addNewCompay(body);
    return NextResponse.json(
      { message: "Company added successfully", data: newCompany },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
