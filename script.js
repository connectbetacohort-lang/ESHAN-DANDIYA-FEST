      // Intersection Observer for scroll animations (enhanced)
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    // Optional: remove class to re-trigger animation on scroll up
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        sections.forEach(section => {
            observer.observe(section);
        });