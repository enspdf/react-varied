import React from "react";
import { format, parse } from "date-fns";

import useTable from "#root/hooks/useTable";

import mockData from "./mockData";

const COLUMNS = [
  {
    accessor: "id",
    label: "ID",
  },
  {
    accessor: "name",
    label: "Name",
  },
  {
    accessor: ({ dateOfBirth }) =>
      format(parse(dateOfBirth, "yyyy-MM-dd", new Date()), "do MMM yyyy"),
    label: "Date of Birth",
  },
  {
    accessor: "favouriteFood",
    label: "Favourite Food",
  },
];

import "#root/styles.scss";

const Root = () => {
  const {
    headers,
    pagination: { pageNumber, nextPage, previousPage, totalPages },
    rows,
  } = useTable({
    columns: COLUMNS,
    data: mockData,
    pagination: { pageSize: 2 },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map(({ label }, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, index) => (
                <td key={index}>{cell.renderedValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={previousPage}>&lt;</button>
        <span>
          Page {pageNumber} of {totalPages}
        </span>
        <button onClick={nextPage}>&gt;</button>
      </div>
    </div>
  );
};

export default Root;
