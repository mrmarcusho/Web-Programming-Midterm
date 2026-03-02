// ===== contact.js — Form validation with thank you popup =====

(function() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    // Validation helper functions (Requirement 8b)
    function isNotEmpty(value) {
        return value.trim().length > 0;
    }

    function isValidEmail(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function isValidPhone(phone) {
        if (phone.trim() === '') return true; // phone is optional
        var pattern = /^[\d\s\-\(\)\+]{7,15}$/;
        return pattern.test(phone.trim());
    }

    function isSelected(selectElement) {
        return selectElement.value !== '';
    }

    function isRadioChecked(name) {
        var radios = document.getElementsByName(name);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) return true;
        }
        return false;
    }

    // Show or clear error on a form group
    function setError(fieldId, hasError) {
        var field = document.getElementById(fieldId);
        if (!field) return;
        var group = field.closest('.form-group');
        if (group) {
            if (hasError) {
                group.classList.add('has-error');
            } else {
                group.classList.remove('has-error');
            }
        }
    }

    function setRadioError(hasError) {
        var radios = document.getElementsByName('contactMethod');
        if (radios.length === 0) return;
        var group = radios[0].closest('.form-group');
        if (group) {
            if (hasError) {
                group.classList.add('has-error');
            } else {
                group.classList.remove('has-error');
            }
        }
    }

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var valid = true;

        // Validate name
        var nameVal = document.getElementById('name').value;
        if (!isNotEmpty(nameVal)) {
            setError('name', true);
            valid = false;
        } else {
            setError('name', false);
        }

        // Validate email
        var emailVal = document.getElementById('email').value;
        if (!isValidEmail(emailVal)) {
            setError('email', true);
            valid = false;
        } else {
            setError('email', false);
        }

        // Validate phone (optional but must be valid format if provided)
        var phoneVal = document.getElementById('phone').value;
        if (!isValidPhone(phoneVal)) {
            setError('phone', true);
            valid = false;
        } else {
            setError('phone', false);
        }

        // Validate subject
        var subjectEl = document.getElementById('subject');
        if (!isSelected(subjectEl)) {
            setError('subject', true);
            valid = false;
        } else {
            setError('subject', false);
        }

        // Validate message
        var messageVal = document.getElementById('message').value;
        if (!isNotEmpty(messageVal)) {
            setError('message', true);
            valid = false;
        } else {
            setError('message', false);
        }

        // Validate radio buttons
        if (!isRadioChecked('contactMethod')) {
            setRadioError(true);
            valid = false;
        } else {
            setRadioError(false);
        }

        // If valid, show thank you and reset form
        if (valid) {
            alert('Thank you for contacting Pizza Days! We will get back to you soon.');
            form.reset();
        }
    });
})();
