import { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      editable: true,
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      editable: true,
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      renderCell: (value) => <>123</>,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (value) => {
        return (
          <Box>
            <button>Edit</button>
            <button>Delete</button>
          </Box>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const fetchData = useCallback(() => {}, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="user-management-wrapper">
      <h1>User Management</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default UserManagement;
