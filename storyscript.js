document.querySelectorAll('.image-container').forEach(container => {
    const textbox = container.querySelector('.textbox');
    const image = container.querySelector('.hover-image');

    image.addEventListener('mouseover', () => {
        textbox.classList.add('visible');
    });

    // Clicking the textbox will hide it again
    textbox.addEventListener('click', () => {
        textbox.classList.remove('visible');
    });
});
