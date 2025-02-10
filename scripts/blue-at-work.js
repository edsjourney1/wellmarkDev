function create_blogarticletitle_0(main, document) {
  const element_1_0 = document.querySelector('.txt-block-inner > header > h1')
    ? document.querySelector('.txt-block-inner > header > h1').innerText
    : '';
  const element_2_0 = document.querySelector('.txt-block-inner > p')
    ? document.querySelector('.txt-block-inner > p').innerText
    : '';
  const element_3_0 = document.querySelector(
    '.col-xs-12.col-md-6.img-block > img'
  );

  const newContainer = document.createElement('div');

  const titleElement = document.createElement('h2');
  titleElement.innerText = element_1_0;
  newContainer.appendChild(titleElement);

  const contentElement = document.createElement('p');
  contentElement.innerText = element_2_0;
  newContainer.appendChild(contentElement);
  document.querySelector('.txt-block-inner > p')
    ? document.querySelector('.txt-block-inner > p').remove()
    : '';
  const imgElement = document.createElement('img');
  imgElement.innerText = element_3_0;
  newContainer.appendChild(imgElement);

  main.prepend(newContainer);
}

function update_A_Btn_Elements(document) {
  const elements = document.querySelectorAll('a, button');
  elements.forEach((element) => {
    let shouldWrap = false;

    if (element.tagName.toLowerCase() === 'a') {
      if (
        element.classList.contains('btn') &&
        element.classList.contains('btn-primary')
      ) {
        element.classList.remove('btn', 'btn-primary');
        element.classList.add('button', 'primary');
        shouldWrap = true;
      }
      if (
        element.classList.contains('btn') &&
        element.classList.contains('btn-primary') &&
        element.classList.contains('btn-lg')
      ) {
        element.classList.remove('btn', 'btn-primary', 'btn-lg');
        element.classList.add('button', 'primary');
        shouldWrap = true;
      }
      if (element.target === '_blank') {
        element.target = '_blank';
      }
      element.title = element.innerText;
    } else if (element.tagName.toLowerCase() === 'button') {
      if (
        element.classList.contains('btn') &&
        element.classList.contains('btn-continue') &&
        element.classList.contains('btn-default') &&
        element.classList.contains('btn-lg') &&
        element.classList.contains('esub-link')
      ) {
        element.classList.remove(
          'btn',
          'btn-continue',
          'btn-default',
          'btn-lg',
          'esub-link'
        );
        element.classList.add('button', 'secondary');
        shouldWrap = true;
      }
    }

    if (shouldWrap) {
      const wrapper = document.createElement('p');
      wrapper.classList.add('button-container');
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
    }
  });
}

function create_relatedarticle_0(main, document) {
  const mainContainer =
    document.querySelector(
      '.container-fluid.mag-closing.hidden-print.mag-closing-blue'
    ) || document.querySelector('.container-fluid.mag-closing.hidden-print');
  if (!mainContainer) {
    return;
  }
  const imgTxtBlocks = mainContainer.querySelectorAll('.imgtxt-block');

  if (!imgTxtBlocks.length) {
    return;
  }

  const cells = [['blog-article-listing-curated'], ['Related Articles'], []];

  imgTxtBlocks.forEach((block) => {
    const link = block.querySelector('a');
    if (link) {
      const url = new URL(link.href);
      const relativePath = url.pathname + url.search + url.hash; // Construct the relative path
      const anchorTag = `<a href='${relativePath}'>${relativePath}</a>`; // Create anchor tag
      cells[2].push(anchorTag);
    }
  });

  const table = WebImporter.DOMUtils.createTable(cells, document);
  mainContainer.insertAdjacentElement('afterend', table);
  mainContainer.remove();
}

function appendBaseURLToInternalLinks(document) {
  const baseURL = 'https://qa--wellmark-nonprod-conf--aemsites.aem.page';
  const links = document.querySelectorAll('a[href^='/']');
  links.forEach((link) => {
    link.href = baseURL + link.getAttribute('href');
  });
}

function createPullQuoteV2(main, document) {
  const primarySections = document.querySelectorAll(
    '.callout.ctr.bg-blue, .callout.f_rt.bg-blue, blockquote .callout, blockquote'
  );
  primarySections.forEach((primarySection) => {
    if (primarySection) {
      // Remove subscribe button sections
      const subscribeButton = primarySection.querySelector('button');
      if (
        subscribeButton &&
        subscribeButton.textContent.includes('Subscribe')
      ) {
        primarySection.remove();
        return;
      }

      let contentHTML = '';
      let quoteeHTML = '';
      let quoteeNameHTML = '';

      primarySection
        .querySelectorAll('h1, h2, h3, h4, h5, h6, p')
        .forEach((element) => {
          if (!element.closest('.quotee')) {
            contentHTML += element.outerHTML + ' ';
          }
        });

      const quoteeElement = primarySection.querySelector('.quotee');
      if (quoteeElement) {
        quoteeHTML = quoteeElement.outerHTML;
        const quoteeNameElement = quoteeElement.querySelector('.quotee-name');
        if (quoteeNameElement) {
          quoteeNameHTML = quoteeNameElement.outerHTML;
          quoteeHTML = quoteeHTML.replace(quoteeNameHTML, '').trim();
        }
      }

      const cells = [
        ['pullquote-v2'],
        [contentHTML.trim()],
        [
          quoteeNameHTML ? quoteeNameHTML.trim() : '',
          quoteeHTML ? quoteeHTML.trim() : '',
        ],
      ];

      const table = WebImporter.DOMUtils.createTable(cells, document);
      primarySection.replaceWith(table);
      console.log(table);
    }
  });
}

function appendIconTextToExternalLinks(document) {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    let span = link.querySelector(
      'span.icon-wmkExternalLinkSmall, span.icon-file-pdf, span.icon-lock, span.icon-mail'
    );

    if (!span) {
      span = link.nextElementSibling;
    }

    if (span && span.classList.contains('icon-wmkExternalLinkSmall')) {
      link.textContent += ':arrow-up-right-from-square:';
    } else if (span && span.classList.contains('icon-file-pdf')) {
      link.textContent += ':regular--file-pdf:';
    } else if (span && span.classList.contains('icon-lock')) {
      link.textContent += ':regular--lock:';
    } else if (span && span.classList.contains('icon-mail')) {
      link.textContent += ':solid--envelope:';
    }
  });
}

function createSectionForMargin(main, document) {
  const cells = [
    ['Section Metadata'],
    ['Style', 'Block-padding-top, block-padding-bottom'],
  ];

  const table = WebImporter.DOMUtils.createTable(cells, document);
  main.appendChild(table);
}

function createMetadataBlock(main, document) {
  const meta = {};
  const title = document.querySelector('title');
  if (title) {
    meta.title = title.innerText.trim();
  }

  const ignoreList = [
    'X-UA-Compatible',
    'viewport',
    'searchForm',
    'q',
    'utf-8',
    'format-detection',
    'apple-mobile-web-app-capable',
    'mobile-web-app-capable',
    'apple-mobile-web-app-status-bar-style',
    'msapplication-TileColor',
    'msapplication-config',
    'msapplication-TileImage',
    'og:image:secure_url',
    'theme-color',
    'VIcurrentDateTime',
  ];

  const metaElements = document.querySelectorAll(
    '[name], [property], [http-equiv], [charset]'
  );

  metaElements.forEach((el) => {
    const key =
      el.getAttribute('name') ||
      el.getAttribute('property') ||
      el.getAttribute('http-equiv') ||
      el.getAttribute('charset');
    const value = el.content || el.getAttribute('content');

    if (key && !ignoreList.includes(key)) {
      const formattedKey = key;
      meta[formattedKey] = value;
    }
  });

  const tagElements = document.querySelectorAll('.btn-tag');

  const tags = Array.from(tagElements)
    .map((tag) => tag.innerText.trim())
    .filter(
      (text, index, self) => text.length > 0 && self.indexOf(text) === index
    )
    .join(', ');

  if (tags) {
    meta.tag = tags;
  }

  tagElements.forEach((tag) => tag.remove());

  const contentBlockDate =
    document.querySelector('.content-block em') ||
    document.querySelector('.content-block p i');
  meta['publish-date'] = '';
  if (contentBlockDate) {
    const dateText = contentBlockDate.innerText.match(
      /([A-Za-z]+\.\s\d{1,2},\s\d{4})|([A-Za-z]+\s\d{1,2},\s\d{4})/
    );

    if (dateText) {
      const parsedDate = new Date(dateText[0]);
      const formattedDate = `${(parsedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${parsedDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${parsedDate.getFullYear()}`;
      meta['publish-date'] = formattedDate;
      contentBlockDate.remove();
    }
  }

  meta.author = 'Jhon Deo';
  meta['last-updated-date'] = '';
  meta.readingtime = '10 mins';

  meta.template = 'article-page';
  meta.category = 'Health care basics';
  meta['article-search'] = 'Default';

  const block = WebImporter.Blocks.getMetadataBlock(document, meta);
  main.append(block);
  return meta;
}

function replaceTable(document) {
  const tables = document.querySelectorAll('table.table');
  tables.forEach((existingTable) => {
    const rows = existingTable.querySelectorAll('tr');
    const cells = [['table']];

    rows.forEach((row) => {
      const cellValues = [];
      const cellsInRow = row.querySelectorAll('td, th');
      cellsInRow.forEach((cell) => {
        cellValues.push(cell.innerHTML);
      });
      cells.push(cellValues);
    });

    const wrapperTable = WebImporter.DOMUtils.createTable(cells, document);

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('table-responsive');
    wrapperDiv.appendChild(wrapperTable);

    existingTable.parentNode.replaceChild(wrapperDiv, existingTable);
  });
}

function removeTextFromSrOnly(document) {
  const wordsToRemove = [
    'External Site',
    'External Link',
    'Send Email',
    'Secure Site',
    ' Secure Site',
    'Opens PDF',
    'PDF File',
    'Secure',
  ];
  const srOnlyElements = document.querySelectorAll('.sr-only');

  srOnlyElements.forEach((element) => {
    wordsToRemove.forEach((word) => {
      if (element.innerText.includes(word)) {
        element.innerText = element.innerText.replace(word, '').trim();
      }
    });
  });
}

function replaceVideoOpenerWithTable(document) {
  const videoOpeners = document.querySelectorAll('.video-opener');
  videoOpeners.forEach((videoOpener) => {
    const button = videoOpener.querySelector('button[data-video-url]');
    if (button) {
      const videoUrl = button.getAttribute('data-video-url');
      const img = videoOpener.querySelector('img');
      const cells = [['video-embed(video-embed-youtube)'], []];
      if (img) {
        const imgElement = `<img src='${img.src}' alt='${img.alt}'>`;
        cells[1].push(imgElement + ' ' + videoUrl);
      } else {
        cells[1].push(videoUrl);
      }
      const table = WebImporter.DOMUtils.createTable(cells, document);
      button.replaceWith(table);
      // videoOpener.replaceChild(table, button);
    }
  });
}

function removeImageDesc(document) {
  const infographics = document.querySelectorAll('.infographic');

  infographics.forEach((infographic) => {
    const buttons = infographic.querySelectorAll('button');

    buttons.forEach((button) => {
      const ariaControls =
        button.getAttribute('aria-controls') ||
        button.getAttribute('ariacontrols');
      if (ariaControls) {
        const elementToRemove = infographic.querySelector(`#${ariaControls}`);
        if (elementToRemove) {
          button.parentNode.removeChild(button);
          elementToRemove.remove();
        }
      }
    });
  });
}

function extractContentAndMakeTable(main, document) {
  const h3Styles = [
    'margin-left:15%;margin-right:15%;',
    'margin-left:5%;margin right:5%;',
    'margin-left:15%;margin right:15%;',
    'margin-left:5%;margin-right:5%;',
    'margin-left: 15%; margin-right: 15%;',
  ];

  const pStyles = [
    'margin-left:15%;margin-right:15%;',
    'margin-left:5%;margin right:5%;',
    'margin-left:15%;margin right:15%;',
    'margin-left:5%;margin-right:5%;',
    'margin-left: 15%; margin-right: 15%;',
  ];

  const divStyles = ['margin-bottom:0px', 'margin-bottom: 0px;'];

  const h3Elements = h3Styles.flatMap((style) =>
    Array.from(document.querySelectorAll(`h3[style='${style}']`))
  );
  const pElements = pStyles.flatMap((style) =>
    Array.from(document.querySelectorAll(`p[style='${style}']`))
  );
  const divElements = divStyles.flatMap((style) =>
    Array.from(document.querySelectorAll(`div[style='${style}']`))
  );

  let combinedHTML = '';
  [...h3Elements, ...pElements].forEach((element) => {
    combinedHTML += element.outerHTML + ' ';
  });

  let divHTML = '';
  divElements.forEach((element) => {
    divHTML += element.outerHTML + ' ';
  });

  const cells = [['blog-cta'], [combinedHTML.trim()], [divHTML.trim()]];
  const table = WebImporter.DOMUtils.createTable(cells, document);

  if (h3Elements.length > 0 || pElements.length > 0 || divElements.length > 0) {
    const referenceElement = h3Elements[0] || pElements[0] || divElements[0];
    referenceElement.replaceWith(table);
    [...h3Elements.slice(1), ...pElements, ...divElements].forEach((el) =>
      el.remove()
    );
  }

  console.log(table);
}

function paraForSmall(document) {
  const smallParagraphs = document.querySelectorAll('p.small', 'p > em');
  if (smallParagraphs.length === 0) {
    return;
  }

  const firstP = smallParagraphs[0];
  const hrTop = document.createElement('hr');
  firstP.before(hrTop);

  const lastP = smallParagraphs[smallParagraphs.length - 1];
  const hrBottom = document.createElement('hr');
  lastP.after(hrBottom);

  const cells = [['Section Metadata'], ['styles', 'body-small']];
  const table = WebImporter.DOMUtils.createTable(cells, document);
  hrBottom.before(table);
}

function replaceRegisteredTrademark(document) {
  const textNodes = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    const parent = textNode.parentNode;
    const replacedText = textNode.nodeValue.replace(/®/g, '<sup>®</sup>');
    if (replacedText !== textNode.nodeValue) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = replacedText;
      while (tempDiv.firstChild) {
        parent.insertBefore(tempDiv.firstChild, textNode);
      }
      parent.removeChild(textNode);
    }
  });
}

export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');

    removeTextFromSrOnly(document); // keep this first to remove sr-only class words initally
    removeImageDesc(document);
    update_A_Btn_Elements(document);
    extractContentAndMakeTable(main, document);
    create_relatedarticle_0(main, document);
    create_blogarticletitle_0(main, document);
    createSectionForMargin(main, document);
    createMetadataBlock(main, document);
    createPullQuoteV2(main, document);
    appendIconTextToExternalLinks(document);
    replaceVideoOpenerWithTable(document);
    replaceTable(document);
    paraForSmall(document);
    replaceRegisteredTrademark(document);

    WebImporter.DOMUtils.remove(main, [
      '.header',
      '.footer',
      // '.container-fluid .mag-closing .hidden-print .mag-closing-blue', // Related Articles
      '.social-links',
      // '.tags',
      // '.btn-tag',
      '.modal-content',
      '.embed-responsive .embed-responsive-16by9',
      '.sr-only',
      // '.cat-link',
      '.magnav',
      '.mag-closing-blue',
      '.magsubnav',
      // '.mag-closing',
      '.title',
      '.hidden-lg',
    ]);

    return main;
  },
};
