/* ==========================================================================
   Pizza Days - Specials Page JavaScript
   Handles: Weekly specials display, countdown timer
   ========================================================================== */

$(document).ready(function() {

  // Array of JS objects — builds specials page content
  var weeklySpecials = [
    {
      day: "Monday",
      title: "Margherita Monday",
      deal: "Buy one Margherita, get a second half off",
      originalPrice: 14.99,
      salePrice: 11.24,
      active: true
    },
    {
      day: "Tuesday",
      title: "Two-for-Tuesday",
      deal: "Two medium pizzas for $22.99",
      originalPrice: 33.98,
      salePrice: 22.99,
      active: true
    },
    {
      day: "Wednesday",
      title: "Wing Wednesday",
      deal: "Half-price wings with any pizza order",
      originalPrice: 10.99,
      salePrice: 5.50,
      active: true
    },
    {
      day: "Thursday",
      title: "Thirsty Thursday",
      deal: "Free fountain drink with any order over $15",
      originalPrice: 2.49,
      salePrice: 0.00,
      active: true
    },
    {
      day: "Friday",
      title: "Family Friday",
      deal: "Large pizza + breadsticks + 2L soda for $24.99",
      originalPrice: 31.47,
      salePrice: 24.99,
      active: true
    },
    {
      day: "Weekend",
      title: "Weekend Feast",
      deal: "15% off all catering orders placed for the weekend",
      originalPrice: null,
      salePrice: null,
      active: true
    }
  ];

  // Function: Build specials cards
  function buildSpecialsCards() {
    var container = $("#specials-container");
    container.empty();

    for (var i = 0; i < weeklySpecials.length; i++) {
      var special = weeklySpecials[i];
      var card = $("<div>").addClass("card");

      var body = $("<div>").addClass("card-body");
      body.append($("<h3>").text(special.title));
      body.append($("<p>").text(special.deal));

      if (special.originalPrice && special.salePrice !== null) {
        var priceHtml = "<span style='text-decoration:line-through;color:#999;margin-right:0.5rem;'>" +
          formatCurrency(special.originalPrice) + "</span>" +
          "<span class='card-price'>" + formatCurrency(special.salePrice) + "</span>";
        body.append($("<div>").addClass("mt-1").html(priceHtml));
      }

      card.append(body);
      container.append(card);
    }
  }

  // Function: Update countdown to next special day
  function updateCountdown() {
    var now = new Date();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = dayNames[now.getDay()];
    $("#current-day").text("Today is " + today + " \u2014 check today's deal!");

    // Countdown to midnight (next day's deal)
    var midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    var diff = midnight - now;

    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var timeStr = hours + "h " + minutes + "m " + seconds + "s";
    $("#countdown-timer").text("Next deal in: " + timeStr);
  }

  buildSpecialsCards();
  updateCountdown();
  setInterval(updateCountdown, 1000);

});
