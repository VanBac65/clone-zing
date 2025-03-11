import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import "./style.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  rows: { [key: string]: boolean | string | number }[];
  columns: { title: string; id: string }[];
};

export default function Table({ rows, columns }: Props) {
  return (
    <TableContainer component={Paper} className="table-container">
      <TableMui sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className="table-head">
          <TableRow>
            {columns.map((item) => {
              return (
                <TableCell className="table-cell">
                  <TableSortLabel>{item.title}</TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {rows.map((row, index) => (
            <TableRow
              className="table-rows"
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {columns.map((item) => {
                if (item.id === "action")
                  return (
                    <TableCell
                      className="table-cell action-table"
                      sx={{ textAlign: "start" }}
                    >
                      <EditIcon />
                      <DeleteIcon />
                    </TableCell>
                  );
                return (
                  <TableCell
                    className="table-cell"
                    sx={{ textAlign: "start" }}
                    align="right"
                  >
                    {row[item.id]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
}
