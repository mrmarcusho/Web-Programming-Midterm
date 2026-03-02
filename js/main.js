// ===== main.js — Shared functionality: slideshow, mobile nav, back-to-top =====

// ---- Mobile Navigation Toggle ----
(function() {
    var hamburger = document.querySelector('.hamburger');
    var navList = document.querySelector('.main-nav ul');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('open');
        });

        // Close menu when a link is clicked
        var navLinks = navList.querySelectorAll('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                navList.classList.remove('open');
            });
        }
    }
})();


// ---- Image Slideshow ----
(function() {
    var slides = document.querySelectorAll('.hero-slideshow .slide');
    var prevBtn = document.querySelector('.slide-prev');
    var nextBtn = document.querySelector('.slide-next');

    if (slides.length === 0) return;

    var currentIndex = 0;
    var autoInterval = null;

    function showSlide(index) {
        // Wrap around
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slides[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoRotate() {
        autoInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoRotate() {
        clearInterval(autoInterval);
        startAutoRotate();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoRotate();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoRotate();
        });
    }

    // Start auto-rotation
    startAutoRotate();
})();


// ---- Back to Top Button ----
(function() {
    var backToTopBtn = document.querySelector('.back-to-top');

    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
