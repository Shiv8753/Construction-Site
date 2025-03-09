// Mobile menu functionality
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('active');
  }
});

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  // Activate first tab by default
  if (tabLinks.length > 0 && tabPanes.length > 0) {
    tabLinks[0].classList.add('active');
    tabPanes[0].classList.add('active');
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all tabs
      tabLinks.forEach(tab => tab.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      const targetTab = document.querySelector(this.dataset.tab);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });
});
