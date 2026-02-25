// Gaming Theme JavaScript - Professional Gamer Style

// Ripple Effect for Buttons
document.querySelectorAll(".btn").forEach(function(e) {
    e.addEventListener("click", function(o) {
        const r = document.createElement("span"),
            n = this.getBoundingClientRect(),
            s = Math.max(n.width, n.height),
            i = o.clientX - n.left - s / 2,
            a = o.clientY - n.top - s / 2;
        r.style.width = r.style.height = s + "px";
        r.style.left = i + "px";
        r.style.top = a + "px";
        r.classList.add("ripple");
        this.appendChild(r);
        setTimeout(() => r.remove(), 600);
    });
});

// Gaming Particles System
function createParticles() {
    const container = document.getElementById('particles');
    const particleColors = [
        'rgba(0, 102, 255, 0.6)',  // Blue
        'rgba(0, 200, 255, 0.6)',  // Cyan
        'rgba(107, 76, 230, 0.6)', // Purple
        'rgba(0, 255, 136, 0.6)',  // Green
        'rgba(255, 222, 0, 0.6)'    // Yellow
    ];
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random color
        particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        container.appendChild(particle);
    }
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

// Typing Effect for Title (Optional Enhancement)
function typeWriter() {
    const title = document.querySelector('.title');
    if (title) {
        title.style.opacity = '1';
    }
}

// Run typing effect after page load
setTimeout(typeWriter, 500);

// Add hover sound effect (optional - disabled by default)
const hoverSound = null;

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Gaming cursor trail effect (subtle)
let cursorX = 0, cursorY = 0;
document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    
    // Create subtle trail
    if (Math.random() > 0.7) {
        createCursorParticle(cursorX, cursorY);
    }
});

function createCursorParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 6px;
        height: 6px;
        background: rgba(0, 102, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: cursorFade 0.5s ease-out forwards;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 500);
}

// Add cursor fade animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes cursorFade {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Console message for gamers
console.log('%c🎮 THE POOR GAMER 🎮', 'font-size: 24px; color: #0066ff; font-weight: bold;');
console.log('%cWelcome to my gaming hub!', 'color: #00c8ff;');
console.log('%c101 Subscribe | Pro Gamer', 'color: #00ff88;');
