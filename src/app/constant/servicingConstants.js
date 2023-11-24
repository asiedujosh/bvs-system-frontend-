"use client"

export const ADDSERVICE = {
  title: "Add Service",
  buttonText: "Submit",
  fieldDetail1: [
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "Enter start date",
    },
    {
      name: "expireDate",
      label: "Expire Date",
      type: "date",
      placeholder: "Enter due date",
    },
    {
      name: "amtPaid",
      label: "Amount Paid",
      type: "number",
      placeholder: "Enter amount paid",
    },
  ],
  fieldDetail2: [
    {
      name: "serviceType",
      label: "Service Type",
      type: "select",
      options: ["Purchase", "Installation", "Roll Over", "Remove"],
    },
  ],
  field2Base: [
    {
      name: "supervisor",
      label: "Supervisor",
      type: "select",
      options: ["Purchase", "Installation", "Roll Over", "Others"],
    },
    {
      name: "techOfficer",
      label: "Technical Officer",
      type: "select",
      options: ["Purchase", "Installation", "Roll Over", "Others"],
    },
  ],
}

export const SERVICETABLE = ["Start Date", "Expiry Date", "Amt Paid"]
