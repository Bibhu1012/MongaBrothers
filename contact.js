document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const message = form.querySelector('textarea').value;
        
        // Basic validation (you can extend this)
        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Simulate form submission (replace with your form submission logic)
        alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
        
        // Reset form
        form.reset();
    });

    const feedbackButton = document.querySelector('.feedback button');
    
    feedbackButton.addEventListener('click', function() {
        alert('Thank you for your feedback!');
    });
});
