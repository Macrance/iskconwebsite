// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll to section with offset
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight - 20,
            behavior: 'smooth'
        });
    }
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    
    // Show success message
    alert(`Thank you ${name} for your message! We'll connect with you soon. Hare Krishna!`);
    
    // Reset form
    this.reset();
});

// Order book function
function orderBook(bookName) {
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = `Hello! I would like to order the book: ${bookName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Gurudev discourses function - FIXED
function showDiscourses() {
    // Create a modal for discourses
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            position: relative;
        ">
            <button onclick="this.parentElement.parentElement.remove()" 
                style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                ">×</button>
            <h3 style="color: #2c3e50; margin-bottom: 1rem;">Srila Prabhupada Discourses</h3>
            <div style="margin: 2rem 0;">
                <p style="margin-bottom: 1rem;">Available on:</p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <a href="https://www.youtube.com/" target="_blank" 
                       style="background: #FF0000; color: white; padding: 12px; border-radius: 5px; text-decoration: none;">
                        <i class="fab fa-youtube"></i> YouTube Channel
                    </a>
                    <a href="https://www.spotify.com/" target="_blank" 
                       style="background: #1DB954; color: white; padding: 12px; border-radius: 5px; text-decoration: none;">
                        <i class="fab fa-spotify"></i> Spotify Podcasts
                    </a>
                    <a href="https://soundcloud.com/" target="_blank" 
                       style="background: #FF3300; color: white; padding: 12px; border-radius: 5px; text-decoration: none;">
                        <i class="fab fa-soundcloud"></i> SoundCloud Audio
                    </a>
                </div>
            </div>
            <p style="color: #666; font-size: 0.9rem;">Listen to Srila Prabhupada's timeless wisdom and discourses</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set first nav link as active
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
});