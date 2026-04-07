const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert('Thanks for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Oops! There was a problem submitting your form');
    }
});