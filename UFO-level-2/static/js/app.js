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

    var inputElement1 = d3.select("#datetime");
    var inputDate = inputElement1.property("value");

    var inputElement2 = d3.select("#city");
    var inputCity = inputElement2.property("value");
    
    var inputElement3 = d3.select("#state");
    var inputState = inputElement3.property("value");

    var inputElement4 = d3.select("#country");
    var inputCountry= inputElement4.property("value");

    var inputElement5 = d3.select("#shape");
    var inputShape= inputElement5.property("value");

    tableData.forEach(function(sighting){
        if (sighting.datetime == inputDate &&
            sighting.city == inputCity &&
            sighting.state == inputState &&
            sighting.country == inputCountry &&
            sighting.shape == inputShape){
            var row_data = Object.values(sighting);
            var tbody = d3.select("tbody");
            var row = tbody.append("tr");
            for (i = 0; i < row_data.length; i++){
                row.append("td").text(row_data[i]);
            };
        };
    });

};


