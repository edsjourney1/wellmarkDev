import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate() {
  // block
  // const thisBlock = block;
  const bodyEl = document.querySelector('body');
  const popupMeta = getMetadata('/content-fragments/external-popup');
  const popupPath = popupMeta
    ? new URL(popupMeta, window.location).pathname
    : '/content-fragments/external-popup';
  const fragment = await loadFragment(popupPath);
  const bodyElem = document.querySelector('body');

  const [dialogHeader, dialogFooter] = Array.from(fragment?.querySelector('.external-popup')?.children);

  const externalDialogEl = document.createElement('dialog');
  const externalDialogClose = document.createElement('button');
  const externalDialogContinue = document.createElement('a');
  externalDialogEl.classList.add('external-popup');
  externalDialogClose.setAttribute('type', 'button');
  externalDialogContinue.classList.add('external-popup-link');

  externalDialogEl.innerHTML = dialogHeader?.children[0]?.innerHTML;
  externalDialogClose.innerHTML = dialogHeader?.children[1]?.querySelector('p')?.innerHTML;
  externalDialogContinue.innerHTML = dialogFooter?.children[0]?.querySelector('p')?.innerHTML;

  externalDialogEl.append(externalDialogContinue);
  externalDialogEl.append(externalDialogClose);

  bodyElem.append(externalDialogEl);

  setTimeout(() => {
    const links = document.querySelectorAll('a');
    let isExternalURL;
    let href = '';

    links.forEach((link) => {
      href = link.getAttribute('href');
      isExternalURL = false;
      if (href
        && href.length > 0
        && !href.startsWith('/')
        && !href.startsWith('#')) {
        isExternalURL = new URL(link.getAttribute('href')).origin !== window.location.origin;
      }
      if (isExternalURL) {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          externalDialogEl.showModal();
          externalDialogContinue.setAttribute('href', link.getAttribute('href'));
          bodyEl.classList.add('external-popup-open');
        });
      }
      href = null;
    });

    externalDialogEl.addEventListener('click', () => {
      externalDialogEl.close();
      bodyEl.classList.remove('external-popup-open');
    });
  }, 1500);
}
