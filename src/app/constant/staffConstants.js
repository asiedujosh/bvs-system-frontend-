"use client"

export const ADDSTAFF = {
  title: "Add Staff",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "personnel_id",
      label: "Personnel Id",
      type: "text",
      placeholder: "Enter personnel Id",
    },
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter full name",
    },
    {
      name: "contact",
      label: "Contact",
      type: "text",
      placeholder: "Enter tel number",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter location",
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
    },
    {
      name: "position",
      label: "Position",
      type: "select",
      options: ["Administrator", "Tech Officer", "Marketer", "Supervisor"],
    },
  ],
}

export const STAFFTABLE = [
  "Personnel Id",
  "Name",
  "Contact",
  "Position",
  "Action",
]
