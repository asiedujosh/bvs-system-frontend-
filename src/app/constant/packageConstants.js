"use client"

export const PACKAGE_TITLE = {
  title: "ADD PACKAGE",
  btnText: "Submit",
}

export const SUB_PACKAGE_TITLE = "Package Details"

export const PACKAGE_TABLE_HEADER = ["Name", "Price", "Details", "Action"]

export const DUMMY_PACKAGE_TABLE_DATA = [
  {
    packageName: "Standard",
    price: 30,
    details: "Check vehicle every week",
  },
  {
    packageName: "Limited",
    price: 50,
    details: "Check vehicle every 3 days",
  },
  {
    packageName: "Advance",
    price: 80,
    details: "Check vehicle every day",
  },
]

export const ADD_PACKAGE_LABEL = [
  {
    name: "packageName",
    label: "Package",
    type: "text",
    placeholder: "Enter your package name",
  },
  {
    name: "packagePrice",
    label: "Price",
    type: "text",
    placeholder: "Enter price",
  },
  {
    name: "packageMonth",
    label: "Month",
    type: "number",
    placeholder: "Enter month",
  },
  {
    name: "packageDetails",
    label: "Details",
    type: "text",
    placeholder: "Enter details",
  },
]
