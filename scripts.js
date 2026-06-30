document.addEventListener('DOMContentLoaded', () => {

    // 1. MINIMALIST FAQ ACCORDION TABS
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // 2. MOBILE HAMBURGER MENU TOGGLE
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('show');

            const icon = hamburgerBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        const navLinksList = navLinks.querySelectorAll('a');
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navLinks.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 3. CLINIC INFRASTRUCTURE IMAGE ROTATOR
    const imageUrls = [
        "image/mainphoto.jpg",
        "image/treat1.jpg",
        "image/reception.jpg",
        "image/hall.jpg",
        "image/operationtime.jpeg"
    ];

    let currentIndex = 0;

    function rotateClinicImages() {
        const mainImg = document.querySelector('.main-premium-pic');
        const subImgs = document.querySelectorAll('.sub-premium-pic');

        currentIndex = (currentIndex + 1) % imageUrls.length;

        if (mainImg) {
            mainImg.src = imageUrls[currentIndex];
        }

        if (subImgs.length > 0) {
            subImgs.forEach((img, i) => {
                let subIndex = (currentIndex + 1 + i) % imageUrls.length;
                img.src = imageUrls[subIndex];
            });
        }
    }

    setInterval(rotateClinicImages, 3000);
});

// 4. VIDEO PLAYER SYNC
const reelsVideos = document.querySelectorAll('.reel-card video');

reelsVideos.forEach(video => {
    video.addEventListener('play', () => {
        reelsVideos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});

// 5. SERVICES DROPDOWN TOGGLE
const servicesDropdown = document.querySelector('.dropdown');

if (servicesDropdown) {
    servicesDropdown.addEventListener('click', function(e) {
        // மெனு லிங்க்கை கிளிக் செய்தால் மட்டும் இயங்கும்
        const content = this.querySelector('.dropdown-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        e.stopPropagation(); // இது மெனுவை உடனே மூடுவதைத் தடுக்கும்
    });
}

// review moving
window.addEventListener('click', function() {
    const content = document.querySelector('.dropdown-content');
    if (content) {
        content.style.display = 'none';
    }
});

document.querySelector('a[href="#reviews"]').addEventListener('click', function(e) {
    e.preventDefault(); // இது தானாகவே ஸ்க்ரோல் ஆவதைத் தடுக்கும்
    
    const targetElement = document.getElementById('reviews'); // ரிவ்யூ செக்ஷனை எடுக்கும்
    const headerOffset = 150; // உங்கள் ஹெடர் உயரத்திற்கு ஏற்ப இந்த எண்ணை மாற்றலாம் (100-150)
    
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
});