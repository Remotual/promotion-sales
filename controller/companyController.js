import prismadb from "@/lib/prisma";

export default class companyController {
  async getCompanyByPK(companyId) {
    const data = await prismadb.company.findUnique({
      where: {
        companyId,
      },
    });
    return data;
  }
async getCompanyAllData() {
    const data = await prismadb.company.findMany({
      orderBy: {
        companyName: 'asc'
      }
    });

    return data;
  }
  async addNewCompay(companyDetails) {
    // const data = await prismadb.company.findUnique({
    //   where: {
    //     companyId,
    //   }
    // });
    const dbEntry = await prismadb.company.create({
      data: {
        companyId: companyDetails.companyId,
        companyName: companyDetails.companyName,
        servicesTags: companyDetails.serviceOptions,
        buckSavingsTags: companyDetails.buckSavings,
      },
    });
    return dbEntry;
  }
  async updateCompany(companyId, companyDetails) {
    const dbEntry = await prismadb.company.update({
      where: {
        companyId,
      },
      data: {
        companyName: companyDetails.companyName,
        servicesTags: companyDetails.serviceOptions,
        buckSavingsTags: companyDetails.buckSavings,
      },
    });
    return dbEntry;
  }
}
