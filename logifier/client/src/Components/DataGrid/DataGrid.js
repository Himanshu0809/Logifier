import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
var jsonData = require("./mockData.json");

const initialData = jsonData[1].data.map((data) => {
    return Object.values(data);
  }),
  // const initialData = [
  //     ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000'],
  //     ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000'],
  //     ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000'],
  //     ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000'],
  //     ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000'],
  //     ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, '$94,000'],
  //     ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000'],
  //     ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000'],
  //     ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000'],
  //     ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000'],
  //     ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000'],
  //     ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000'],
  //     ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000'],
  //     ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000'],
  //     ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000'],
  //     ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000'],
  //     ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000'],
  //     ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000'],
  //     ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000'],
  //     ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000'],
  //     ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000'],
  //     ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000'],
  //     ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000'],
  //     ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000'],
  //     ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000'],
  //     ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000'],
  //     ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000'],
  //     ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000'],
  //     ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000'],
  //     ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000']
  //   ],
  initialColumns = jsonData[1].metadata.tableColumns;

function DataGrid() {
  const [data, setData] = useState(initialData);
  const [columns, setColumns] = useState(initialColumns);
  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    print: true,
    rowsPerPage: 10,
    page: 1,
  };
  return (
    <MUIDataTable
      title="Logified Data"
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default DataGrid;
