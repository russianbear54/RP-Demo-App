import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectForms } from "../../store/slices/formsSlice";

type Applicant = {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
};

const columnHelper = createColumnHelper<Applicant>();

const ApplicantsTable: React.FC = () => {
  const [sorting, setSorting] = useState([]);
  const data = useSelector(selectForms);

  const columns = useMemo(
    () => [
      columnHelper.accessor("firstName", {
        cell: (info) => info.getValue(),
        header: () => <span>First Name</span>,
      }),
      columnHelper.accessor("lastName", {
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
      }),
      columnHelper.accessor("age", {
        header: () => "Age",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: () => <span>Department</span>,
        cell: (info) => info.renderValue(),
        // footer: info => info.column.id
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table style={{ color: "white" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 20)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  );
};

export default ApplicantsTable;
