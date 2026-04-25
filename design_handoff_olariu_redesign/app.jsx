/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */

const { useState, useEffect, useCallback } = React;

const GALLERY_IMAGES = [
  { src: 'assets/cabinet/pancarda.jpeg', alt: 'Pancarda exterioară a cabinetului' },
  { src: 'assets/cabinet/intrare.jpeg', alt: 'Intrare în cabinet' },
  { src: 'assets/cabinet/sala_asteptare.jpg', alt: 'Sala de așteptare' },
  { src: 'assets/cabinet/sala_asteptare_1.jpeg', alt: 'Sala de așteptare' },
  { src: 'assets/cabinet/sala_asteptare_2.jpeg', alt: 'Sala de așteptare' },
  { src: 'assets/cabinet/sala_asteptare_3.jpeg', alt: 'Sala de așteptare' },
  { src: 'assets/cabinet/cabinet.jpeg', alt: 'Interiorul cabinetului' },
  { src: 'assets/cabinet/cabinet1.jpeg', alt: 'Interiorul cabinetului' },
  { src: 'assets/cabinet/cabinet2.jpeg', alt: 'Interiorul cabinetului' },
  { src: 'assets/cabinet/cabinet3.jpeg', alt: 'Interiorul cabinetului' },
];

/* ===== Render gallery (vanilla into existing DOM) ===== */
(function renderGallery() {
  const root = document.getElementById('gallery');
  if (!root) return;
  root.innerHTML = GALLERY_IMAGES.map((img, i) => `
    <button class="gallery-item" data-index="${i}" aria-label="Mărește: ${img.alt}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </button>
  `).join('');
})();

/* ===== Lightbox ===== */
(function lightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  let current = 0;

  function show(i) {
    current = (i + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    lbImg.src = GALLERY_IMAGES[current].src;
    lbImg.alt = GALLERY_IMAGES[current].alt;
    lb.classList.add('open');
  }
  function hide() { lb.classList.remove('open'); }

  document.querySelectorAll('.gallery-item').forEach(btn => {
    btn.addEventListener('click', () => show(parseInt(btn.dataset.index, 10)));
  });
  lbClose.addEventListener('click', hide);
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) hide(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') hide();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();

/* ===== Tweaks panel ===== */
function applyTweaks(t) {
  const map = { "normal": 0.78, "large": 0.88, "xl": 1 };
  document.documentElement.style.setProperty('--scale', map[t.textSize] ?? 1);
  if (t.highContrast) document.documentElement.setAttribute('data-contrast', 'high');
  else document.documentElement.removeAttribute('data-contrast');
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { textSize: 'xl', highContrast: false });

  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mărime text" />
      <TweakRadio
        label="Dimensiune"
        value={t.textSize}
        onChange={(v) => setTweak('textSize', v)}
        options={[
          { value: 'normal', label: 'Normal' },
          { value: 'large', label: 'Mare' },
          { value: 'xl', label: 'Foarte mare' },
        ]}
      />
      <TweakSection label="Accesibilitate" />
      <TweakToggle
        label="Contrast ridicat"
        value={t.highContrast}
        onChange={(v) => setTweak('highContrast', v)}
      />
    </TweaksPanel>
  );
}

// Expose defaults for the hook
window.TWEAK_DEFAULTS = window.TWEAK_DEFAULTS || TWEAK_DEFAULTS;

const tweaksMount = document.createElement('div');
document.body.appendChild(tweaksMount);
ReactDOM.createRoot(tweaksMount).render(<TweaksApp />);
