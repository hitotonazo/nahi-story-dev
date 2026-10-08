(() => {
  'use strict';

  const state = window.NagibiArgState?.read() || { phase: 0 };
  const historyAnomaly = document.querySelector('.timeline__anomaly');
  if (historyAnomaly && state.phase < 1) {
    const historyImage = historyAnomaly.querySelector('img');
    historyImage.src = 'images/history-normal-1968.webp';
    historyImage.alt = '1968年、現在の運行ルートへ変更した頃の凪燈ものがたり';
    historyAnomaly.removeAttribute('href');
    historyAnomaly.removeAttribute('aria-label');
    historyAnomaly.classList.remove('anomaly-link');
  }

  const galleryAnomaly = document.querySelector('.gallery-item--anomaly');
  if (galleryAnomaly && state.phase < 2) galleryAnomaly.hidden = true;

  const routeAnomaly = document.querySelector('[data-route-anomaly]');

  if (routeAnomaly) {
    const currentMap = routeAnomaly.querySelector('[data-route-current]');
    const oldMap = routeAnomaly.querySelector('[data-route-old]');
    const status = routeAnomaly.querySelector('[data-route-status]');
    let oldRouteIsVisible = false;
    let switching = false;

    const updateRoute = () => {
      if (switching) return;
      switching = true;
      routeAnomaly.classList.add('is-switching');
      window.setTimeout(() => {
        oldRouteIsVisible = !oldRouteIsVisible;
        currentMap.hidden = oldRouteIsVisible;
        oldMap.hidden = !oldRouteIsVisible;
        status.textContent = oldRouteIsVisible ? '別の運行ルートを表示しています' : '現在の運行ルートを表示しています';
      }, 520);
      window.setTimeout(() => {
        routeAnomaly.classList.remove('is-switching');
        switching = false;
      }, 1150);
    };

    window.setInterval(updateRoute, 5000);
  }

  const discoveries = [
    { selector: '[data-route-old]', key: 'route', phase: 1, unlock: 'oldGuide', minimumPhase: 0 },
    { selector: '.timeline__anomaly', key: 'history', phase: 2, unlock: 'archive', minimumPhase: 1 },
    { selector: '.gallery-item--anomaly .anomaly-link', key: 'gallery', phase: 3, unlock: 'record', minimumPhase: 2 }
  ];

  discoveries.forEach(({ selector, key, phase, unlock, minimumPhase }) => {
    if (state.phase < minimumPhase) return;
    const link = document.querySelector(selector);
    if (!link) return;
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const destination = link.href;
      const firstDiscovery = window.NagibiArgState?.discover(key, phase, unlock) ?? true;
      if (firstDiscovery && window.SiteAlteration?.play) {
        await window.SiteAlteration.play({ message: 'サイトが改変されました' });
      }
      window.location.href = destination;
    });
  });

  if (galleryAnomaly && !galleryAnomaly.hidden) {
    window.setTimeout(() => {
      galleryAnomaly.classList.add('is-disturbed');
      window.setTimeout(() => galleryAnomaly.classList.remove('is-disturbed'), 1400);
    }, 10000);
  }

  const recordSearch = document.querySelector('[data-record-search]');

  const recordRoute = document.querySelector('.record-alert__route');
  if (recordRoute) {
    window.setTimeout(() => recordRoute.classList.add('is-unstable'), 20000);
  }

  if (recordSearch) {
    const input = recordSearch.querySelector('input');
    const result = recordSearch.querySelector('[data-search-result]');

    recordSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = input.value.trim().replace(/[\s\u3000]+/g, '');
      const matched = query.includes('Rルート');
      result.textContent = matched ? '該当する機密記録あり。' : '該当記録なし。';
      result.classList.toggle('is-match', matched);
      if (matched) window.location.href = 'truth.html';
    });
  }
})();
