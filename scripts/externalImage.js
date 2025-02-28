/*
  * Appends query params to a URL
  * @param {string} url The URL to append query params to
  * @param {object} params The query params to append
  * @returns {string} The URL with query params appended
  * @private
  * @example
  * appendQueryParams('https://example.com', { foo: 'bar' });
  * // returns 'https://example.com?foo=bar'
*/
const appendQueryParams = (url, params) => {
  const { searchParams } = url;
  params.forEach((value, key) => {
    searchParams.set(key, value);
  });
  url.search = searchParams.toString();
  return url.toString();
};

/**
 * Creates an optimized picture element for an image.
 * If the image is not an absolute URL, it will be passed to libCreateOptimizedPicture.
 * @param {string} src The image source URL
 * @param {string} alt The image alt text
 * @param {boolean} eager Whether to load the image eagerly
 * @param {object[]} breakpoints The breakpoints to use
 * @returns {Element} The picture element
 *
 */
const createOptimizedPicture = (
  src,
  alt = '',
  eager = false,
  breakpoints = [
    { media: '(max-width:480px)', width: '480' },
    { media: '(max-width:1023px)', width: '1023' },
    { media: '(max-width:1200px)', width: '1200' },
    { media: '(max-width:1920px)', width: '1920' },
  ],
) => {
  const url = new URL(src);
  const picture = document.createElement('picture');
  picture.classList.add('eds-asset-image');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  // breakpoints.forEach((br) => {
  //   const source = document.createElement('source');
  //   if (br.media) source.setAttribute('media', br.media);
  //   source.setAttribute('type', 'image/webp');
  //   const searchParams = new URLSearchParams({ width: br.width, format: 'webply' });
  //   source.setAttribute('srcset', appendQueryParams(url, searchParams));
  //   picture.appendChild(source);
  // });

  // fallback
  breakpoints.forEach((br, i) => {
    const searchParams = new URLSearchParams({ width: br.width, format: ext });

    if (i < breakpoints.length - 1) {
      const source = document.createElement('source');
      if (br.media) source.setAttribute('media', br.media);
      source.setAttribute('srcset', appendQueryParams(url, searchParams));
      picture.appendChild(source);
    } else {
      const img = document.createElement('img');
      img.setAttribute('loading', eager ? 'eager' : 'lazy');
      img.setAttribute('alt', alt);
      picture.appendChild(img);
      img.setAttribute('src', appendQueryParams(url, searchParams));
    }
  });

  return picture;
};

const getFileExtension = (url) => {
  const extensionValid = url.split(/[#?]/)[0].split('.').pop().trim();
  const geturlvalid = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extensionValid.toLowerCase());
  return geturlvalid ? extensionValid : '';
};

const getImgDetails = async (url) => {
  const assetId = (url.split('/') || []).find((item) => item.startsWith('urn:aaid:aem:')) || '';
  if (assetId) {
    const resp = await fetch(`https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/${assetId}/metadata`, {
      method: 'GET',
      headers: {
        'If-None-Match': 'string',
      },
    });
    return resp.json();
  }
  return '';
};

const formImageLinks = (extImages) => {
  extImages.forEach((extImage) => {
    const extImageHref = extImage.getAttribute('href') || '';
    const assetSelected = extImageHref.indexOf('/adobe/assets/urn:aaid') > -1;
    const isEMChild = extImage.parentNode && extImage.parentNode.tagName === 'EM';
    if (assetSelected && isEMChild) {
      const associatedImg = extImage.parentNode.previousElementSibling;
      if (associatedImg && associatedImg.classList.contains('eds-asset-image')) {
        const link = document.createElement('a');
        const [linkURL, linkHash] = extImageHref.split('#') || [];
        const [linkTitle, windowType, jumpId] = linkHash?.split('--') || [];
        if (linkTitle) {
          link.title = decodeURIComponent(linkTitle);
        }
        if (windowType === 'new') {
          link.href = linkURL;
          link.target = '_blank';
        } else if (windowType === 'jump' && jumpId) {
          link.href = `#${jumpId}`;
        } else {
          link.href = extImageHref;
        }
        extImage.remove();
        associatedImg.parentNode.insertBefore(link, associatedImg);
        link.append(associatedImg);
      }
    }
  });
};

/*
  * Decorates external images with a picture element
  * @param {Element} ele The element
  * @param {string} deliveryMarker The marker for external images
  * @private
  * @example
  * decorateExternalImages(main, '//External Image//');
  */
const decorateExternalImages = async (ele) => {
  const extImages = Array.from(ele.querySelectorAll('a'));
  await Promise.all(extImages.map(async (extImage) => {
    const extImageHref = extImage.getAttribute('href') || '';
    const assetSelected = extImageHref.indexOf('/adobe/assets/urn:aaid') > -1;
    if (assetSelected) {
      const isEMChild = extImage.parentNode.tagName === 'EM';
      const extn = getFileExtension(extImageHref);
      const strIndex = decodeURIComponent(extImageHref.toLowerCase())
        .indexOf(decodeURIComponent(extImage.innerHTML.toLowerCase()));
      if (strIndex > -1 && extn && !isEMChild) {
        let altAttr = '';
        let altAttrHash = '';
        altAttrHash = decodeURIComponent((new URL(extImageHref).hash || '#').trim().substring(1));

        const metadata = await getImgDetails(extImage.getAttribute('href'));
        altAttr = (metadata?.assetMetadata || {})['dc:title'] || '';

        if (altAttrHash) {
          altAttr = altAttrHash;
        }

        const extPicture = createOptimizedPicture(extImageHref, altAttr);
        extImage.replaceWith(extPicture);
      }
    }
  })).then(() => {
    formImageLinks(extImages);
  });
};

export default decorateExternalImages;
