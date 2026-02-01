// ===== NBOOKS WEBSITE JAVASCRIPT =====

// Global variables
let translations = {};
let currentLanguage = 'pt';

// Language detection
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('en') ? 'en' : 'pt';
}

// Load translations from JSON
async function loadTranslations(lang) {
    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
    return response.json();
}

// Get nested translation value
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key;
        }
    }
    return value;
}

// Update all translations in the DOM
function updateDOMTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);

        if (translation && translation !== key) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

// Update video source based on language
function updateVideoSource(lang) {
    const video = document.getElementById('heroVideo');
    const source = document.getElementById('videoSource');
    if (video && source) {
        source.src = `videos/why_${lang}.mp4`;
        video.load();
        video.play().catch(() => {
            // Autoplay may be blocked, that's ok
        });
    }
}

// Update language
async function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    translations = await loadTranslations(lang);

    const currentLangCode = document.getElementById('currentLang');
    if (currentLangCode) {
        currentLangCode.textContent = lang.toUpperCase();
        document.documentElement.lang = lang;
    }

    updateDOMTranslations();
    updateVideoSource(lang);

    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === lang);
    });
}

// Initialize language
async function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    await updateLanguage(savedLang || detectBrowserLanguage());
}

// Language selector
function initializeLanguageSelector() {
    const langSelector = document.getElementById('langSelector');
    if (!langSelector) return;

    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', async (e) => {
            e.stopPropagation();
            await updateLanguage(option.getAttribute('data-lang'));
            langSelector.classList.remove('active');
        });
    });

    document.addEventListener('click', () => langSelector.classList.remove('active'));
}

// Mobile menu
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    const closeMenu = () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    };

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.closest('a[href^="#"]')) closeMenu();
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                window.scrollTo({
                    top: target.offsetTop - navbarHeight + 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar shadow on scroll
function initializeNavbarEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 100
                ? '0 2px 30px rgba(58, 173, 204, 0.15)'
                : '0 2px 20px rgba(58, 173, 204, 0.1)';
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await initializeLanguage();
    initializeLanguageSelector();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeNavbarEffects();
    initializeScrollAnimations();
});

// Export for external use
window.nBooksApp = { updateLanguage, initializeLanguage, getTranslation, translations };
