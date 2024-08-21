import React from "react";
import * as XLSX from "xlsx";
import { useRef } from "react";

const Import = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      props.uploadExcelData(sheetData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <button className="btn btn-outline-success mx-2" onClick={handleClick}>
        Import
      </button>
      <input
        type="file"
        onChange={handleFileUpload}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Import;
