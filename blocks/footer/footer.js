/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // load footer as fragment

  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  if (fragment.firstElementChild) {
    const footerMain = fragment.firstElementChild.children[0];
    const footerProvider = fragment.firstElementChild.children[1];
    const footerMedAdv = fragment.firstElementChild.children[2];
    if (window.location.pathname.includes('/providers/')) {
      footer.append(footerProvider);
    } else if (window.location.pathname.includes('/shop/')) {
      footer.append(footerMedAdv);
    } else {
      footer.append(footerMain);
    }
  }

  const contactLiArr = footer.querySelectorAll('.contact-div ul > li > a');
  let hrefArr = [];
  const blogObj = {};

  contactLiArr.forEach((link) => {
    hrefArr = link.getAttribute('href').split('/');
    if (hrefArr.indexOf('blue') !== -1) {
      blogObj.blue = link.parentNode;
    } else if (hrefArr.indexOf('blue-at-work') !== -1) {
      blogObj.blueatwork = link.parentNode;
    } else if (hrefArr.indexOf('blueink') !== -1) {
      blogObj.blueink = link.parentNode;
    }
  });

  const urlArr = (new URL(window.location.href).pathname || '').split('/');
  if (urlArr.indexOf('blue') !== -1) {
    blogObj.blueatwork?.classList.add('footer-li-hidden');
    blogObj.blueink?.classList.add('footer-li-hidden');
  } else if (urlArr.indexOf('blue-at-work') !== -1) {
    blogObj.blue?.classList.add('footer-li-hidden');
    blogObj.blueink?.classList.add('footer-li-hidden');
  } else if (urlArr.indexOf('blueink') !== -1) {
    blogObj.blue?.classList.add('footer-li-hidden');
    blogObj.blueatwork?.classList.add('footer-li-hidden');
  }

  block.append(footer);
}
