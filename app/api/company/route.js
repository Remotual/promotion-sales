import companyController from "@/controller/companyController";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const company = new companyController();
    const allCompany = await company.getCompanyAllData();
    return NextResponse.json(
      { message: "Company added successfully", data: allCompany },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

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
