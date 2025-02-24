// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

contactForm.addEventListener('submit', (e) => {
    let isValid = true;

    if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
        nameError.textContent = '';
    }

    if (!emailInput.value.trim()) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Email is invalid';
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = '';
    }

    if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageInput.classList.remove('is-invalid');
        messageError.textContent = '';
    }

    if (!isValid) {
        e.preventDefault();
    } else {
        alert('Your message has been sent successfully!');
    }
});

// Add animation to feature cards on hover
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Get the current year and update the span with id "current-year"
document.getElementById('current-year').textContent = new Date().getFullYear();