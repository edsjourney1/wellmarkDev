import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  getMetadata,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
  sampleRUM,
  loadPublishedDate,
  loadExternalPopup,
  loadBlogSocial,
} from './aem.js';
import { decorateExternalImages } from './externalImage.js';

// eslint-disable-next-line import/no-cycle
// import initAccessibilityMode from
// '../tools/sidekick/plugins/accessibility-mode/accessibility-mode.js';
// let isA11yModeActive = false;

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */

function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (
    // eslint-disable-next-line no-bitwise
    h1 && picture && h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING
  ) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * create an element.
 * @param {string} tagName the tag for the element
 * @param {object} props properties to apply
 * @param {string|Element} html content to add
 * @returns the element
 */

export function createElement() { // tagName, props, html
  return null;
  //   const elem = document.createElement(tagName);
  //   if (props) {
  //     Object.keys(props).forEach((propName) => {
  //       const val = props[propName];
  //       if (propName === 'class') {
  //         const classesArr = typeof val === 'string' ? [val] : val;
  //         elem.classList.add(...classesArr);
  //       } else {
  //         elem.setAttribute(propName, val);
  //       }
  //     });
  //   }
  //   if (html) {
  //     const appendEl = (el) => {
  //       if (el instanceof HTMLElement || el instanceof SVGElement) {
  //         elem.append(el);
  //       } else {
  //         elem.insertAdjacentHTML('beforeend', el);
  //       }
  //     };

  //     if (Array.isArray(html)) {
  //       html.forEach(appendEl);
  //     } else {
  //       appendEl(html);
  //     }
  //   }

  //   return elem;
  // }

  // const accessibilityMode = async (e) => {
  //   const pluginButton = e.target.shadowRoot.querySelector('plugin-action-bar')
  //     ? e.target.shadowRoot
  //       .querySelector('plugin-action-bar')
  //       .shadowRoot.querySelector('.accessibility-mode')
  //     : e.target.shadowRoot.querySelector('.accessibility-mode > button');

  //   isA11yModeActive = !isA11yModeActive;

  //   if (isA11yModeActive) {
  //     pluginButton.style.backgroundColor = '#4e9a17';

  //     pluginButton.style.color = '#fff';
  //   } else {
  //     pluginButton.removeAttribute('style');
  //   }

  //   document.querySelector('body').classList.toggle('accessibility-mode-active');

  //   await initAccessibilityMode(isA11yModeActive);
  // };

  // let sk = document.querySelector('aem-sidekick') || document.querySelector('helix-sidekick');

  // if (sk) {
  //   sk.addEventListener('custom:accessibility-mode', accessibilityMode);
  // } else {
  //   document.addEventListener(
  //     'sidekick-ready',
  //     () => {
  //       sk = document.querySelector('aem-sidekick') || document.querySelector('helix-sidekick');
  //       sk.addEventListener('custom:accessibility-mode', accessibilityMode);
  //     },
  //     {
  //       once: true,
  //     },
  //   );
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}
function autolinkModals(doc) {
  doc.addEventListener('click', async (e) => {
    const origin = e.target.closest('a');
    if (origin && origin.href && origin.href.includes('/modals/')) {
      e.preventDefault();
      const { openModal } = await import(
        `${window.hlx.codeBasePath}/blocks/modal/modal.js`
      );
      openModal(origin.href);
    }
  });
}
/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}
/** Order and Unorder list */
function orderlist() {
  const orderedWrapper = document.querySelector('.heading-ordered');
  const unorderedWrapper = document.querySelector('.heading-unordered');
  if (orderedWrapper) {
    const orderedDiv = orderedWrapper.children[0];
    const ol = document.createElement('ol');
    const orderChildren = [...orderedDiv.children];
    orderChildren.forEach((child, index) => {
      if (/^H[2-6]$/.test(child.tagName)) {
        const li = document.createElement('li');
        li.appendChild(child); // Append the heading
        // Append the following elements (p or img) until the next heading or end of children
        while (orderChildren[index + 1] && !/^H[2-6]$/.test(orderChildren[index + 1].tagName)) {
          li.appendChild(orderChildren[index + 1]);
          // eslint-disable-next-line no-plusplus, no-param-reassign
          index++;
        }
        ol.appendChild(li);
        orderedDiv.appendChild(ol);
      }
    });
  }
  if (unorderedWrapper) {
    const unorderedDiv = unorderedWrapper.children[0];
    const ul = document.createElement('ul');
    // const unorderChildren = [...unorderedDiv.children];
    const unorderChildren = Array.from(unorderedDiv.children);
    unorderChildren.forEach((child, index) => {
      if (/^H[2-6]$/.test(child.tagName)) {
        const li = document.createElement('li');
        li.appendChild(child); // Append the heading
        // Append the following elements (p or img) until the next heading or end of children
        while (unorderChildren[index + 1] && !/^H[2-6]$/.test(unorderChildren[index + 1].tagName)) {
          li.appendChild(unorderChildren[index + 1]);
          // eslint-disable-next-line no-plusplus, no-param-reassign
          index++;
        }
        ul.appendChild(li);
        unorderedDiv.appendChild(ul);
      }
    });
  }
}
/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
  decorateExternalImages(main);
  decorateExternalImages(main, '//External Image//');
  orderlist();
}
/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  doc.documentElement.lang = 'en';
  loadPublishedDate();
  decorateTemplateAndTheme();
  if (getMetadata('breadcrumbs').toLowerCase() === 'true') {
    doc.body.dataset.breadcrumbs = true;
  }
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    doc.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }
  sampleRUM.enhance();
  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}
/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  autolinkModals(doc);
  const main = doc.querySelector('main');
  await loadSections(main);
  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();
  loadHeader(doc.querySelector('header'));
  loadExternalPopup(doc.querySelector('body'));
  loadBlogSocial(doc.querySelector('body'));
  loadFooter(doc.querySelector('footer'));
  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
}
/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}
async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}
loadPage();
