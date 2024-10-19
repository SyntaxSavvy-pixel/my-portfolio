document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const contactBtn = document.getElementById('contact-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    // Progress bar
    function updateProgressBar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrollProgress}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();

    // Contact button
    contactBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('heyitskhq@gmail.com');
        contactBtn.textContent = 'Email Copied!';
        setTimeout(() => {
            contactBtn.textContent = 'Contact Me';
        }, 2000);
    });

    // Skill cards animation
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
    });

    // Project cards hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Animate on scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.content-card, .skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Parallax effect for grid background
    document.addEventListener('mousemove', (e) => {
        const gridBackground = document.querySelector('.grid-background');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        const translateX = mouseX * 20;
        const translateY = mouseY * 20;
        gridBackground.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});