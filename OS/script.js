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

// =========================================
//   CONSOLE EASTER EGG 🥚
// =========================================
console.log(
    "%c🧬 OS Lab Portfolio",
    "font-size: 28px; font-weight: bold; color: #f97316; text-shadow: 2px 2px 0 #0c0a09;"
);
console.log(
    "%c👋 Hey developer! Curious about the system calls?",
    "font-size: 14px; color: #a8a29e;"
);
console.log(
    "%c🔗 https://github.com/Amey-Thakur/OPERATING-SYSTEM-AND-OPERATING-SYSTEM-LAB",
    "font-size: 12px; color: #f97316;"
);
console.log(
    "%c⚠️ This portfolio is protected. Please respect the author's work!",
    "font-size: 12px; color: #f97316; font-weight: bold;"
);

// Global Variables
let currentTheme = localStorage.getItem('theme') || 'light';
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// =========================================
//   SKELETON LOADER & INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Theme Initialization
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Hide Loader after delay
    const loader = document.getElementById('skeleton-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // =========================================
    //   LOW-LEVEL SECURITY & ANTI-CLICK
    // =========================================

    // Disable Right Click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable Dragging images
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Disable DevTools Shortcuts
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
        }
    });

    // Disable Selection (Anti-Select)
    document.addEventListener('selectstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    // Scroll Reveal Logic using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // Stats Counter Animation
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix') || '';
                    const duration = 2000;
                    const increment = target / (duration / 16);

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.ceil(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                        }
                    };
                    updateCounter();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-container');
    if (statsSection) statsObserver.observe(statsSection);

    // Award Badge (3D Flip) with Sound Effect
    const awardScene = document.querySelector('.award-scene');
    const awardCard = document.querySelector('.award-badge-card');
    const awardMsg = document.getElementById('award-msg');
    const messages = ["Kernel Mastered! 🧠", "Root Access Granted! 🔒", "System Call Success! 🚀", "Mega Thanks! ❤️", "Scheduler Sync'd! ⚡"];

    if (awardScene && awardCard && awardMsg) {
        awardScene.addEventListener('click', () => {
            if (!awardCard.classList.contains('flipped')) {
                awardMsg.textContent = messages[Math.floor(Math.random() * messages.length)];
                awardCard.classList.add('flipped');
                playCelebrateSound(); // Play appreciation sound
                setTimeout(() => awardCard.classList.remove('flipped'), 3000);
            }
        });
    }

    // Initialize Productivity Tools
    initCommandPalette();

    // Auto-hide keyboard hint after 8 seconds
    const kbdHint = document.getElementById('kbd-hint');
    if (kbdHint) {
        setTimeout(() => kbdHint.classList.add('hidden'), 8000);
    }
});

// =========================================
//   THEME MANAGEMENT
// =========================================
function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (themeToggleBtn) {
        const icon = themeToggleBtn.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
}

// =========================================
//   SOUND EFFECT (Appreciation Chime)
// =========================================
function playCelebrateSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const audioCtx = new AudioContext();

        function playNote(freq, start, duration) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.1, start);
            gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(start);
            osc.stop(start + duration);
        }

        playNote(523.25, audioCtx.currentTime, 0.2); // C5
        playNote(783.99, audioCtx.currentTime + 0.1, 0.4); // G5
    } catch (e) { console.error('Audio failed', e); }
}

// =========================================
//   COMMAND PALETTE LOGIC
// =========================================
function initCommandPalette() {
    const overlay = document.getElementById('cmd-overlay');
    const input = document.getElementById('cmd-input');
    const resultsContainer = document.getElementById('cmd-results');
    const kbdHint = document.getElementById('kbd-hint');

    if (!overlay || !input || !resultsContainer) return;

    let selectedIndex = 0;
    let results = [];
    const commands = [
        { type: 'Command', name: 'Toggle Theme', icon: 'fa-adjust', action: () => document.getElementById('theme-toggle').click() },
        { type: 'Command', name: 'Scroll to Top', icon: 'fa-arrow-up', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { type: 'Command', name: 'Go to Experiments', icon: 'fa-flask', action: () => document.getElementById('experiments').scrollIntoView({ behavior: 'smooth' }) },
        { type: 'Command', name: 'Go to The Wall', icon: 'fa-users', action: () => document.getElementById('the-wall').scrollIntoView({ behavior: 'smooth' }) },
        { type: 'Command', name: 'Calculate Interest', icon: 'fa-calculator', action: () => document.getElementById('mini-project').scrollIntoView({ behavior: 'smooth' }) },
    ];

    // Scrape Experiments
    const experiments = Array.from(document.querySelectorAll('.card-custom h5')).map(h5 => ({
        type: 'Experiment',
        name: h5.textContent.trim(),
        icon: 'fa-flask',
        action: () => {
            h5.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const card = h5.closest('.card-custom');
            if (card) {
                card.style.transition = 'all 0.3s ease';
                card.style.transform = 'scale(1.02)';
                card.style.boxShadow = '0 0 0 4px var(--accent-color)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                    card.style.boxShadow = 'none';
                }, 1500);
            }
        }
    }));

    const searchIndex = [...commands, ...experiments];

    function openPalette() {
        overlay.classList.add('active');
        input.value = '';
        input.focus();
        filterResults('');
        if (kbdHint) kbdHint.classList.add('hidden');
    }

    function closePalette() {
        overlay.classList.remove('active');
    }

    function filterResults(query) {
        const q = query.toLowerCase();
        results = searchIndex.filter(item =>
            item.name.toLowerCase().includes(q)
        ).slice(0, 10);

        if (q === '') results = commands;
        renderResults();
    }

    function renderResults() {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="text-center p-3 text-secondary">No matching commands or experiments found.</div>';
            return;
        }

        results.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `cmd-item ${index === selectedIndex ? 'selected' : ''}`;
            div.innerHTML = `
                <div class="d-flex align-items-center">
                    <div class="cmd-item-icon"><i class="fas ${item.icon}"></i></div>
                    <span class="cmd-item-text">${item.name}</span>
                </div>
                <span class="cmd-item-type">${item.type}</span>
            `;
            div.addEventListener('click', () => {
                item.action();
                closePalette();
            });
            div.addEventListener('mouseenter', () => {
                selectedIndex = index;
                renderResults();
            });
            resultsContainer.appendChild(div);
        });

        const selectedEl = resultsContainer.children[selectedIndex];
        if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
    }

    // Unified Keyboard Listener
    document.addEventListener('keydown', (e) => {
        // Security logic remains top priority
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
            return;
        }

        // Palette Toggle
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (overlay.classList.contains('active')) closePalette();
            else openPalette();
            return;
        }

        // Palette Navigation
        if (overlay.classList.contains('active')) {
            if (e.key === 'Escape') { closePalette(); return; }
            if (e.key === 'ArrowDown') { e.preventDefault(); selectedIndex = (selectedIndex + 1) % results.length; renderResults(); return; }
            if (e.key === 'ArrowUp') { e.preventDefault(); selectedIndex = (selectedIndex - 1 + results.length) % results.length; renderResults(); return; }
            if (e.key === 'Enter') { e.preventDefault(); if (results[selectedIndex]) { results[selectedIndex].action(); closePalette(); } return; }
            return;
        }

        // Global Shortcuts
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

        if (e.key.toLowerCase() === 't') { e.preventDefault(); document.getElementById('theme-toggle').click(); }
        if (e.key.toLowerCase() === 'h') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        if (e.key.toLowerCase() === 'e') { e.preventDefault(); document.getElementById('experiments').scrollIntoView({ behavior: 'smooth' }); }
        if (e.key.toLowerCase() === 'w') { e.preventDefault(); document.getElementById('the-wall').scrollIntoView({ behavior: 'smooth' }); }
    });

    input.addEventListener('input', (e) => {
        selectedIndex = 0;
        filterResults(e.target.value);
    });
}
