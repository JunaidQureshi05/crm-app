import { UserRoles } from "../types/roles";

export const sideBarLinks = [
  {
    to: "/employees",
    label: "Employees",
    roles: [UserRoles.Admin],
  },
  {
    to: "/insights",
    label: "Insights",
    roles: [UserRoles.Admin],
  },
];
