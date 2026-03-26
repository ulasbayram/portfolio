import './style.css';

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Subtle holographic shine tracking mouse movement (creating a dynamic Printstream pearlescence)
const tracker = document.getElementById('hologram-tracker');

document.addEventListener('mousemove', (e) => {
    if (!tracker) return;
    
    // Calculate mouse position as a percentage of the screen
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Shift background position of the holographic overlay
    tracker.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// Intro text scrambling effect (cybersecurity motif)
const textNodes = document.querySelectorAll('.highlight');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

textNodes.forEach(node => {
    const originalText = node.innerText;
    node.addEventListener('mouseover', () => {
        let iterations = 0;
        const targetText = originalText;
        
        const interval = setInterval(() => {
            node.innerText = targetText.split('').map((letter, index) => {
                if(index < iterations) {
                    return targetText[index];
                }
                return characters[Math.floor(Math.random() * characters.length)];
            }).join('');
            
            if(iterations >= targetText.length) {
                clearInterval(interval);
            }
            
            iterations += 1/3;
        }, 30);
    });
});

// Theme Toggle System
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Initialize theme from storage
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
