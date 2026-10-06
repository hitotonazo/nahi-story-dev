(() => {
  'use strict';

  // SP Navigation
  const button = document.querySelector('[data-menu-button]');
  const navigation = document.querySelector('[data-global-navigation]');
  if (button && navigation) {
    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'メニューを開く');
      navigation.classList.remove('is-open');
      document.body.classList.remove('is-menu-open');
    };

    button.addEventListener('click', () => {
      const opening = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(opening));
      button.setAttribute('aria-label', opening ? 'メニューを閉じる' : 'メニューを開く');
      navigation.classList.toggle('is-open', opening);
      document.body.classList.toggle('is-menu-open', opening);
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
  }

  // TOP Hero Slideshow
  const slider = document.querySelector('[data-hero-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('[data-hero-slide]')];
    const dots = [...slider.querySelectorAll('[data-hero-dot]')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let current = 0;
    let timer = 0;

    const showSlide = (index) => {
      current = index;
      slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === current));
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };
    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      if (!reduceMotion.matches) timer = window.setInterval(() => showSlide((current + 1) % slides.length), 6000);
    };

    dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); start(); }));
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', start);
    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', start);
    } else if (typeof reduceMotion.addListener === 'function') {
      reduceMotion.addListener(start);
    }
    start();
  }

  // Shared ARG state used by the STEP3 discovery effects.
  const storageKey = 'nagibi_arg_state_v1';
  const initialState = () => ({
    phase: 0,
    discovered: { route: false, history: false, gallery: false },
    unlocked: { oldGuide: false, archive: false, record: false, truth: false },
    endingReached: false
  });
  const readState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      const fallback = initialState();
      if (!saved || typeof saved !== 'object') return fallback;
      return {
        ...fallback,
        ...saved,
        discovered: { ...fallback.discovered, ...saved.discovered },
        unlocked: { ...fallback.unlocked, ...saved.unlocked }
      };
    } catch {
      return initialState();
    }
  };
  const writeState = (state) => {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
    return state;
  };
  const setPhase = (phase) => {
    const state = readState();
    state.phase = Math.max(0, Math.min(4, Number(phase) || 0));
    return writeState(state);
  };
  const discover = (key, phase, unlockKey) => {
    const state = readState();
    const firstDiscovery = !state.discovered[key];
    state.phase = Math.max(state.phase, phase);
    state.discovered[key] = true;
    if (unlockKey) state.unlocked[unlockKey] = true;
    writeState(state);
    return firstDiscovery;
  };
  const reset = () => {
    try {
      localStorage.removeItem(storageKey);
      sessionStorage.removeItem('nagibiArgDebug');
      sessionStorage.removeItem('nagibiArgDebugPanelVisible');
    } catch {}
    return writeState(initialState());
  };

  const resetParams = new URLSearchParams(window.location.search);
  if (resetParams.get('reset') === '1') {
    reset();
    resetParams.delete('reset');
    const resetQuery = resetParams.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${resetQuery ? `?${resetQuery}` : ''}${window.location.hash}`);
  }

  window.NagibiArgState = { read: readState, setPhase, discover, reset };

  document.querySelectorAll('.site-header__reset').forEach((resetButton) => {
    resetButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      reset();
      window.location.replace('index.html?reset=1');
    });
  });

  window.SiteAlterationDebug?.init({
    storagePrefix: 'nagibiArg',
    state: {
      phases: ['PHASE0', 'PHASE1', 'PHASE2', 'PHASE3', 'PHASE4'],
      getPhase: () => `PHASE${readState().phase}`,
      setPhase: (phase) => setPhase(Number(String(phase).replace('PHASE', '')))
    }
  });
})();
