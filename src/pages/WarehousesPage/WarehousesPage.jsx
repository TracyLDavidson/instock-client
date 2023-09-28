import react, { useState } from "react";
import { Table } from "../../components/Table/Table";
export default function Warehouse() {
  const [sortBy, setSortBy] = useState("");

  const tableHeaders = [
    { key: "warehouse", label: "warehouse", sortable: true },
    { key: "address", label: "address", sortable: true },
    { key: "contact_name", label: "contact name", sortable: true },
    {
      key: "contact_information",
      label: "contact information",
      sortable: true,
    },
    { key: "actions", label: "actions", sortable: false },
  ];

  const tableRows = [
    {
      warehouse: "Manhattan",
      address: "503 Broadway New York, USA",
      contact_name: "Parmin Aujla",
      contact_information: "+1 (629) 555-0129 paujla@instock.com",
    },
    {
      warehouse: () => <p>Washington</p>,
      address: () => <p>33 Pearl Street SW, Washington, USA</p>,
      contact_name: () => <p>Graeme Lyon</p>,
      contact_information: () => <p>+1 (647) 504-0911 glyon@instock.com</p>,
    },
  ];

  // ActionsComponent should be a separate ticket, sized to 2-3
  const MockActionsComponent = () => {
    return <button>click</button>;
  };

  return (
    <>
      <Table
        headers={tableHeaders}
        rows={tableRows}
        actionsComponent={MockActionsComponent}
        onTableSort={setSortBy}
        sortBy={sortBy}
      />
    </>
  );
}
