/* ==========================================================================
   Pizza Days - Menu Page JavaScript
   Loads menu items from JSON, builds cards, displays full menu
   ========================================================================== */

$(document).ready(function() {

  // Array of JS objects for featured items (builds page content)
  var featuredItems = [];

  // Inline menu data (also stored in js/data/menu.json)
  var menuData = {
    pizzas: [
      { name: "Classic Margherita", description: "San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil", price: 14.99, image: "images/pizza-margherita.jpg", category: "pizza", popular: true },
      { name: "Pepperoni Classico", description: "Tomato sauce, mozzarella, generous layers of premium pepperoni", price: 16.99, image: "images/pizza-pepperoni.jpg", category: "pizza", popular: true },
      { name: "The Meat Lover", description: "Italian sausage, pepperoni, bacon, ham, tomato sauce, mozzarella", price: 18.99, image: "images/pizza-margherita.jpg", category: "pizza", popular: false },
      { name: "Garden Veggie", description: "Bell peppers, mushrooms, red onion, black olives, tomatoes, mozzarella", price: 15.99, image: "images/pizza-margherita.jpg", category: "pizza", popular: false },
      { name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onion, cilantro, smoked gouda", price: 17.99, image: "images/pizza-bbq-chicken.jpg", category: "pizza", popular: true },
      { name: "Hawaiian", description: "Ham, pineapple, tomato sauce, mozzarella, a touch of jalape\u00f1o", price: 16.49, image: "images/pizza-margherita.jpg", category: "pizza", popular: false }
    ],
    sides: [
      { name: "Garlic Breadsticks", description: "Fresh-baked breadsticks with roasted garlic butter and parmesan", price: 6.99, category: "side" },
      { name: "Caesar Salad", description: "Crisp romaine, house-made croutons, parmesan, creamy Caesar dressing", price: 8.99, category: "side" },
      { name: "Mozzarella Sticks", description: "Hand-breaded mozzarella with marinara dipping sauce", price: 7.99, category: "side" },
      { name: "Buffalo Wings", description: "Crispy wings tossed in house buffalo sauce, served with ranch", price: 10.99, category: "side" }
    ],
    drinks: [
      { name: "Fountain Drinks", description: "Coca-Cola, Sprite, Dr Pepper, Lemonade", price: 2.49, category: "drink" },
      { name: "Italian Soda", description: "Sparkling water with your choice of fruit syrup and cream", price: 3.99, category: "drink" },
      { name: "Craft Root Beer", description: "Small-batch brewed root beer on tap", price: 3.49, category: "drink" }
    ]
  };

  // Try loading from JSON file first, fall back to inline data
  $.getJSON("js/data/menu.json", function(data) {
    renderMenu(data);
  }).fail(function() {
    renderMenu(menuData);
  });

  // Render the full menu from data
  function renderMenu(data) {
    buildMenuCards(data.pizzas, "#pizza-grid");
    buildMenuCards(data.sides, "#sides-grid");
    buildMenuCards(data.drinks, "#drinks-grid");
    addFeaturedBadges(featuredItems);
  }

  // Function: Build menu list items from data array
  function buildMenuCards(items, containerSelector) {
    var container = $(containerSelector);
    container.empty();

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var li = $("<li>").addClass("menu-item").attr("data-name", item.name);

      var info = $("<div>").addClass("menu-item-info");
      info.append($("<h3>").text(item.name));
      info.append($("<p>").text(item.description));
      li.append(info);

      li.append($("<span>").addClass("menu-item-price").text(formatCurrency(item.price)));

      container.append(li);
    }
  }

  // Function: Add badges to featured items
  function addFeaturedBadges(featured) {
    for (var i = 0; i < featured.length; i++) {
      var item = featured[i];
      var card = $(".card[data-name='" + item.name + "'] .card-body");
      if (card.length) {
        var badge = $("<span>")
          .css({
            display: "inline-block",
            background: "#b91c1c",
            color: "#fff",
            padding: "0.2rem 0.6rem",
            borderRadius: "12px",
            fontSize: "0.75rem",
            fontWeight: "600",
            marginTop: "0.4rem",
            marginRight: "0.3rem"
          })
          .text(item.badge);
        card.append(badge);
      }
    }
  }

});
