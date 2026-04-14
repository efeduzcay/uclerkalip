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

    // Simple Form Submission Handler -> WhatsApp
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('quote-name').value;
            const email = document.getElementById('quote-email').value;
            const message = document.getElementById('quote-message').value;

            // Target WhatsApp Number (Country code included, e.g. 905550000000)
            const phoneNumber = "905423325969";

            // Message formatting
            const text = `Merhaba Üçlerkalıp, web sitenizden yeni bir teklif talebim var.\n\n*Ad Soyad*: ${name}\n*E-Posta*: ${email}\n*Talep/Proje*: ${message}`;

            // Encode for URL and redirect
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank');

            // Reset form
            quoteForm.reset();
        });
    }

    // Initialize Feather Icons (if not initialized via inline script)
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
