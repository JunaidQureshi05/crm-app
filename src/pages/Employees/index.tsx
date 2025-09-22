import Table from "../../components/Table";
import withPermission from "../../auth/HOC/withPermission";
import { BadgeVariant, ButtonVariant } from "../../design/types";
import Button from "../../design/components/Button";
import Badge from "../../design/components/Badge";

export const employeeData = Array.from({ length: 100 }, (_, i) => {
  const names = [
    "John Doe",
    "Jane Smith",
    "Mark Johnson",
    "Emily Davis",
    "Michael Brown",
    "Sarah Wilson",
    "David Miller",
    "Linda Taylor",
    "James Anderson",
    "Laura Thomas",
    "Robert Jackson",
    "Patricia White",
    "William Harris",
    "Barbara Martin",
    "Joseph Thompson",
    "Jennifer Garcia",
    "Charles Martinez",
    "Mary Robinson",
    "Daniel Clark",
    "Elizabeth Rodriguez",
  ];
  const roles = ["Frontend", "Backend", "Designer", "QA", "Manager", "DevOps"];
  const depts = ["Engineering", "Design", "QA", "Operations", "Product"];
  const status = ["Active", "Inactive"];

  const name = names[Math.floor(Math.random() * names.length)];
  const role = roles[Math.floor(Math.random() * roles.length)];
  const dept = depts[Math.floor(Math.random() * depts.length)];
  const email = `${name?.toLowerCase().replace(" ", ".")}@example.com`;
  const stat = status[Math.floor(Math.random() * status.length)];

  return {
    id: i + 1,
    name,
    role,
    dept,
    email,
    status: stat,
  };
});

export const employeeColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "dept", label: "Department" },
  { key: "email", label: "Email" },
  {
    key: "status",
    label: "Status",
    render: (val) => (
      <Badge
        variant={val === "Active" ? BadgeVariant.success : BadgeVariant.danger}
        label={val}
      />
    ),
  },
];

const EmployeesPage = () => {
  return (
    <div>
      <h1>List Of Employees</h1>

      <Table columns={employeeColumns} data={employeeData} />
    </div>
  );
};

export default withPermission(EmployeesPage, ["master", "admin"]);
