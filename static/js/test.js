
    // // Save the element, value, and id of the filter that was changed
    // let selectedDate = d3.select("#datetime").property("value");
    // let selectedCity = d3.select("#city").property("value").toLowerCase();
    // let selectedState = d3.select("#state").property("value").toLowerCase();
    // let selectedCountry = d3.select("#country").property("value").toLowerCase();
    // let selectedShape = d3.select("#shape").property("value").toLowerCase();

    // let filteredCards = ufo.filter(function(){
    //     return ufo.date == selectedDate
    //         && ufo.city == selectedCity
    //         && ufo.state == selectedState
    //         && ufo.country == selectedCountry
    //         && ufo.shape == selectedShape;
    // });

    // ---------------**************************
    

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

function cityFilter() {
    // grab datetime from the filter
    let city = d3.select("#city").property("value").toLowerCase();
    let filteredData = tableData;

    // check for user-selected datetime in tableData
    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    }
    
    // rebuild table using filtered data
    buildTable(filteredData);
}   

// listen for click event
d3.selectAll("#filter-btn").on("click", cityFilter);

// build table when page loads
buildTable(tableData);