// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Keep track of all filters
// var filters = {};

function updateFilters() {
    // Save the element, value, and id of the filter that was changed
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value").toLowerCase();
    let state = d3.select("#state").property("value").toLowerCase();
    let country = d3.select("#country").property("value").toLowerCase();
    let shape = d3.select("#shape").property("value").toLowerCase();
    let filteredData = tableData;

    // check for user-selected filters in tableData
    if(date) {filteredData = filteredData.filter(row => row.datetime === date);} 
    if(city) {filteredData = filteredData.filter(row => row.city === city);} 
    if(state) {filteredData=filteredData.filter(row => row.state === state);} 
    if(country) {filteredData = filteredData.filter(row => row.country === country);} 
    if(shape) {filteredData = filteredData.filter(row => row.shape === shape);} 

    // Call function to apply all filters and rebuild the table
    // filterTable(filteredData);

    // rebuild table using filtered data
    buildTable(filteredData);
}   
function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that matches the filter values
    // if date && city && state && country && shape ==
    // 

  
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }

// listen for click event
d3.selectAll("#filter-btn").on("click", updateFilters);

// build table when page loads
buildTable(tableData);







