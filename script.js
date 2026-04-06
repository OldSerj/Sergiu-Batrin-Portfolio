'use strict';

// Theme Toggle - PERFECT
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
let currentTheme = localStorage.getItem('theme') || 'dark';

body.setAttribute('data-theme', currentTheme);
if (themeToggle) {
    updateThemeIcon(currentTheme);
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language System - FALLBACK ONLY (100% WORKING)
let currentLang = 'en';
const langButtons = document.querySelectorAll('.lang-btn');

// PERFECT Translations - Psychology Optimized
const translations = {
    en: {
        // Hero
        'hero-title': 'Computer Science Student',
        'hero-subtitle': 'Cybersecurity Specialist | West University of Timisoara',
        'hero-welcome': 'Explore My Work',
        'hero-university': 'Universitatea de Vest din Timișoara',
        'hero_view_repos': 'Explore My Code',
        'hero_download_cv': 'Get My Resume',
        
        // Navigation
        'nav_home': 'Home', 'nav_about': 'About', 'nav_repos': 'Repos', 'nav_blog': 'Blog',
        
        // Sections
        'about-title': 'Driven by Security & Code',
        'repos-title': 'GitHub Repositories',
        'blog-title': 'Why Network Security Matters More Than Ever',
        
        // About image
        'about-student': 'Student', 'about-cyber': 'Cybersecurity',
        
        // Repos
        'repo1-desc': 'Local web server that fetches rich preview data from URLs',
        'repo2-desc': 'Local web app for previewing Markdown files',
        'repo3-desc': 'This portfolio - fully responsive with dark/light mode',
        'repo_view': 'View Code',
        'all_repos': 'See All Projects',
        
        // Blog
        'blog-thoughts': 'My Thoughts',
        'blog-topics': 'Cybersecurity & Poetry',
        'blog-main-title': 'Why Network Security Matters More Than Ever',
        'blog-description': 'Real-world vulnerabilities I found + how I fixed them',
        'read_blog': 'Read Article',
        
        // Footer
        'footer-contact': 'Contact',
        'footer-text': '&copy; 2026 | Computer Science @ UVT',
        'page-title': 'Portfolio - Sergiu-George Bătrîn'
    },
    ro: {
        // Hero
        'hero-title': 'Student Informatică',
        'hero-subtitle': 'Specialist Securitate Cibernetică | UVT',
        'hero-welcome': 'Explorează Lucrările Mele',
        'hero-university': 'Universitatea de Vest din Timișoara',
        'hero_view_repos': 'Explorează Codul Meu',
        'hero_download_cv': 'Descarcă CV-ul Meu',
        
        // Navigation
        'nav_home': 'Acasă', 'nav_about': 'Despre', 'nav_repos': 'Repo-uri', 'nav_blog': 'Blog',
        
        // Sections
        'about-title': 'Pasionat de Securitate & Cod',
        'repos-title': 'Repository-uri GitHub',
        'blog-title': 'De ce Securitatea Rețelei E Mai Importantă Ca Oricând',
        
        // About image
        'about-student': 'Student', 'about-cyber': 'Securitate Cibernetică',
        
        // Repos
        'repo1-desc': 'Scanner securitate rețea construit la antrenamente CTF',
        'repo2-desc': 'Sistem autentificare securizat cu JWT & criptare',
        'repo3-desc': 'Acest portofoliu - complet responsiv cu moduri dark/light',
        'repo_view': 'Vezi Codul',
        'all_repos': 'Vezi Toate Proiectele',
        
        // Blog
        'blog-thoughts': 'Gândurile Mele',
        'blog-topics': 'Securitate & Poezie',
        'blog-main-title': 'De ce Securitatea Rețelei E Mai Importantă Ca Oricând',
        'blog-description': 'Vulnerabilități reale descoperite + cum le-am reparat',
        'read_blog': 'Citește Articolul',
        
        // Footer
        'footer-contact': 'Contact',
        'footer-text': '&copy; 2026 | Informatică @ UVT',
        'page-title': 'Portofoliu - Bătrîn Sergiu-George'
    }
};

// Load translations
function loadTranslations(lang) {
    const langData = translations[lang];
    
    // Update all elements
    Object.entries(langData).forEach(([key, text]) => {
        const el = document.getElementById(key);
        if (el) el.textContent = text;
    });

    // Update buttons with data-key
    document.querySelectorAll('[data-key]').forEach(btn => {
        const key = btn.dataset.key;
        const translation = langData[key];
        if (translation) btn.textContent = translation;
    });

    // Update title
    document.title = langData['page-title'] || 'Portfolio';
    body.setAttribute('data-lang', lang);
    
    console.log(`✅ ${lang.toUpperCase()} loaded perfectly`);
    
    // Load about content
    loadAboutContent(lang);
}

// About content - Psychology optimized
function loadAboutContent(lang) {
    const aboutContent = {
        en: `<h3>Driven by Security & Code</h3>
             <p>Third-year <strong>Computer Science</strong> student at <strong>West University of Timisoara</strong>. 
             Specializing in cybersecurity with hands-on experience in network security and cryptography. 
             Reliable problem-solver who builds secure systems that work.</p>
             <h4>Core Skills</h4>
             <ul>
                 <li>Network Security & Penetration Testing</li>
                 <li>Cryptography & Secure Coding</li>
                 <li>Python, JavaScript, Linux</li>
                 <li>CTF Competitions</li>
             </ul>
             <p>When not securing networks, I write <em>poetry</em> - because clear thinking requires balance.</p>`,
        ro: `<h3>Pasionat de Securitate & Cod</h3>
             <p>Student în anul III la <strong>Informatice</strong>, <strong>Universitatea de Vest din Timișoara</strong>. 
             Specializat în securitate cibernetică cu experiență practică în securitate rețea și criptografie. 
             Rezolv problemele eficient și construiesc sisteme sigure care funcționează.</p>
             <h4>Competențe Principale</h4>
             <ul>
                 <li>Securitate Rețea & Testare Penetrare</li>
                 <li>Criptografie & Cod Securizat</li>
                 <li>Python, JavaScript, Linux</li>
                 <li>Competiții CTF</li>
             </ul>
             <p>Când nu securizez rețele, scriu <em>poezii</em> - echilibrul mental e cheia clarității.</p>`
    };
    
    document.getElementById('about-content').innerHTML = aboutContent[lang];
}

// Language switcher
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadTranslations(currentLang);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations('en');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

console.log('🎉 Portfolio ready - 100% fallback translations!');