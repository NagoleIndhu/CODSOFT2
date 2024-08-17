document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    // Function to show the next testimonial
    function showNextTestimonial() {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    }

    // Start testimonial rotation
    setInterval(showNextTestimonial, 3000);

    // Form validation
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name === '' || email === '' || password === '') {
            event.preventDefault();
            alert('Please fill in all fields');
        } else {
            alert('Form submitted successfully!');
        }
    });
});
