
// JavaScript to toggle the visibility of the text box and close it with "X"
document.querySelectorAll('.image-container').forEach(container => {
    const textbox = container.querySelector('.textbox');
    const image = container.querySelector('.hover-image');
    const closeBtn = container.querySelector('.close-btn');

    // When hovering over the image, show the text box
    image.addEventListener('mouseover', () => {
        textbox.classList.add('visible');
    });

    // When the "X" button is clicked, hide the text box
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the click event from propagating up
        textbox.classList.remove('visible');
    });
});

