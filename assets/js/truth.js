(() => {
  'use strict';

  const shareButton = document.querySelector('[data-x-share]');
  if (!shareButton) return;

  const shareText = '観光列車「凪燈ものがたり」を調査しました。\n\n「景色の、その先へ。」\n\n#おかしなサイト\nhttps://x.com/ARG_ObserverX';
  shareButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
})();
