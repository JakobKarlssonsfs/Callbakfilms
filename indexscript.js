// Select all titles
const titles = document.querySelectorAll('.title');

// Add scroll event listener
window.addEventListener('scroll', () => {
    titles.forEach((title, index) => {
        const section = title.parentElement; // Get the parent section
        const sectionRect = section.getBoundingClientRect(); // Section position relative to viewport
        const sectionHeight = section.offsetHeight; // Height of the section
        const windowHeight = window.innerHeight; // Height of the viewport

        // Check if section is in the viewport
        if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
            // Calculate progress: 0 when section center aligns with viewport center
            const sectionCenter = sectionRect.top + sectionHeight / 2;
            const viewportCenter = windowHeight / 2;
            const progress = (viewportCenter - sectionCenter) / (windowHeight + sectionHeight);

            // Determine direction based on index (even: left-to-right, odd: right-to-left)
            const direction = index % 2 === 0 ? 1 : -1;

            // Move horizontally: adjust translateX to align better with viewport center
            const translateX = direction * progress * (window.innerWidth + title.offsetWidth);
            title.style.transform = `translateX(${translateX}px)`;
        }
        document.documentElement.style.scrollBehavior = 'smooth';
    });
});
