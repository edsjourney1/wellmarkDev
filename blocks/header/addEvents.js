import { closeAllBlogMenuItems } from './formBlogMenu.js';
import { loginEventFn } from './loginEvents.js';
import { navClicks, closeAllNavItems } from './navClicks.js';

const bodyElem = document.querySelector('body');
const activeCls = 'siteheader-active';

export const addEvents = (thisBlock, navMaskEl, searchMaskEl, loginMaskEl) => {
  const loginCtaWrapEl = thisBlock.querySelector(
    '.siteheader-login-wrapper-cta'
  );
  const loginCtaEl = loginCtaWrapEl?.querySelector('button');
  const loginWrapEl = thisBlock.querySelector(
    '.siteheader-login-wrapper-outer'
  );

  const navCtaEl = thisBlock.querySelector(
    '.siteheader-mobile-wrapper > button'
  );
  const searchParent = document.querySelector(
    '.siteheader-search-wrapper > .siteheader-search-inner'
  );
  const searchCtaEl = document.querySelector(
    '.siteheader-search-wrapper > button'
  );

  searchCtaEl.addEventListener('click', () => {
    if (navCtaEl.classList.contains(activeCls)) {
      navCtaEl.dispatchEvent(new MouseEvent('click'));
    }
    if (searchParent.classList.contains(activeCls)) {
      searchCtaEl.classList.remove(activeCls);
      searchParent.classList.remove(activeCls);
      searchMaskEl.classList.remove(activeCls);
      bodyElem.classList.remove('siteheader-search-active');
    } else {
      searchCtaEl.classList.add(activeCls);
      searchParent.classList.add(activeCls);
      searchMaskEl.classList.add(activeCls);
      bodyElem.classList.add('siteheader-search-active');
    }
  });

  const navEl = thisBlock.querySelector('.siteheader-mobile-wrapper > nav');
  const navArr = [];

  const l0Links = Array.from(
    thisBlock.querySelectorAll('.siteheader-has-subnav')
  );
  l0Links.forEach((link, index) => {
    navArr.push({
      index,
      isActive: false,
      link,
      subnav: link.nextElementSibling,
    });
  });
  navArr.forEach((liObj) => {
    liObj.link.addEventListener('click', (event) => {
      event.preventDefault();
      navClicks(liObj, navArr, navMaskEl);
    });
  });

  navCtaEl?.addEventListener('click', () => {
    if (searchCtaEl.classList.contains(activeCls)) {
      searchCtaEl.dispatchEvent(new MouseEvent('click'));
    }
    if (navCtaEl.classList.contains(activeCls)) {
      navCtaEl.classList.remove(activeCls);
      navEl.classList.remove(activeCls);
      bodyElem.classList.remove('siteheader-nav-active');
      closeAllNavItems(navArr, navMaskEl);
    } else {
      bodyElem.classList.add('siteheader-nav-active');
      navCtaEl.classList.add(activeCls);
      navEl.classList.add(activeCls);
    }
  });

  const loginWrapper = document.querySelector('.siteheader-login-wrapper');
  const loginWrapperCta = loginWrapper.querySelector('.siteheader-login-wrapper-cta');

  window.addEventListener('scroll', () => {
    if (loginWrapperCta?.classList.contains(activeCls)) {
      loginWrapperCta?.querySelector(':scope > button').dispatchEvent(new MouseEvent('click'));
    }
    if (document.querySelector(`.siteheader-nav-mask.${activeCls}`)) {
      closeAllNavItems(navArr, navMaskEl);
    }
    if (document.querySelector('.siteheader-blog-has-subnav-active')) {
      closeAllBlogMenuItems();
    }
  });

  document.addEventListener('click', (event) => {
    [
      document.querySelector(`.siteheader-mobile-wrapper nav > ul.${activeCls}`),
      document.querySelector(`.siteheader-login-wrapper.${activeCls}`),
      document.querySelector(`.siteheader-blog-nav ul.siteheader-blog-has-subnav-active`),
    ].forEach((container) => {
      if (container && (container !== event.target && !container.contains(event.target))) {
        closeAllNavItems(navArr, navMaskEl);
        closeAllBlogMenuItems();
        if (loginWrapper.querySelector('.siteheader-login-wrapper-cta').classList.contains(activeCls)) {
          loginWrapper.querySelector('.siteheader-login-wrapper-cta > button').dispatchEvent(new MouseEvent('click'));
        }
      }
    });
  });

  loginEventFn(
    loginCtaEl,
    loginCtaWrapEl,
    loginWrapEl,
    navArr,
    navMaskEl,
    loginMaskEl
  );
};
