import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Table from "./component/Table";

function App() {
  const [excelData, setExcelData] = React.useState(null);

  const uploadExcelData = (data) => {
    setExcelData(data);
  };

  return (
    <>
      <div className="App">
        <Navbar excelData={excelData} uploadExcelData={uploadExcelData} />

        {excelData && <Table data={excelData} />}

      </div>
    </>
  );
}

export default App;
