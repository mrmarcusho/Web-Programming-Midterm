// ===== menu.js — Loads menu from JSON, builds cards dynamically =====

// Homegrown object constructor (Requirement 8d)
function MenuItem(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
}

MenuItem.prototype.getFormattedPrice = function() {
    return '$' + this.price.toFixed(2);
};

MenuItem.prototype.createCard = function() {
    var card = document.createElement('div');
    card.className = 'menu-card';

    card.innerHTML =
        '<img src="' + this.image + '" alt="' + this.name + '">' +
        '<div class="menu-card-body">' +
            '<h3>' + this.name + '</h3>' +
            '<p>' + this.description + '</p>' +
            '<span class="price">' + this.getFormattedPrice() + '</span>' +
        '</div>';

    return card;
};


// Build menu page from JSON data
function buildMenu(menuData) {
    var container = document.getElementById('menu-container');
    if (!container) return;

    container.innerHTML = '';

    // Associative array / object for category display names (Requirement 8a)
    var categoryLabels = {
        'Pizzas': 'Our Pizzas',
        'Sides': 'Sides & Appetizers',
        'Drinks': 'Beverages',
        'Desserts': 'Desserts'
    };

    // Loop through each category in the JSON (object keys)
    var categories = Object.keys(menuData);

    for (var c = 0; c < categories.length; c++) {
        var categoryKey = categories[c];
        var items = menuData[categoryKey]; // Array of JS objects (Requirement 8f)

        // Create category section
        var section = document.createElement('div');
        section.className = 'category-section';

        var heading = document.createElement('h2');
        heading.textContent = categoryLabels[categoryKey] || categoryKey;
        section.appendChild(heading);

        var grid = document.createElement('div');
        grid.className = 'menu-grid';

        // Build cards from array of objects
        for (var i = 0; i < items.length; i++) {
            var item = new MenuItem(
                items[i].name,
                items[i].description,
                items[i].price,
                items[i].image
            );
            grid.appendChild(item.createCard()); // DOM manipulation (Requirement 8c)
        }

        section.appendChild(grid);
        container.appendChild(section);
    }
}


// Fetch menu data from external JSON file (Requirement 8e)
(function() {
    var container = document.getElementById('menu-container');
    if (!container) return;

    fetch('js/data/menu.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to load menu data');
            }
            return response.json();
        })
        .then(function(data) {
            buildMenu(data);
        })
        .catch(function(error) {
            container.innerHTML = '<p class="text-center">Unable to load menu. Please try again later.</p>';
        });
})();
