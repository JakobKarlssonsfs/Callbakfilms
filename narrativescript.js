document.querySelector('.toggle-buttons').addEventListener('click', (event) => {
  const targetSection = event.target.getAttribute('data-target');
  
  if (targetSection) {
    // Hide all sections
    document.querySelectorAll('.gallery-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show the targeted section
    document.getElementById(targetSection).classList.add('active');
  }
});
