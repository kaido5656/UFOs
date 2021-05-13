// import the data from data.js
const tableData = data;

//reference the html table using d3
var tbody = d3.select("tbody")

function buildTable(data) {
    //firest clear any existing data
    tbody.html("");

    //then loop through each object in the data
    // and append a row and cells for each value in row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add
        //each value as atabe cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to se if a date was entered and filter the date using that date

    if(date){
        //apply filter to the table data to only keep the rows where datetime value matchesthe filter value

        filteredData = filteredData.filter(row=> row.datetime === date);
    }
    //rebuild the table using the filtered data, if no dat entered filtered data will default to original tabledata
    buildTable(filteredData)
}
//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
//bulid the table when the page loads
buildTable(tableData);