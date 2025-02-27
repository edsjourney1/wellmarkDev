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
* Returns a picture element with webp and fallbacks
* @param {string} src The image URL
* @param {string} [alt] The image alternative text
* @param {boolean} [eager] Set loading attribute to eager
* @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
* @returns {Element} The picture element
*/
const libCreateOptimizedPicture = (
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
  const url = new URL(src, window.location.href);
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  breakpoints.forEach((br) => {
    const source = document.createElement('source');
    if (br.media) source.setAttribute('media', br.media);
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', `${pathname}?width=${br.width}&format=webply&optimize=medium`);
    picture.appendChild(source);
  });

  // fallback
  breakpoints.forEach((br, i) => {
    if (i < breakpoints.length - 1) {
      const source = document.createElement('source');
      if (br.media) source.setAttribute('media', br.media);
      source.setAttribute('srcset', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
      picture.appendChild(source);
    } else {
      const img = document.createElement('img');
      img.setAttribute('loading', eager ? 'eager' : 'lazy');
      img.setAttribute('alt', alt);
      picture.appendChild(img);
      img.setAttribute('src', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
    }
  });
  return picture;
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
  const isAbsoluteUrl = /^https?:\/\//i.test(src);

  // Fallback to createOptimizedPicture if src is not an absolute URL
  if (!isAbsoluteUrl) return libCreateOptimizedPicture(src, alt, eager, breakpoints);

  const url = new URL(src);
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  breakpoints.forEach((br) => {
    const source = document.createElement('source');
    if (br.media) source.setAttribute('media', br.media);
    source.setAttribute('type', 'image/webp');
    const searchParams = new URLSearchParams({ width: br.width, format: 'webply' });
    source.setAttribute('srcset', appendQueryParams(url, searchParams));
    picture.appendChild(source);
  });

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

/**
 * Gets the extension of a URL.
 * @param {string} url The URL
 * @returns {string} The extension
 * @private
 * @example
 * get_url_extension('https://example.com/foo.jpg');
 * // returns 'jpg'
 * get_url_extension('https://example.com/foo.jpg?bar=baz');
 * // returns 'jpg'
 * get_url_extension('https://example.com/foo');
 * // returns ''
 * get_url_extension('https://example.com/foo.jpg#qux');
 * // returns 'jpg'
 */
const getUrlExtension = (url) => {
  const extn = getFileExtension(url);

  if (extn.length) {
    return extn;
  }

  const aaidURL = url.split(/[:]/);
  if (aaidURL.includes('/adobe/assets/urn:aaid')) {
    return '/adobe/assets/urn:aaid';
  }

  return '';
};

const returnExtension = (element) => {
  const ext = getUrlExtension(element.getAttribute('href'));
  const extensionvalidation = ext === '/adobe/assets/urn:aaid' ? true : ext
    && ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext.toLowerCase());
  return { isVisible: extensionvalidation, isaaid: extensionvalidation };
};

/**
 * Checks if an element is an external image.
 * @param {Element} element The element
 * @param {string} externalImageMarker The marker for external images
 * @returns {boolean} Whether the element is an external image
 * @private
 */
const isExternalImage = (element, externalImageMarker) => {
  // if the element is not an anchor, it's not an external image
  if (element.tagName !== 'A') {
    return { isVisible: false, isaaid: false };
  }

  // if the element is an anchor with the external image marker as text content,
  // it's an external image
  if (element.textContent.trim() === externalImageMarker) {
    return { isVisible: true, isaaid: false };
  }

  return returnExtension(element);
};

/*
  * Decorates external images with a picture element
  * @param {Element} ele The element
  * @param {string} deliveryMarker The marker for external images
  * @private
  * @example
  * decorateExternalImages(main, '//External Image//');
  */
const decorateExternalImages = (ele, deliveryMarker) => {
  const extImages = ele.querySelectorAll('a');
  extImages.forEach((extImage) => {
    const extn = getFileExtension(extImage.innerHTML);
    const validatedImage = (extImage.getAttribute('href') || '').indexOf(extImage.innerText) > -1;
    if (validatedImage || extn.length) {
      const externalImgvalidate = isExternalImage(extImage, deliveryMarker);
      if (externalImgvalidate.isVisible) {
        const extImageSrc = extImage.getAttribute('href');
        const extPicture = createOptimizedPicture(extImageSrc);

        /* copy query params from link to img */
        const extImageUrl = new URL(extImageSrc);
        const { searchParams } = extImageUrl;
        extPicture.querySelectorAll('source, img').forEach((child) => {
          if (child.tagName === 'SOURCE') {
            const srcset = child.getAttribute('srcset');
            if (srcset) {
              child.setAttribute(
                'srcset',
                `${externalImgvalidate.isaaid ? extImageSrc : appendQueryParams(new URL(srcset, extImageSrc))}`,
              );
            }
          } else if (child.tagName === 'IMG') {
            const src = child.getAttribute('src');
            if (src) {
              child.setAttribute(
                'src',
                `${externalImgvalidate.isaaid ? extImageSrc : appendQueryParams(new URL(src, extImageSrc), searchParams)}`,
              );
            }
          }
        });
        extImage.parentNode.replaceChild(extPicture, extImage);
      }
    }
  });
};

export default decorateExternalImages;
