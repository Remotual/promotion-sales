import EditCompanyInfo from "@/components/EditCompanyInfo/EditCompanyInfo";
import companyController from "@/controller/companyController";

export default async function page({ params: { companyName } }) {
  const controller = new companyController();
  const companyInfo = await controller.getCompanyByPK(companyName);
  return (
    <div>
      <EditCompanyInfo info={companyInfo} />
    </div>
  );
}
