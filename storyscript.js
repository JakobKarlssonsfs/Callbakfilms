// JavaScript to manage visibility of textboxes
document.querySelectorAll('.image-container').forEach(container => {
    const textbox = container.querySelector('.textbox');
    const image = container.querySelector('.hover-image');
    const closeBtn = container.querySelector('.close-btn');
    
    image.addEventListener('mouseover', () => {
        // Hide all other visible textboxes
        document.querySelectorAll('.textbox.visible').forEach(box => {
            box.classList.remove('visible');
        });

        // Show the textbox for the current image
        textbox.classList.add('visible');
    });

         // When the "X" button is clicked, hide the text box
         closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the click event from propagating up
            textbox.classList.remove('visible');
        });
    });
