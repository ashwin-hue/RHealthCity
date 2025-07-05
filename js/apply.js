document.addEventListener('DOMContentLoaded', function() {
    // Generate initial CAPTCHA
    generateCaptcha();
    
    // CAPTCHA refresh button
    document.querySelector('.refresh-captcha').addEventListener('click', generateCaptcha);
    
    // Form submission handling
    document.getElementById('admissionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate CAPTCHA
        const captchaDisplay = document.querySelector('.captcha-display').textContent;
        const userCaptcha = document.getElementById('captcha').value;
        
        if (userCaptcha !== captchaDisplay) {
            alert('CAPTCHA verification failed. Please try again.');
            generateCaptcha();
            return;
        }
        
        // If validation passes, submit the form
        this.submit();
    });
    
    // Resend verification email button
    document.querySelector('.resend-btn').addEventListener('click', function() {
        alert('Verification email has been resent!');
    });
    
    // Login button functionality
    document.querySelector('.login-btn').addEventListener('click', function() {
        alert('Login functionality would be implemented here.');
    });
});

function generateCaptcha() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars[randomIndex];
    }
    
    document.querySelector('.captcha-display').textContent = captcha;
    document.getElementById('captcha').value = '';
}