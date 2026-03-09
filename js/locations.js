/* ==========================================================================
   Pizza Days - Locations JavaScript
   Loads location data from JSON, builds location cards
   ========================================================================== */

$(document).ready(function() {

  // Inline fallback data (also stored in js/data/locations.json)
  var locationsData = [
    { name: "Medford / Hillside", address: "364 Boston Ave, Medford, MA 02155", phone: "(781) 396-7800", hours: "Mon-Sun: 11am-3am", image: "images/location1.jpg" },
    { name: "Carmichael Hall", address: "200 Packard Ave, Medford, MA 02155", phone: "(781) 396-7800", hours: "Mon-Sun: 11am-3am", image: "images/location2.jpg" },
    { name: "Dewick-MacPhie Hall", address: "25 Latin Way, Medford, MA 02155", phone: "(781) 396-7800", hours: "Mon-Sun: 11am-3am", image: "images/location3.jpg" },
    { name: "South Hall", address: "105 College Ave, Medford, MA 02155", phone: "(781) 396-7800", hours: "Mon-Sun: 11am-3am", image: "images/location4.jpg" }
  ];

  // Load locations from external JSON file, fall back to inline data
  $.getJSON("js/data/locations.json", function(data) {
    buildLocationCards(data.locations);
  }).fail(function() {
    buildLocationCards(locationsData);
  });

  // Function: Build location cards from data
  function buildLocationCards(locations) {
    var container = $("#locations-container");
    container.empty();

    for (var i = 0; i < locations.length; i++) {
      var loc = locations[i];
      var card = $("<div>").addClass("location-card");

      card.append($("<h3>").text("Pizza Days \u2014 " + loc.name));
      card.append($("<p>").html("<strong>Address:</strong> " + loc.address));
      card.append($("<p>").html("<strong>Phone:</strong> <a href='tel:" + loc.phone.replace(/\D/g, "") + "'>" + loc.phone + "</a>"));
      card.append($("<p>").html("<strong>Hours:</strong> " + loc.hours));

      container.append(card);
    }
  }

});
