import React from "react";
import { DataVector } from "../types";

interface Props {
  vectors: DataVector[];
  addSelectedField: (selectedField: string) => void;
}

const Table = ({ vectors, addSelectedField }: Props) => {
  const fields = vectors.map((vector) => vector.key);
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field) => (
            <th onClick={(e) => addSelectedField(e.currentTarget.innerText)}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {vectors.map((vector) => (
          <tr>
            {vector.values.map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
