// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val)
        }
        )
    });
}

function handleClick() {
    // grab datetime from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // check for user-selected datetime in tableData
    if(date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    // rebuild table using filtered data
    buildTable(filteredData);

    // listen for click event
    d2.selectAll("#filter-btn").on("click", handleClick);

    // build table when page loads
    buildTable(tableData);
};   

