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

