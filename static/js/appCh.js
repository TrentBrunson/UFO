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

function updateFilters() {
    // Save the element, value, and id of the filter that was changed
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value").toLowerCase();
    let state = d3.select("#state").property("value").toLowerCase();
    let country = d3.select("#country").property("value").toLowerCase();
    let shape = d3.select("#shape").property("value").toLowerCase();
    let filteredData = tableData;

    // check for user-selected filters in tableData
    if(date){filteredData = filteredData.filter(row => row.datetime === date);} 
    if(city){filteredData = filteredData.filter(row => row.city === city);} 
    if(state){filteredData=filteredData.filter(row => row.state === state);} 
    if(country){filteredData = filteredData.filter(row => row.country === country);} 
    if(shape){filteredData = filteredData.filter(row => row.shape === shape);} 

    // rebuild table using filtered data
    buildTable(filteredData);
}  
// listen for click event
d3.selectAll("#filter-btn").on("click", updateFilters);

// build table when page loads
buildTable(tableData);







