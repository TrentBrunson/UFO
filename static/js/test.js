
    // Save the element, value, and id of the filter that was changed
    let selectedDate = d3.select("#datetime").property("value");
    let selectedCity = d3.select("#city").property("value").toLowerCase();
    let selectedState = d3.select("#state").property("value").toLowerCase();
    let selectedCountry = d3.select("#country").property("value").toLowerCase();
    let selectedShape = d3.select("#shape").property("value").toLowerCase();

    let filteredCards = ufo.filter(function(){
        return ufo.date == selectedDate
            && ufo.city == selectedCity
            && ufo.state == selectedState
            && ufo.country == selectedCountry
            && ufo.shape == selectedShape;
    });

    
