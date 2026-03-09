/* ==========================================================================
   Pizza Days - Contact Page JavaScript
   Handles: Form validation (jQuery), thank-you popup
   ========================================================================== */

$(document).ready(function() {

  // Form validation rules (associative array)
  var validationRules = {
    name: { required: true, minLength: 2, message: "Please enter your name (at least 2 characters)." },
    email: { required: true, pattern: "email", message: "Please enter a valid email address." },
    phone: { required: false, pattern: "phone", message: "Please enter a valid phone number." },
    subject: { required: true, message: "Please select a subject." },
    message: { required: true, minLength: 10, message: "Please enter a message (at least 10 characters)." }
  };

  // Contact form submission
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var isValid = validateContactForm();

    if (isValid) {
      showThankYouModal();
      this.reset();
      $(".form-group").removeClass("has-error");
    }
  });

  // Function: Validate the contact form
  function validateContactForm() {
    var valid = true;

    // Validate name
    var nameVal = $("#contact-name").val().trim();
    if (nameVal.length < validationRules.name.minLength) {
      showError("contact-name", validationRules.name.message);
      valid = false;
    } else {
      clearError("contact-name");
    }

    // Validate email
    var emailVal = $("#contact-email").val().trim();
    if (!validateEmail(emailVal)) {
      showError("contact-email", validationRules.email.message);
      valid = false;
    } else {
      clearError("contact-email");
    }

    // Validate phone (optional but must be valid format if provided)
    var phoneVal = $("#contact-phone").val().trim();
    if (phoneVal !== "" && !validatePhone(phoneVal)) {
      showError("contact-phone", validationRules.phone.message);
      valid = false;
    } else {
      clearError("contact-phone");
    }

    // Validate subject
    var subjectVal = $("#contact-subject").val();
    if (!subjectVal || subjectVal === "") {
      showError("contact-subject", validationRules.subject.message);
      valid = false;
    } else {
      clearError("contact-subject");
    }

    // Validate message
    var messageVal = $("#contact-message").val().trim();
    if (messageVal.length < validationRules.message.minLength) {
      showError("contact-message", validationRules.message.message);
      valid = false;
    } else {
      clearError("contact-message");
    }

    return valid;
  }

  // Function: Show field error
  function showError(fieldId, message) {
    var group = $("#" + fieldId).closest(".form-group");
    group.addClass("has-error");
    group.find(".error-msg").text(message).show();
  }

  // Function: Clear field error
  function clearError(fieldId) {
    var group = $("#" + fieldId).closest(".form-group");
    group.removeClass("has-error");
    group.find(".error-msg").hide();
  }

  // Function: Show thank-you modal
  function showThankYouModal() {
    $("#thank-you-modal").addClass("active");
  }

  // Clear errors on input
  $("input, select, textarea").on("input change", function() {
    $(this).closest(".form-group").removeClass("has-error");
    $(this).closest(".form-group").find(".error-msg").hide();
  });

});
