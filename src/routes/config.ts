import { UserRoles } from "../types/roles";

export const sideBarLinks = [
  {
    to: "/dashboard/employees",
    label: "Employees",
    roles: [UserRoles.Admin],
  },
  {
    to: "/dashboard/insights",
    label: "Insights",
    roles: [UserRoles.Admin],
  },
];
