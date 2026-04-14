document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for local anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length <= 1) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Offset for fixed navbar
                const headerOffset = 100; // Increased for top bar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Handler -> Email redirected to uclerkalip@hotmail.com
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('quote-name').value;
            const email = document.getElementById('quote-email').value;
            const message = document.getElementById('quote-message').value;

            // Email formatting
            const subject = `Web Sitesi Teklif Talebi - ${name}`;
            const body = `Merhaba Üçlerkalıp,\n\nWeb sitenizden yeni bir teklif talebi geldi:\n\nAd Soyad: ${name}\nE-Posta: ${email}\n\nMesaj:\n${message}`;

            // Redirect to mailto action
            const mailtoUrl = `mailto:uclerkalip@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;

            // Reset form
            quoteForm.reset();
        });
    }

    // Initialize Feather Icons (if not initialized via inline script)
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
