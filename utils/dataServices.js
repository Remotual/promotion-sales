import personal from "@/public/images/personal.svg";
import accounting from "@/public/images/accounting.svg";
import dataService from "@/public/images/data_service.svg";
import creativeSupport from "@/public/images/creative_support.svg";
import marketing from "@/public/images/marketing.svg";
import projectManagement from "@/public/images/project_management.svg";

const dataServices = {
  "administrative-support": {
    text: "Administrative Support",
    image: personal,
    tabValue: "subtab1",
    value: [
      {
        illustartion: personal,
        content: [
          "Inbox Management/Inbox Zero.",
          "Calendar Management.",
          "Travel Management.",
          "Prepare reports and Presentation.",
          // "Safe-keeping of Company documents.",
          // "Arrange data and Information for your business.",
        ],
        salary: [{
          name: "US Salary Remotual",
          usSalary: 78.1,
          remotualSalary: 42.2,
          savings: 36.1,
        }]
      },
    ],
  },
  "project-management": {
    text: "Project Management",
    image: projectManagement,
    tabValue: "subtab2",
    value: [
      {
        illustartion: projectManagement,
        content: [
          "Plan and Develop the Project Idea.",
          "Create and Lead Your Dream Team.",
          "Monitor Project Progress and Set Deadlines.",
          "Solve Issues That Arise.",
          // "Ensure Stakeholder Satisfaction."
        ],
        salary:[{
          name: "US Salary Remotual",
          usSalary: 62.4,
          remotualSalary:27.6,
          savings: 34.8,
        }]
      },
    ],
  },
  "accounting-&-financial-support": {
    text: "Accounting & Financial Support",
    image: accounting,
    tabValue: "subtab3",
    value: [
      {
        illustartion: accounting,
        content: [
          "Payroll support.",
          "Reimbursement/Invoices assistance.",
          "Accounts Payable.",
          "Preparing Financial Reports."
        ],
      },
    ],
  },
  "marketing-&-sales-support": {
    text: "Marketing & Sales Support",
    image: marketing,
    tabValue: "subtab4",
    value: [
      {
        illustartion: marketing,
        content: [
          "SEO Support/Analytics.",
          "Social Media Optimization.",
          "Effective Lead Generation and Proposals.",
          "Create/Propose Marketing Materials and Campaigns.",
          // "Customer Success Management",
          // "Market research.",
        ],
      },
    ],
  },
  "data-entry-&-management": {
    text: "Data Entry & Management",
    image: dataService,
    tabValue: "subtab5",
    value: [
      {
        illustartion: dataService,
        content: [
          "Generate/Analyze reports.",
          "Verify data through source documents.",
          "Data-base management.",
          "Organizing employee/customer files",
          // "Automation Support.",
        ],
      },
    ],
  },
  "website-support": {
    text: "Webite Support",
    image: creativeSupport,
    tabValue: "subtab6",
    value: [
      {
        illustartion: creativeSupport,
        content: [
          "Design and develop website features.",
          "Directing or performing website updates.",
          "PTesting and evaluating new technologies.",
          "Review/Optimize website accuracy and functionality."
        ],
      },
    ],
  },
};

export default dataServices;
