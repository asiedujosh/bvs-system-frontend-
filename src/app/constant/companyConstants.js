"use client"

export const COMPANY_TITLE = "ADD COMPANY"

export const SUB_COMPANY_TITLE = "Company Details"

export const NAV_SUB_LINK = [
  {
    name: "Individual",
    path: "/",
    active: (currentPath) =>
      currentPath === `/dashboard/individual/add` ? true : false,
  },
  {
    name: "Company",
    path: "/",
    active: (currentPath) =>
      currentPath === `/dashboard/individual/add/company` ? true : false,
  },
]

export const ADD_COMPANY_LABEL = [
  {
    name: "companyName",
    label: "Name",
    type: "text",
    placeholder: "Enter your company name",
  },
  {
    name: "companyTel",
    label: "Tel",
    type: "text",
    placeholder: "Enter your telephone",
  },
  {
    name: "companyAddress",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    name: "companyEmail",
    label: "Email",
    type: "text",
    placeholder: "Enter your email",
  },
  {
    name: "relationOfficer",
    label: "Relation Officer",
    type: "text",
    placeholder: "Enter your relation officer",
  },
  {
    name: "officerPosition",
    label: "Officer Position",
    type: "text",
    placeholder: "Enter officer position",
  },
  {
    name: "officerTel",
    label: "Officer Tel",
    type: "text",
    placeholder: "Enter officer tel",
  },
]

export const COMPANY_TABLE_HEADER = ["Company Name", "Action"]

export const COMPANY_RECORDS_TABLE = [
  "Company Name",
  "No Of Products",
  "Action",
]

export const DUMMY_COMPANY_TABLE_DATA = [
  {
    id: 1,
    companyName: "Bayport",
  },
  {
    id: 2,
    companyName: "Forwin",
  },
  {
    id: 3,
    companyName: "Ghana Commercial Bank",
  },
]
