document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupBtn.addEventListener('click', () => {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    // Remove the funky interactions
    const container = document.querySelector('.container');
    const title = document.querySelector('.title');

    // Remove the mousemove event listener
    container.removeEventListener('mousemove', handleMouseMove);

    // Remove the mouseenter event listener
    container.removeEventListener('mouseenter', handleMouseEnter);

    // Update the mouseleave event listener to reset any remaining transforms
    container.addEventListener('mouseleave', () => {
        container.style.transform = 'none';
        title.style.transform = 'none';
    });
});

