import { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import Table from "components/Table";

export type TUserManagement = {
  name: string;
  email: string;
  role: string;
  status: string;
};

const mockData = [
  {
    name: "Beverlie Krabbe",
    email: "bkrabbe1d@home.pl",
    role: "editor",
    status: "active",
  },
  {
    name: "Beverlie Krabbe",
    email: "bkrabbe1d@home.pl",
    role: "editor",
    status: "active",
  },
  {
    name: "Beverlie Krabbe",
    email: "bkrabbe1d@home.pl",
    role: "editor",
    status: "active",
  },
];

const UserManagement = () => {
  const [data, setData] = useState<TUserManagement[]>(mockData);

  const COLUMN = [
    {
      title: "USER",
      id: "name",
    },
    {
      title: "Email",
      id: "email",
    },
    {
      title: "Role",
      id: "role",
    },
    {
      title: "Status",
      id: "status",
    },
    {
      title: "Action",
      id: "action",
    },
  ];

  const fetchData = useCallback(() => {}, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="user-management-wrapper">
      <h1>User Management</h1>
      <Table columns={COLUMN} rows={data} />
    </div>
  );
};

export default UserManagement;
