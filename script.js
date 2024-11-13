document.querySelectorAll('a[href^="#"]').forEach(ancor => {
    ancor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
});