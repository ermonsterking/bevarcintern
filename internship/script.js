// Booking Form Validation and Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    // Simple validation
    if (name === '' || email === '' || service === '' || date === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    } else {
        document.getElementById('message').innerText = 'Thank you for your booking, ' + name + '!';
        // Here you can add code to send the form data to a server if needed
        document.getElementById('bookingForm').reset(); // Reset the form
    }
});

// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds