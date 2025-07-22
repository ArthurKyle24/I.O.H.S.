function submitFeedback(event) {
    event.preventDefault ();
    const form = event.target;
    
    alert('Thank you for your feedback! We appreciate your input and will get back to you soon.');
    form.reset();
}

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const feedback = document.getElementById("feedback").value;
    
    fetch("https://script.google.com/macros/s/AKfycbwVYHZ8APNfGqktDwiQIR5hjIUMNPSBwBXXJ1SatvPdJtMcIRLNffaUvpjfkQ6fHIQj/exec", {
      method: "POST",
      body: JSON.stringify({ feedback: feedback })
    }).then(() => alert("Feedback sent!"));
});

// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.sub-company, .product-card, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});