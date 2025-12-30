/* 
 * ================================================================
 *   Operating System (OS) Lab - Script
 * ================================================================
 *   Author: Amey Thakur
 *   GitHub: https://github.com/Amey-Thakur
 *   Course: Operating System (OS) Lab
 *   Roll No: 50
 *   Batch: B3
 *   Date: January 17, 2020
 *   Repository: https://github.com/Amey-Thakur/OPERATING-SYSTEM-AND-OPERATING-SYSTEM-LAB
 *   License: CC BY 4.0
 * ================================================================
 */

// Global Variables
let currentTheme = localStorage.getItem('theme') || 'light';
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// =========================================
//   THEME MANAGEMENT
// =========================================
function setTheme(theme) {
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Initialize Theme
setTheme(currentTheme);

// Toggle Theme Event
themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
});

// =========================================
//   SCROLL ANIMATIONS
// =========================================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Initial check and event listener
window.addEventListener('scroll', reveal);
reveal(); // Trigger once on load

// =========================================
//   STATS COUNTER ANIMATION
// =========================================
const stats = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
    if (hasAnimated) return;

    const statsSection = document.querySelector('.stats-container');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 50) {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const suffix = stat.getAttribute('data-suffix') || '';
            const increment = target / 50; // Speed of animation

            let current = 0;
            const updateCount = () => {
                if (current < target) {
                    current = Math.ceil(current + increment);
                    if (current > target) current = target;
                    stat.innerText = current + suffix;
                    setTimeout(updateCount, 30);
                } else {
                    stat.innerText = target + suffix;
                }
            };
            updateCount();
        });
        hasAnimated = true;
    }
}

window.addEventListener('scroll', animateStats);

// =========================================
//   PWA INSTALLATION
// =========================================
let deferredPrompt;
const installBtn = document.getElementById('pwa-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'flex';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installBtn.style.display = 'none';
        }
        deferredPrompt = null;
    }
});

// =========================================
//   SHARE FUNCTIONALITY
// =========================================
const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', async () => {
    const shareData = {
        title: 'OS Lab Portfolio - Amey Thakur',
        text: 'Check out this scholarly portfolio for Operating System Laboratory by Amey Thakur, featuring process scheduling, memory management, and system calls.',
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log('Share canceled:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
});

// =========================================
//   KEYBOARD SHORTCUTS & COMMAND PALETTE
// =========================================
document.addEventListener('keydown', (e) => {
    // Toggle Theme (T)
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    }

    // Ctrl+K (Command Palette - Placeholder for future implementation)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Future: Open Command Palette
    }
});

// Auto-hide keyboard hint after 8 seconds
setTimeout(() => {
    const kbdHint = document.getElementById('kbd-hint');
    if (kbdHint) {
        kbdHint.classList.add('hidden');
    }
}, 8000);
