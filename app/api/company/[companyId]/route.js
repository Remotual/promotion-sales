import companyController from "@/controller/companyController";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const companyService = new companyController();
    const companyData = await companyService.getCompanyByPK(params.companyId);
    return NextResponse.json({ companyData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const updateData = await req.json();
  try {
    const companyService = new companyController();
    const companyData = await companyService.updateCompany(
      params.companyId,
      updateData
    );
    return NextResponse.json({ companyData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
