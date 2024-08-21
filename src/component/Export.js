import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const Export = ({ data }) => {
  const exportToExcel = (event) => {
    event.preventDefault();
    if (data) {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
      saveAs(blob, `${new Date().getMilliseconds()}.xlsx`);
    } else {
        alert("No Data to export")
    }
  };
  return (
    <button className="btn btn-outline-success" onClick={exportToExcel}>
      Export to Excel
    </button>
  );
};

export default Export;
