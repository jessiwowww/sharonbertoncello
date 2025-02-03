// script.js

// Scorrimento fluido alle sezioni
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


  // script.js

// Scorrimento fluido
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Cookie Banner
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  
  // Mostra il banner solo se il consenso non è stato dato
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.remove('hidden');
  }
  
  // Accetta i cookie
  acceptCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
  });
  