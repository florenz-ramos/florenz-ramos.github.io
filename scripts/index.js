// Select the hamburger icon and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add a click event to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the navigation
    navLinks.classList.toggle('active');
});

// Optional: Add a simple console log for debugging
console.log('Hamburger script is running correctly.');
