'use strict';

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

let currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language System
let currentLang = 'en';
const langButtons = document.querySelectorAll('.lang-btn');

function loadTranslations(lang) {
    loadFallbackTranslations(lang);
}

function loadFallbackTranslations(lang) {
    const fallback = {
        en: {
            'hero-title': 'Sergiu-George Bătrîn',
            'hero-subtitle': 'Computer Science Student at West University of Timisoara Year I & Cybersecurity Enthusiast',
            'nav_home': 'Home', 'nav_about': 'About',
            'nav_repos': 'Repos', 'nav_blog': 'Blog',
            'about-title': 'About Me',
            'repos-title': 'GitHub Repositories',
            'blog-title': 'First Blog',
            'footer-text': '© 2024 | Sergiu-George Bătrîn',
            'hero_view_repos': 'View Repositories',
            'hero_download_cv': 'Download Resume'
        },
        ro: {
            'hero-title': 'Bătrîn Sergiu-George',
            'hero-subtitle': 'Student Informatică la Universitatea de Vest din Timișoara Anul I și Entuziast Securitate Cibernetică & Poet',
            'nav_home': 'Acasă', 'nav_about': 'Despre',
            'nav_repos': 'Repo-uri', 'nav_blog': 'Blog',
            'about-title': 'Despre Mine',
            'repos-title': 'Repository-uri GitHub',
            'blog-title': 'Primul Blog',
            'footer-text': '© 2024 | Bătrîn Sergiu-George',
            'hero_view_repos': 'Vezi Repository-urile',
            'hero_download_cv': 'Descarcă CV'
        }
    };

    Object.entries(fallback[lang]).forEach(([key, text]) => {
        const el = document.getElementById(key);
        if (el) el.textContent = text;
    });
}

function loadAboutContent() {
    document.getElementById('about-content').innerHTML =
        currentLang === 'en'
            ? `<h3>Computer Science Student</h3>
               <p>Studying at West University of Timisoara. Passionate about <strong>cybersecurity</strong>.</p>`
            : `<h3>Student Informatică</h3>
               <p>Student la Universitatea de Vest din Timișoara. Pasionat de <strong>securitate cibernetică</strong>.</p>`;
}

// Language switch
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;

        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        loadTranslations(currentLang);
        loadAboutContent();
    });
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations('en');
    loadAboutContent();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
            ?.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log('🔥 Clean version running');