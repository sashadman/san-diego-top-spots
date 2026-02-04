$(document).ready(function () { // wait until the HTML is fully loaded


  // Load data.json and convert it into JS objects
  $.getJSON("data.json")

    // Runs after data.json is successfully loaded
    .done(function (spots) {

      // spots is an array
      spots.forEach(function (spot) {

        const name = spot.name;
        const description = spot.description;

        // Read values from the location array
        const lat = spot.location[0];
        const lng = spot.location[1];

        // Build Google Maps link
        const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;

        // Build one table row
        const row = `
          <tr>
            <td>${name}</td>
            <td>${description}</td>
            <td><a href="${mapLink}" target="_blank">Open map</a></td>
          </tr>
        `;

        // Add the row to the table body
        $("#top-spots").append(row);
      });
    })
    //Runs if data.json fails to load
    .fail(function(){
        console.error("Failed to load data.json");
    });  // Set the current year in the footer (runs every time)
  const currentYear = new Date().getFullYear();
  $("#year").text(currentYear);

});