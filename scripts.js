document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MINIMALIST FAQ ACCORDION TABS
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // Optional: Close other active FAQ items when one is clicked
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
            
            // Change icon from Bars to Times (X) when active
            const icon = hamburgerBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu dynamically when any link inside nav is clicked
        const navLinksList = document.getElementById('navLinks').querySelectorAll('a');
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navLinks').classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu if user clicks anywhere else outside the header zone
        document.addEventListener('click', (e) => {
        if (!document.getElementById('navLinks').contains(e.target) && !hamburgerBtn.contains(e.target)) {
                document.getElementById('navLinks').classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});