// Define a constant for each form field
export const TABLECONSTANTS = {
  listOnPages: 20,
}

export const ADDCLIENT = {
  title: "Add Client",
  buttonText: "Submit",
  headers: ["Personal Details", "Car Details", "Product Details"],
  constantFields: ["Client Id", "Product Id"],
  personalDetails: [
    {
      name: "clientName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter client Name",
    },
    {
      name: "clientLocation",
      label: "Location",
      type: "text",
      placeholder: "Enter location",
    },
    {
      name: "clientTel",
      label: "Telephone",
      type: "text",
      placeholder: "Enter Tel No",
    },
    {
      name: "associate",
      label: "Associate",
      type: "select",
      options: ["Individual", "Company"],
    },
  ],
  carDetails: [
    {
      name: "carType",
      label: "Type",
      type: "select",
      options: [
        "Micro",
        "Sedan",
        "Hatchback",
        "Universal",
        "Liftback",
        "Sport",
        "SUV",
        "Pickup",
        "Van",
        "Bus",
      ],
    },
    {
      name: "carBrand",
      label: "Brand / Model",
      type: "text",
      placeholder: "Enter car brand",
    },
    {
      name: "carColor",
      label: "Color",
      type: "text",
      placeholder: "Enter car color",
    },
    {
      name: "plateNo",
      label: "Plate No",
      type: "text",
      placeholder: "Enter car plate No",
    },
    {
      name: "chasisNo",
      label: "Chasis No",
      type: "text",
      placeholder: "Enter chasis plate No",
    },
  ],
  productDetails: [
    {
      name: "simNo",
      label: "Sim No",
      type: "text",
      placeholder: "Enter sim No",
    },
    {
      name: "deviceNo",
      label: "Device No",
      type: "text",
      placeholder: "Enter device No",
    },
    {
      name: "purchaseType",
      label: "Purchase Type",
      type: "select",
      options: ["Rent", "Fully Purchased"],
    },
    {
      name: "package",
      label: "Package",
      type: "select",
      options: ["3 Months", "5 Months", "1 Year"],
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "Enter request date",
    },
    {
      name: "plateform",
      label: "Plateform",
      type: "select",
      options: ["Server 3", "Oversee", "Asika (5B)"],
    },
    {
      name: "technicalOfficer",
      label: "Tech Officer",
      type: "select",
      options: ["Kofi", "Joshua", "Eric"],
    },
  ],
}

export const CLIENT_OPTIONS = [
  {
    name: "companyName",
    label: "Company Name",
    type: "select",
    options: ["Bayport", "ADB", "Allison Lee", "GH Rents"],
  },
]

export const DASHBOARDTABLE = [
  "Product Id",
  "Client Name",
  "Client Tel",
  "Pay Mode",
  "Current Service",
  "Current Amt Paid",
  "Payment Date",
  "Expiry Date",
  "Status",
  "Action",
]
