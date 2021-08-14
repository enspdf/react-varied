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
  const { headers, rows } = useTable({ columns: COLUMNS, data: mockData });

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
          {/* {mockData.map(({ dateOfBirth, favouriteFood, id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                {format(
                  parse(dateOfBirth, "yyyy-MM-dd", new Date()),
                  "do MMM yyyy"
                )}
              </td>
              <td>{favouriteFood}</td>
            </tr>
          ))} */}
          {rows.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, index) => (
                <td key={index}>{cell.renderedValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Root;
