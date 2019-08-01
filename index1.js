// Get references to the tbody element, input field and button
$tbody = document.querySelector("tbody");
$dateInput = document.querySelector("#date");
$cityInput = document.querySelector("#city");
$stateInput = document.querySelector("#state");
$countryInput = document.querySelector("#country");
$shapeInput = document.querySelector("#shape");
$searchButton = document.querySelector("#search");

// Add event listener to the search button, call handleSearchClick
$searchButton.addEventListener("click", handleSearchClick);

// Set ufo data to data
filtered_data = data;

// renderTable renders the ufoData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
        for (i = 0; i < filtered_data.length; i++) {
        // Get current ufo info object and its fields
        info = filtered_data[i];
        fields = Object.keys(info);
        // Create a new row in the tbody
        $row = $tbody.insertRow(i);
            for (j = 0; j < fields.length; j++) {
            // For every field in info object, create new cell and set its inner
            // text to be the current value at the current info field
                field = fields[j];
                $cell = $row.insertCell(j);
                $cell.innerText = info[field];
        }
    }
}

function handleSearchClick() {
    filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filtered_data = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate.includes(filterDate);
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    filtered_data = filtered_data.filter(function (sighting) {
      var sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    filtered_data = filtered_data.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    filtered_data = filtered_data.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    filtered_data = filtered_data.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();

// Clear input fields
    filtered_data = data; 
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
};

// Render the table for the first time on page load
renderTable();