// from data.js
var tableData = data;

// select button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// define action on button "click" and form "submit"
button.on("click", findSightings);
form.on("submit", findSightings);


function findSightings() {

    d3.event.preventDefault()

    //clear table
    var tbody = d3.select("tbody");
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    tableData.forEach(function(sighting){
        if (sighting.datetime == inputDate){
            var row_data = Object.values(sighting);
            var tbody = d3.select("tbody");
            var row = tbody.append("tr");
            for (i = 0; i < row_data.length; i++){
                row.append("td").text(row_data[i]);
            };
        };
    });

};


