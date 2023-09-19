const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
   toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active');
   });
});

// Developed By Mohammad Kiaei
