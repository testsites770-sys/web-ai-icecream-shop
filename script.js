```javascript
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Account for header height
                behavior: 'smooth'
            });
        });
    }

    // 2. Simple Form Submission Alert
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('תודה שפנית אלינו! נחזור אליך בהקדם עם כדור גלידה מתנה.');
            contactForm.reset();
        });
    }

    // 3. Header Background Change on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 4. Mobile Menu Toggle (Basic)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle logic for mobile menu visibility
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.right = '0';
                nav.style.width = '100%';
                nav.style.background = '#fff';
                nav.style.padding = '1rem';
                nav.style.textAlign = 'center';
            }
        });
    }
});
```