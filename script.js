// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && closeMenu && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  }

  // Hero Slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  let currentSlideIndex = 0;

  function showSlide(index) {
    // Hide all slides
    heroSlides.forEach(slide => {
      slide.classList.remove('slide-active');
    });

    // Remove active class from all dots
    heroDots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show the current slide and activate the corresponding dot
    heroSlides[index].classList.add('slide-active');
    heroDots[index].classList.add('active');

    currentSlideIndex = index;
  }

  // Auto slideshow
  let slideInterval = setInterval(() => {
    let nextSlide = (currentSlideIndex + 1) % heroSlides.length;
    showSlide(nextSlide);
  }, 5000);

  // Click event for dots
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      
      // Restart the interval
      slideInterval = setInterval(() => {
        let nextSlide = (currentSlideIndex + 1) % heroSlides.length;
        showSlide(nextSlide);
      }, 5000);
    });
  });

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonialPrev = document.querySelector('.testimonial-prev');
  const testimonialNext = document.querySelector('.testimonial-next');
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialSlides.forEach(slide => {
      slide.classList.remove('slide-active');
    });

    // Remove active class from all dots
    testimonialDots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show the current testimonial and activate the corresponding dot
    testimonialSlides[index].classList.add('slide-active');
    testimonialDots[index].classList.add('active');

    currentTestimonialIndex = index;
  }

  // Next testimonial
  if (testimonialNext) {
    testimonialNext.addEventListener('click', () => {
      let nextIndex = (currentTestimonialIndex + 1) % testimonialSlides.length;
      showTestimonial(nextIndex);
    });
  }

  // Previous testimonial
  if (testimonialPrev) {
    testimonialPrev.addEventListener('click', () => {
      let prevIndex = (currentTestimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
      showTestimonial(prevIndex);
    });
  }

  // Click event for testimonial dots
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });
});
