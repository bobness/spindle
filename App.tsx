import React, { useEffect, useState } from "react";

import Table from "./components/Table";
import PivotTable from "./components/PivotTable";

import useRawData from "./hooks/useRawData";

export default function App() {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const addSelectedField = (selectedField: string) => {
    if (!selectedFields.includes(selectedField)) {
      setSelectedFields(selectedFields.concat(selectedField));
    }
  };
  const [groupedFields, setGroupedFields] = useState<string[]>([]);
  const [aggregateFields, setAggregateFields] = useState<string[]>([]);

  const addAggregateFields = (...fieldNames: string[]) => {
    const newFields = fieldNames.filter(
      (fieldName) => !aggregateFields.includes(fieldName)
    );
    setAggregateFields(aggregateFields.concat(newFields));
  };
  useEffect(() => {
    // TODO: send to server and get updated data
  }, [aggregateFields]);

  const addGroupFields = (...fieldNames: string[]) => {
    const newFields = fieldNames.filter(
      (fieldName) => !groupedFields.includes(fieldName)
    );
    setGroupedFields(groupedFields.concat(newFields));
  };
  useEffect(() => {
    // TODO: send to server and get updated data
  }, [groupedFields]);

  const rawData = useRawData();

  return (
    <>
      {selectedFields.length > 0 && (
        <>
          <button onClick={() => {}} style={{}}>
            Aggregate
          </button>
          <button onClick={() => {}} style={{}}>
            Group
          </button>
        </>
      )}
      <Table vectors={rawData} addSelectedField={addSelectedField} />
      <PivotTable
        groupedFields={groupedFields}
        aggregateFields={addAggregateFields}
      />
    </>
  );
}
