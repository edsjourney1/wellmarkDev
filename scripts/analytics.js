/* eslint-env browser */

// check if url is relative
function isRelativeURL(linkHref) {
  const url = new URL(linkHref, window.location.href);
  return url.origin === window.location.origin;
}

const isOutboundLink = (linkHref) => {
  let outboundLink = false;

  if (isRelativeURL(linkHref)) {
    outboundLink = false;
  } else {
    const linkURL = new URL(linkHref);
    if (linkURL.hostname !== window.location.hostname) {
      outboundLink = true;
    }
  }
  return outboundLink;
};

const callToActionEvent = (linkHref, event) => {
  let ctaElementType = event.target.href;
  if (isOutboundLink(linkHref)) {
    const url = new URL(linkHref, window.location.href);
    ctaElementType = url.href;
  }
  const ctaClickText = event.target.innerText || event.currentTarget.text;
  const ctaLocation = window.location.href;
  const ctaType = 'button';
  const ctaDataInfo = '';
  const ctaClickImageAltTxt = '';
  window.adobeDataLayer.push({
    event: 'call_to_action',
    eventData: {
      cta_element_type: ctaElementType,
      cta_click_text: ctaClickText,
      cta_data_info: ctaDataInfo,
      cta_click_image_alt_text: ctaClickImageAltTxt,
      cta_location: ctaLocation,
      cta_type: ctaType,
      /* nav_menu_type: null,
      nav_click_image_alt_text: null,
      nav_click_text: null,
      link_classes: null,
      link_domain: null,
      link_url: null,
      link_id: null,
      outbound: null,
      modal_action: null,
      modal_location: null,
      modal_name: null,
      modal_impression: null, */
    },
  });
};

function navigationEvent(linkHref, event) {
  const navClickText = event.target.innerText || event.currentTarget.text;
  window.adobeDataLayer.push({
    event: 'navigation',
    eventData: {
      nav_menu_type: 'link',
      nav_click_image_alt_text: '',
      nav_click_text: navClickText,
      /* link_classes: null,
      link_domain: null,
      link_url: null,
      link_id: null,
      outbound: null,
      cta_element_type: null,
      cta_click_text: null,
      cta_data_info: null,
      cta_click_image_alt_text: null,
      cta_location: null,
      cta_type: null,
      modal_action: null,
      modal_location: null,
      modal_name: null,
      modal_impression: null, */
    },
  });
}

function clickEvent(linkHref, event) {
  const linkClasses = Array.from(event.currentTarget.classList).join(' ');
  const linkURL = new URL(linkHref);
  const linkUrl = linkURL.href;
  const linkDomain = linkURL.hostname;
  const linkID = event.currentTarget.getAttribute('id');
  window.adobeDataLayer.push({
    event: 'click',
    eventData: {
      link_classes: linkClasses,
      link_domain: linkDomain,
      link_url: linkUrl,
      link_id: linkID || 'undefined',
      outbound: 'true',
      /* nav_menu_type: null,
      nav_click_image_alt_text: null,
      nav_click_text: null,
      cta_element_type: null,
      cta_click_text: null,
      cta_data_info: null,
      cta_click_image_alt_text: null,
      cta_location: null,
      cta_type: null,
      modal_action: null,
      modal_location: null,
      modal_name: null,
      modal_impression: null, */
    },
  });
}

function modalOpenEvent() {
  window.adobeDataLayer.push({
    event: 'modal',
    eventData: {
      modal_action: 'open',
      modal_location: window.location.href,
      modal_name: '',
      modal_impression: '1',
      /* link_classes: null,
      link_domain: null,
      link_url: null,
      link_id: null,
      outbound: null,
      nav_menu_type: null,
      nav_click_image_alt_text: null,
      nav_click_text: null,
      cta_element_type: null,
      cta_click_text: null,
      cta_data_info: null,
      cta_click_image_alt_text: null,
      cta_location: null,
      cta_type: null, */
    },
  });
}

function modalCloseEvent() {
  window.adobeDataLayer.push({
    event: 'modal',
    eventData: {
      modal_action: 'close',
      modal_location: window.location.href,
      modal_name: '',
      modal_impression: '0',
      /* link_classes: null,
      link_domain: null,
      link_url: null,
      link_id: null,
      outbound: null,
      nav_menu_type: null,
      nav_click_image_alt_text: null,
      nav_click_text: null,
      cta_element_type: null,
      cta_click_text: null,
      cta_data_info: null,
      cta_click_image_alt_text: null,
      cta_location: null,
      cta_type: null, */
    },
  });
}

function socialMediaAnalytics(linkHref) {
  const linkURL = new URL(linkHref);
  const linkDomain = linkURL.hostname;
  window.adobeDataLayer.push({
    event: 'social',
    eventData: {
      social_network: linkDomain,
      social_share: window.location.href,
      social_clickthrough: '',
      /*  modal_action: null,
      modal_location: null,
      modal_name: null,
      modal_impression: null,
      link_classes: null,
      link_domain: null,
      link_url: null,
      link_id: null,
      outbound: null,
      nav_menu_type: null,
      nav_click_image_alt_text: null,
      nav_click_text: null,
      cta_element_type: null,
      cta_click_text: null,
      cta_data_info: null,
      cta_click_image_alt_text: null,
      cta_location: null,
      cta_type: null, */
    },
  });
}

const isSocialLink = (linkHref) => {
  const socialMediaDomains = [
    'facebook.com',
    'twitter.com',
    'linked.com',
    'instagram.com',
    'youtube.com',
    'x.com',
  ];

  const linkURL = new URL(linkHref);
  const linkDomain = linkURL.hostname;
  return socialMediaDomains.some((domain) => linkDomain.includes(domain));
};

function buttonAnalytics() {
  const buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const linkHref = event.currentTarget.getAttribute('href');
      if (
        button.hasAttribute('data-toggle')
        && button.getAttribute('data-toggle') === 'modal'
      ) {
        modalOpenEvent();
      }
      if (
        button.hasAttribute('data-dismiss')
        && button.getAttribute('data-dismiss') === 'modal'
      ) {
        modalCloseEvent();
      }
      if (linkHref) {
        if (isOutboundLink(linkHref)) {
          if (isSocialLink(linkHref)) {
            socialMediaAnalytics(linkHref);
          } else {
            clickEvent(linkHref, event);
          }
        } else if (
          !isOutboundLink(linkHref)
          && button.classList.contains('button')
        ) {
          callToActionEvent(linkHref, event);
        } else if (
          !button.classList.contains('button')
          && !isOutboundLink(linkHref)
        ) {
          navigationEvent(linkHref, event);
        }
      }
    });
  });
}
function modalAnalytics() {
  const headerExpand = document.querySelectorAll('header .collapse-bar-menu');
  headerExpand.forEach((buttonExpand) => {
    buttonExpand.addEventListener('click', () => {
      modalOpenEvent();
    });
  });

  const headerCollapse = document.querySelectorAll('header .collapse-bar-close');
  headerCollapse.forEach((buttonCollapse) => {
    buttonCollapse.addEventListener('click', () => {
      modalCloseEvent();
    });
  });
}
function analyticsMain() {
  buttonAnalytics();
  modalAnalytics();
}

export {
  // eslint-disable-next-line import/prefer-default-export
  analyticsMain,
};
