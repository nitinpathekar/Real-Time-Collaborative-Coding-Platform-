// 1. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Animated Scroll Effects (ScrollReveal)
  const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the element is in view
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Apply animation to sections
  document.querySelectorAll('.scroll-reveal').forEach((section) => {
    observer.observe(section);
  });
  
  // 3. Navbar Sticky Effect
  window.onscroll = function () {
    const navbar = document.querySelector("header");
    if (window.pageYOffset > 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
  
  // 4. Dynamic Portfolio Filtering
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      const items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // 5. Form Validation
  document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let name = document.querySelector('#name').value;
    let message = document.querySelector('#message').value;
  
    // Basic form validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      document.querySelector('#email-error').textContent = "Please enter a valid email.";
    } else {
      alert('Form submitted successfully');
      // Reset form or trigger success message
    }
  });
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  
  // 6. Interactive Portfolio Hover Effects
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = "scale(1.05)";
      item.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "none";
    });
  });
  
  // 7. Scroll to Top Button
  const scrollToTopButton = document.getElementById("scroll-to-top");
  window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };
  
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // 8. Modal Popup for Portfolio Projects
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      let modal = document.querySelector('#portfolio-modal');
      modal.style.display = 'block';
      modal.querySelector('.modal-content').innerHTML = item.querySelector('.details').innerHTML;
    });
  });
  
  document.querySelector('#portfolio-modal .close').addEventListener('click', () => {
    document.querySelector('#portfolio-modal').style.display = 'none';
  });
  
  // 9. Responsive Menu (Hamburger Menu)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // 10. Animations on Button Hover
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // 11. Image Lazy Loading
  const images = document.querySelectorAll('img[data-src]');
  const lazyLoad = () => {
    const windowHeight = window.innerHeight;
    const offset = 200; // Load images a bit before they enter the viewport
    images.forEach(image => {
      const rect = image.getBoundingClientRect();
      if (rect.top <= windowHeight + offset && rect.bottom >= -offset) {
        image.src = image.getAttribute('data-src');
        image.removeAttribute('data-src');
      }
    });
  };
  
  window.addEventListener('scroll', lazyLoad);
  lazyLoad(); // Call on page load to load images in view
  
  // 12. Dynamic Date and Time Display
  document.querySelector('#year').textContent = new Date().getFullYear();
  
  
  