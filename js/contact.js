document.addEventListener('DOMContentLoaded', function() {
    // Get CSRF token
    fetch('php/get_csrf_token.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('csrfToken').value = data.token;
        });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        fetch('php/contact_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                document.getElementById('contactForm').reset();
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
