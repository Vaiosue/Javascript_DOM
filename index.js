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

// Set ufoData to data
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
    // Format user search input by eliminating whitespace and turning input into lowercase
        filterDate = $dateInput.value.trim();
        filterCity = $cityInput.value.trim().toLowerCase();
        filterState = $stateInput.value.trim().toLowerCase();
        filterCountry = $countryInput.value.trim().toLowerCase();
        filterShape = $shapeInput.value.trim().toLowerCase();
    // Set ufoData to array of ufo sightings to match the filter
    filtered_data = dataSet.filter(function(filtered_sighting) {
            searchDate = filtered_sighting.datetime;
            searchCity = filtered_sighting.toLowerCase();
            searchState = filtered_sighting.toLowerCase();
            searchCountry = filtered_sighting.toLowerCase();
            searchShape = filtered_sighting.toLowerCase();
        // If statements to match search criteria with filtered criteria
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    renderTable();

    // Clear input fields
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

// Render the table for the first time on page load
renderTable();