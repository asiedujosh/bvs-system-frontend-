"use client"

export const ADDSERVICE = {
  title: "Add Service",
  buttonText: "Submit",
  fieldDetail1: [
    {
      name: "package",
      label: "Package",
      type: "select",
      options: ["3 Months", "5 Months", "1 Year"],
    },
    {
      name: "datePaid",
      label: "Date Paid",
      type: "date",
      placeholder: "Enter date paid",
    },
    {
      name: "amtPaid",
      label: "Amount Paid",
      type: "number",
      placeholder: "Enter amount paid",
    },
  ],
}

export const SERVICETABLE = ["Start Date", "Expiry Date", "Amt Paid", "Action"]
