import personal from "@/public/images/personal.svg";
import accounting from "@/public/images/accounting.svg";
import dataService from "@/public/images/data_service.svg";
import creativeSupport from "@/public/images/creative_support.svg";
import marketing from "@/public/images/marketing.svg";
import projectManagement from "@/public/images/project_management.svg";

import bookkeeper from "@/public/Job_Icons/Icons_Bookkeeper.svg";
import Icons_Community_Builder from "@/public/Job_Icons/Icons_Community_Builder.svg";
import Icons_Content_Manager from "@/public/Job_Icons/Icons_Content_Manager.svg";
import Icons_Copywriter from "@/public/Job_Icons/Icons_Copywriter.svg";

import Icons_Digital_Marketing_Specialist from "@/public/Job_Icons/Icons_Digital_Marketing_Specialist.svg";
import Icons_ECommerce_Marketplace_Manager from "@/public/Job_Icons/Icons_E-Commerce_Marketplace_Manager.svg";
import Icons_Growth_Marketing_Specialist from "@/public/Job_Icons/Icons_Growth_Marketing_Specialist.svg";
import Icons_Marketing_Analyst from "@/public/Job_Icons/Icons_Marketing_Analyst.svg";
import Icons_Marketing_Automation_Specialist from "@/public/Job_Icons/Icons_Marketing_Automation_Specialist.svg";
import Icons_Email_Marketing_Specialist from "@/public/Job_Icons/Icons_Email_Marketing_Specialist.svg";
import Icons_Product_Manager from "@/public/Job_Icons/Icons_Product_Manager.svg";
import Icons_Seo_Specialist from "@/public/Job_Icons/Icons_Seo_Specialist.svg";

import Icons_Head_Of_Marketing from "@/public/Job_Icons/Icons_Head_Of_Marketing.svg";
import Icons_Marketing_Manager from "@/public/Job_Icons/Icons_Marketing_Manager.svg";
import Icons_Account_Executive from "@/public/Job_Icons/Icons_Account_Executive.svg";
import Icons_Inbound_Sales_Representative from "@/public/Job_Icons/Icons_Inbound_Sales_Representative.svg";
import Icons_Outreach_Specialist from "@/public/Job_Icons/Icons_Outreach_Specialist.svg";
import Icons_Sales_Development_Representative from "@/public/Job_Icons/Icons_Sales_Development_Representative.svg";
import Icons_Sales_Manager from "@/public/Job_Icons/Icons_Sales_Manager.svg";
import Iconc_Business_development_representativ from "@/public/Job_Icons/Icons_Business Development Representative.svg";
import Icons_Customer_Operations_Assistant from "@/public/Job_Icons/Icons_Customer_Operations_Assistant.svg";
import Icons_Customer_Success_Manager from "@/public/Job_Icons/Icons_Customer_Success_Manager.svg";
import Icons_Customer_Support_Analyst from "@/public/Job_Icons/Icons_Customer_Support_Analyst.svg";
import Icons_Customer_Support_Representative from "@/public/Job_Icons/Icons_Customer_Support_Representative.svg";
import Icons_Head_Of_Customer_Success from "@/public/Job_Icons/Icons_Head_Of_Customer_Success.svg";
import Icons_Appointment_Setter from "@/public/Job_Icons/Icons_Appointment_Setter.svg";
import Icons_Business_Associate from "@/public/Job_Icons/Icons_Business_Associate.svg";
import Icons_Executive_Assistant from "@/public/Job_Icons/Icons_Executive_Assistant.svg";
import Icons_General_Manager from "@/public/Job_Icons/Icons_General_Manager.svg";

import Icons_Head_Of_Operations from "@/public/Job_Icons/Icons_Head_Of_Operations.svg";
import Icons_Operations_Analyst from "@/public/Job_Icons/Icons_Operations_Analyst.svg";
import Icons_Operations_Associate from "@/public/Job_Icons/Icons_Operations_Associate.svg";
import Icons_Procurement_Specialist from "@/public/Job_Icons/Icons_Procurement_Specialist.svg";
import Icons_It_Recruiter from "@/public/Job_Icons/Icons_It_Recruiter.svg";
import Icons_Back_End_Developer from "@/public/Job_Icons/Icons_Back-End_Developer.svg";
import Icons_Full_Stack_Developer from "@/public/Job_Icons/Icons_Full-Stack_Developer.svg";
import Icons_Front_End_Developer from "@/public/Job_Icons/Icons_Front-End_Developer.svg";
import Icons_Software_Engineer from "@/public/Job_Icons/Icons_Software_Engineer.svg";
import Icons_Software_Implementer from "@/public/Job_Icons/Icons_Software_Implementer.svg";
import Icons_Dev_Ops from "@/public/Job_Icons/Icons_Dev_Ops.svg";
import Icons_Business_Intelligence from "@/public/Job_Icons/Icons_Business Intelligence Analyst.svg";
import Icons_Data_Scientist from "@/public/Job_Icons/Icons_Data_Scientist.svg";
import Icons_Graphic_Designer from "@/public/Job_Icons/Icons_Graphic_Designer.svg";
import Icons_Ui_Ux_Designer from "@/public/Job_Icons/Icons_Ui_Ux_Designer.svg";
import Icons_Video_Editor from "@/public/Job_Icons/Icons_Video_Editor.svg";


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
          usSalary: 56.1,
          remotualSalary: 32.1,
          savings: 42.2,
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
          usSalary: 117.5,
          remotualSalary: 48,
          savings: 69.5,
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
        salary:[{
          name: "US Salary Remotual",
          usSalary: 78.1,
          remotualSalary:42.2,
          savings: 36.1,
        }]
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
  //  bucks saving started
  "bookkeeper": {
    text: "Bookkeeper",
    image: bookkeeper,
    tabValue: "subtab7",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 54.8,
          remotualSalary:42.2,
          savings: 12.8,
        }]
      },
    ],
  },
  "community-builder": {
    text: "Community Builder",
    image: Icons_Community_Builder,
    tabValue: "subtab8",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 84.9,
          remotualSalary:34.5,
          savings: 65.7,
        }]
      },
    ],
  },
  "content-manager": {
    text: "Content Manager",
    image: Icons_Content_Manager,
    tabValue: "subtab9",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 98.1,
          remotualSalary:34.5,
          savings: 68.1 ,
        }]
      },
    ],
  },
  "copywriter": {
    text: "Copywriter",
    image: Icons_Copywriter,
    tabValue: "subtab10",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 79.5,
          remotualSalary: 34.5,
          savings: 49.5,
        }]
      },
    ],
  },
  "digital-marketing-specialist": {
    text: "Digital Marketing Specialist",
    image: Icons_Digital_Marketing_Specialist,
    tabValue: "subtab11",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 81.8,
          remotualSalary: 48,
          savings: 27.8,
        }]
      },
    ],
  },
  "ecommerce-marketplace-manager": {
    text: "E-Commerce Marketplace Manager",
    image: Icons_ECommerce_Marketplace_Manager,
    tabValue: "subtab12",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 127.9,
          remotualSalary: 38.4,
          savings: 82.3,
        }]
      },
    ],
  },
  "growth-marketing-specialist": {
    text: "Growth Marketing Specialist",
    image: Icons_Growth_Marketing_Specialist,
    tabValue: "subtab13",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 114,
          remotualSalary: 48,
          savings: 72,
        }]
      },
    ],
  },
  "marketing-analyst": {
    text: "Marketing Analyst",
    image: Icons_Marketing_Analyst,
    tabValue: "subtab14",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 91.6,
          remotualSalary:38.4,
          savings: 53.2,
        }]
      },
    ],
  },
  "marketing-automation-specialist": {
    text: "Marketing Automation Specialist",
    image: Icons_Marketing_Automation_Specialist,
    tabValue: "subtab15",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 89.7,
          remotualSalary: 48,
          savings: 47.7,
        }]
      },
    ],
  },
  "email-marketing-specialist": {
    text: "Email Marketing Specialist",
    image: Icons_Email_Marketing_Specialist,
    tabValue: "subtab16",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 80.5,
          remotualSalary: 48,
          savings: 44.5,
        }]
      },
    ],
  },
  "product-manager": {
    text: "Product Manager",
    image: Icons_Product_Manager,
    tabValue: "subtab17",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 134,
          remotualSalary: 53.7,
          savings: 83.6,
        }]
      },
    ],
  },
  "seo-specialist": {
    text: "Seo Specialist",
    image: Icons_Seo_Specialist,
    tabValue: "subtab18",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 88.9,
          remotualSalary: 34.5,
          savings: 52.9,
        }]
      },
    ],
  },
  "head-of-marketing": {
    text: "Head of Marketing",
    image: Icons_Head_Of_Marketing,
    tabValue: "subtab19",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 150.8,
          remotualSalary: 48,
          savings: 90.8,
        }]
      },
    ],
  },

  "marketing-manager": {
    text: "Marketing Manager",
    image: Icons_Marketing_Manager,
    tabValue: "subtab20",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 115.3,
          remotualSalary: 48,
          savings: 55.3,
        }]
      },
    ],
  },
  "account-executive": {
    text: "Account Executive",
    image: Icons_Account_Executive,
    tabValue: "subtab21",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 112.6,
          remotualSalary: 38.4,
          savings: 70.6,
        }]
      },
    ],
  },
  "inbound-sales-marketing": {
    text: "Inbound Sales Representative",
    image: Icons_Inbound_Sales_Representative,
    tabValue: "subtab22",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 73.5,
          remotualSalary: 34.5,
          savings: 55.5,
        }]
      },
    ],
  },
  "outreach-specialist": {
    text: "Outreach Specialist",
    image: Icons_Outreach_Specialist,
    tabValue: "subtab23",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 64.5,
          remotualSalary: 34.5,
          savings: 46.5,
        }]
      },
    ],
  },
  "sales-development-representative": {
    text: "Sales Development Representative",
    image: Icons_Sales_Development_Representative,
    tabValue: "subtab24",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 88.8,
          remotualSalary: 38.4,
          savings: 46.8,
        }]
      },
    ],
  },
  
  "sales-manager": {
    text: "Sales Manager",
    image: Icons_Sales_Manager,
    tabValue: "subtab25",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 130.9,
          remotualSalary: 448,
          savings: 70.9,
        }]
      },
    ],
  },
  "business-development-representative": {
    text: "Business Development Representative",
    image: Iconc_Business_development_representativ,
    tabValue: "subtab26",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 90.1,
          remotualSalary: 38.4,
          savings: 48.1,
        }]
      },
    ],
  },
  "customer-operations-assistant": {
    text: "Customer Operations Assistant",
    image: Icons_Customer_Operations_Assistant,
    tabValue: "subtab27",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 45.1,
          remotualSalary: 34.5,
          savings: 27.1,
        }]
      },
    ],
  },
  "customer-success-manager": {
    text: "Customer Success Manager",
    image: Icons_Customer_Success_Manager,
    tabValue: "subtab28",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 100.6,
          remotualSalary: 38.4,
          savings: 58.6,
        }]
      },
    ],
  },
  "customer-support-analyst": {
    text: "Customer Support Analyst",
    image: Icons_Customer_Support_Analyst,
    tabValue: "subtab29",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 89.7,
          remotualSalary: 34.5,
          savings: 59.7,
        }]
      },
    ],
  },
  "customer-support-representative": {
    text: "Customer Support Representative",
    image: Icons_Customer_Support_Representative,
    tabValue: "subtab30",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 59.7,
          remotualSalary: 34.5,
          savings: 17.7,
        }]
      },
    ],
  },
  "head-of-customer-success": {
    text: "Head Of Customer Success",
    image: Icons_Head_Of_Customer_Success,
    tabValue: "subtab31",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 168.5,
          remotualSalary: 38.4,
          savings: 78.5,
        }]
      },
    ],
  },

  "appointment-setter": {
    text: "Appointment Setter",
    image: Icons_Appointment_Setter,
    tabValue: "subtab32",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 102.3,
          remotualSalary: 34.5,
          savings: 84.3,
        }]
      },
    ],
  },
  "business-associate": {
    text: "Business Associate",
    image: Icons_Business_Associate,
    tabValue: "subtab33",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 98,
          remotualSalary: 48,
          savings: 70.4,
        }]
      },
    ],
  },
  "executive-assistant": {
    text: "Executive Assistant",
    image: Icons_Executive_Assistant,
    tabValue: "subtab34",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 81.3,
          remotualSalary: 42.2,
          savings: 51.3,
        }]
      },
    ],
  },
  "general-manager": {
    text: "General Manager",
    image: Icons_General_Manager,
    tabValue: "subtab35",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 104.6,
          remotualSalary: 57.6,
          savings: 52.3,
        }]
      },
    ],
  },
  "head-of-operations": {
    text: "Head Of Operations",
    image: Icons_Head_Of_Operations,
    tabValue: "subtab36",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 155.2,
          remotualSalary: 57.6,
          savings: 107.2,
        }]
      },
    ],
  },
  "operations-analyst": {
    text: "Operations Analyst",
    image: Icons_Operations_Analyst,
    tabValue: "subtab37",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 96.2,
          remotualSalary: 42.2,
          savings: 56.2,
        }]
      },
    ],
  },
  "opeartions-associate": {
    text: "Operations Associate",
    image: Icons_Operations_Associate,
    tabValue: "subtab38",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 91.2,
          remotualSalary: 38.4,
          savings: 59.2,
        }]
      },
    ],
  },
  "procurement-specialist": {
    text: "Procurement Specialist",
    image: Icons_Procurement_Specialist,
    tabValue: "subtab39",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 89.9,
          remotualSalary: 34.5,
          savings: 65.9,
        }]
      },
    ],
  },
  
  "it-recruiter": {
    text: "It Recruiter",
    image: Icons_It_Recruiter,
    tabValue: "subtab40",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 98.8,
          remotualSalary: 57.6,
          savings: 62.8,
        }]
      },
    ],
  },
  "back-end-developer": {
    text: "Back-End Developer",
    image: Icons_Back_End_Developer,
    tabValue: "subtab41",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 165.1,
          remotualSalary: 76.8,
          savings: 87.1,
        }]
      },
    ],
  },
  "full-stack-developer": {
    text: "Full-Stack Developer",
    image: Icons_Full_Stack_Developer,
    tabValue: "subtab42",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 161.5,
          remotualSalary: 76.8,
          savings: 83.5,
        }]
      },
    ],
  },
  "front-end-developer": {
    text: "Front-End Developer",
    image: Icons_Front_End_Developer,
    tabValue: "subtab43",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 146.2,
          remotualSalary: 76.8,
          savings: 68.2,
        }]
      },
    ],
  },
  "software-engineer": {
    text: "Software Engineer",
    image: Icons_Software_Engineer,
    tabValue: "subtab44",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 160.2,
          remotualSalary: 57.6,
          savings: 105.2,
        }]
      },
    ],
  },
  "software-implementer": {
    text: "Software Implementer",
    image: Icons_Software_Implementer,
    tabValue: "subtab45",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 110,
          remotualSalary: 57.6,
          savings: 81.2,
        }]
      },
    ],
  },
  "dev-ops": {
    text: "Dev Ops",
    image: Icons_Dev_Ops,
    tabValue: "subtab46",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 165,
          remotualSalary: 57.6,
          savings: 105
        }]
      },
    ],
  },
  "business-intelligence-analyst": {
    text: "Business Intelligence Analyst",
    image: Icons_Business_Intelligence,
    tabValue: "subtab47",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 117,
          remotualSalary: 57.6,
          savings: 57.5,
        }]
      },
    ],
  },
  "data-scientist": {
    text: "Data Scientist",
    image: Icons_Data_Scientist,
    tabValue: "subtab48",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 189,
          remotualSalary: 76.8,
          savings: 129.6,
        }]
      },
    ],
  },
  "graphic-designer": {
    text: "Graphic Designer",
    image: Icons_Graphic_Designer,
    tabValue: "subtab49",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 78.4,
          remotualSalary: 48,
          savings: 42.4,
        }]
      },
    ],
  },
  "ui-ux-designer": {
    text: "Ui/Ux Designer",
    image: Icons_Ui_Ux_Designer,
    tabValue: "subtab50",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 118,
          remotualSalary: 48,
          savings: 46.3,
        }]
      },
    ],
  },
  "video-editor": {
    text: "Video Editor",
    image: Icons_Video_Editor,
    tabValue: "subtab51",
    value: [
      {
        salary:[{
          name: "US Salary Remotual",
          usSalary: 80,
          remotualSalary: 38.4,
          savings: 38,
        }]
      },
    ],
  },
};

export default dataServices;
