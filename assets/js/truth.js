(() => {
  'use strict';

  const shareButton = document.querySelector('[data-x-share]');
  if (shareButton) {
    const shareText = '観光列車「凪燈ものがたり」を調査しました。\n\n「景色の、その先へ。」\n\n#おかしなサイト\nhttps://x.com/ARG_ObserverX';
    shareButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  }

  const requestForm = document.querySelector('[data-operation-request]');
  if (requestForm) {
    const submitButton = requestForm.querySelector('[data-request-submit]');
    const result = requestForm.querySelector('[data-request-result]');

    requestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (submitButton.disabled) return;
      submitButton.disabled = true;
      submitButton.textContent = '受付済';
      result.hidden = false;
    });
  }
})();
