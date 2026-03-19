// Lemonade Bloom — SOP Resource Links
// All documents uploaded to CDN and mapped to their course modules

export interface SOPResource {
  title: string;
  filename: string;
  url: string;
  description: string;
  moduleId: string;
}

export const sopResources: SOPResource[] = [
  {
    title: "Course Workbook",
    filename: "CourseWorkbook.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/CourseWorkbook_f5815d20.docx",
    description: "Complete course workbook with all exercises and reference material",
    moduleId: "welcome",
  },
  {
    title: "Adding New Item in Walmart",
    filename: "AddingNewIteminWalmart.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/AddingNewIteminWalmart_d242da45.docx",
    description: "Step-by-step SOP for listing a new product on Walmart Marketplace",
    moduleId: "product-upload",
  },
  {
    title: "Product Upload SOP",
    filename: "ProductUpload.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/ProductUpload_f1b48b89.docx",
    description: "Full product upload workflow including images, pricing, and attributes",
    moduleId: "product-upload",
  },
  {
    title: "Setting Up Shipping Templates",
    filename: "SettingUpShippingTemplates.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/SettingUpShippingTemplates_13c50497.docx",
    description: "How to configure shipping templates in Walmart Seller Center",
    moduleId: "store-setup",
  },
  {
    title: "Adding Custom Package Sizes",
    filename: "AddingCustomPackageSizes.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/AddingCustomPackageSizes_2b7d3978.docx",
    description: "SOP for adding custom package dimensions for accurate shipping rates",
    moduleId: "store-setup",
  },
  {
    title: "Creating Hours of Operation",
    filename: "CreatingHoursofOperation.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/CreatingHoursofOperation_3cd703fa.docx",
    description: "Set your store's hours of operation in Walmart Seller Center",
    moduleId: "store-setup",
  },
  {
    title: "New Order Processing",
    filename: "NewOrderProcessingExp.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/NewOrderProcessingExp_98d56a03.docx",
    description: "Complete SOP for processing new orders from start to ship",
    moduleId: "fulfillment",
  },
  {
    title: "Creating Labels",
    filename: "CreatingLabels.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/CreatingLabels_01dd05e7.docx",
    description: "How to create and print shipping labels for Walmart orders",
    moduleId: "fulfillment",
  },
  {
    title: "Scheduling USPS Pickups",
    filename: "SchedulingUSPSPickups.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/SchedulingUSPSPickups_98dcf10f.docx",
    description: "Step-by-step guide to scheduling free USPS package pickups",
    moduleId: "fulfillment",
  },
  {
    title: "Ordering USPS Supplies",
    filename: "OrderingUSPSSupplies.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/OrderingUSPSSupplies_56988476.docx",
    description: "How to order free USPS shipping supplies (boxes, envelopes, tape)",
    moduleId: "fulfillment",
  },
  {
    title: "Creating Message Templates for Customer Service",
    filename: "CreatingMessageTemplatesforCustomerService.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/CreatingMessageTemplatesforCustomerService_813f779c.docx",
    description: "Pre-written customer service message templates for common scenarios",
    moduleId: "returns",
  },
  {
    title: "Processing Refund and Initiating Returns",
    filename: "ProcessingRefundandInitiatingReturns.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/ProcessingRefundandInitiatingReturns_2399c472.docx",
    description: "SOP for processing customer refunds and initiating return requests",
    moduleId: "returns",
  },
  {
    title: "Processing Return Dispute",
    filename: "ProcessingReturnDispute.docx",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/ProcessingReturnDispute_02d40c1a.docx",
    description: "How to dispute a return claim and protect your seller metrics",
    moduleId: "returns",
  },
];

// Helper: get all SOPs for a given module
export function getSopsForModule(moduleId: string): SOPResource[] {
  return sopResources.filter(s => s.moduleId === moduleId);
}
