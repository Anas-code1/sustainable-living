// Vanilla Interactive Controller
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking internal nav links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
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
        
        // Close other open accordions
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const btn = other.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', (!isActive).toString());
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
        formStatus.innerHTML = "Thanks — we'll be in touch! You can also reach Zainab Raza directly at <a href='mailto:zainab.raza91@gmail.com' style='text-decoration:underline; font-weight:700; color:inherit;'>zainab.raza91@gmail.com</a> or <a href='tel:+923125894172' style='text-decoration:underline; font-weight:700; color:inherit;'>+92 312 5894172</a>.";
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
