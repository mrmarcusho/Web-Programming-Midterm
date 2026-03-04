/* ==========================================================================
   Pizza Days - Main JavaScript
   Handles: Navigation, shared UI, utility functions
   ========================================================================== */

// ---- Associative Arrays (Object Literals) ----
var siteConfig = {
  siteName: "Pizza Days",
  tagline: "Handcrafted Pizza Since 2010",
  phone: "(503) 555-0142",
  email: "hello@pizzadays.com",
  deliveryFee: 3.99,
  freeDeliveryMin: 25.00
};

var businessHours = {
  monday: "11:00 AM - 10:00 PM",
  tuesday: "11:00 AM - 10:00 PM",
  wednesday: "11:00 AM - 10:00 PM",
  thursday: "11:00 AM - 10:00 PM",
  friday: "11:00 AM - 12:00 AM",
  saturday: "11:00 AM - 12:00 AM",
  sunday: "12:00 PM - 9:00 PM"
};

var socialLinks = {
  facebook: "https://facebook.com/pizzadays",
  instagram: "https://instagram.com/pizzadays",
  twitter: "https://twitter.com/pizzadays"
};

// ---- Homegrown Objects (Constructor Functions) ----
function MenuItem(name, price, category, description) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.description = description;
  this.formatPrice = function() {
    return "$" + this.price.toFixed(2);
  };
  this.getInfo = function() {
    return this.name + " (" + this.category + ") - " + this.formatPrice();
  };
}

function Customer(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.orders = [];
  this.addOrder = function(order) {
    this.orders.push(order);
  };
  this.getOrderCount = function() {
    return this.orders.length;
  };
}

function Review(author, rating, text, date) {
  this.author = author;
  this.rating = rating;
  this.text = text;
  this.date = date;
  this.getStars = function() {
    var stars = "";
    for (var i = 0; i < 5; i++) {
      stars += i < this.rating ? "\u2605" : "\u2606";
    }
    return stars;
  };
  this.getSummary = function() {
    return this.getStars() + " - " + this.author;
  };
}

// ---- Utility Functions ----
function formatCurrency(amount) {
  return "$" + parseFloat(amount).toFixed(2);
}

function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhone(phone) {
  var cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10 || cleaned.length === 11;
}

// ---- DOM Manipulation ----
$(document).ready(function() {

  // Mobile nav toggle
  $(".nav-toggle").on("click", function() {
    $(".main-nav ul").toggleClass("open");
    var icon = $(this).text() === "\u2630" ? "\u2715" : "\u2630";
    $(this).text(icon);
  });

  // Close mobile nav when link clicked
  $(".main-nav a").on("click", function() {
    $(".main-nav ul").removeClass("open");
    $(".nav-toggle").text("\u2630");
  });

  // Highlight current page in nav
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  $(".main-nav a").each(function() {
    var href = $(this).attr("href");
    if (href === currentPage) {
      $(this).addClass("active");
    }
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on("click", function(e) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: target.offset().top - 80 }, 500);
    }
  });

  // Modal close functionality
  $(".modal-overlay").on("click", function(e) {
    if ($(e.target).hasClass("modal-overlay")) {
      $(this).removeClass("active");
    }
  });

  $(".modal-close").on("click", function() {
    $(this).closest(".modal-overlay").removeClass("active");
  });

  // Build footer year
  $("#footer-year").text(new Date().getFullYear());

});
