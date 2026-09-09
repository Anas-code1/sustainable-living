// Vanilla Interactive Controller
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close others
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // Contact Form Interactivity
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formStatus.innerHTML = "Thanks — we'll be in touch! You can also reach us directly at <a href='mailto:mahmadmhaleem@gmail.com' style='text-decoration:underline; font-weight:700; color:inherit;'>mahmadmhaleem@gmail.com</a> or <a href='tel:+923330866754' style='text-decoration:underline; font-weight:700; color:inherit;'>+92 333 0866754</a>.";
        formStatus.style.display = 'block';
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Auto-dismiss message after 8 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 8000);
      }, 500);
    });
  }
});
