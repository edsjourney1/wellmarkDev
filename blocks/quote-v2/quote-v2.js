const formTheQuote = (child1, child2, clsName) => {
  const col = document.createElement('div');
  col.className = `quote-v2-${clsName}`;
  child1.parentNode.insertBefore(col, child1);

  col.appendChild(child1);
  col.appendChild(child2);

  return col;
};

export default async function decorate(block) {
  const thisBlock = block;
  const isGrid = thisBlock.classList.contains('quote-v2-grid-4-col')
    || thisBlock.classList.contains('quote-v2-grid-3-col')
    || thisBlock.classList.contains('quote-v2-grid-2-col');

  const children = Array.from(thisBlock.children);
  const quoteMainArr = [];
  if (isGrid) {
    for (let i = 0; i < children.length; i += 2) {
      quoteMainArr.push(formTheQuote(children[i], children[i+1], 'col'));
    }
  } else {
    quoteMainArr.push(formTheQuote(children[0], children[1], 'article'));
  }

  quoteMainArr.forEach((col) => {
    const child1 = col.children[0];
    const child2 = col.children[1];

    const figureEl = document.createElement('figure');
    const blockquoteEl = document.createElement('blockquote');
    const iconEl = document.createElement('span');
    iconEl.className='icon icon-solid--quote-left';
    iconEl.innerHTML = '<i class="fa-solid fa-quote-left" data-icon-name="solid--quote-left"></i>';

    blockquoteEl.innerHTML = child1.innerHTML;

    // let [blockquoteChild, imgChild] = Array.from(blockquoteEl.children);
    let blockquoteChild = Array.from(blockquoteEl.children)[0];

    if (blockquoteEl.children[0].querySelector('picture')) {
      blockquoteChild = Array.from(blockquoteEl.children)[1];
      // imgChild = blockquoteEl.children[0];
    }
    blockquoteChild.insertBefore(iconEl, blockquoteEl.querySelector('p'));
    figureEl.appendChild(blockquoteEl);

    child1.setAttribute('aria-hidden', true);
    child1.classList.add('quote-v2-hidden');
    child2.setAttribute('aria-hidden', true);
    child2.classList.add('quote-v2-hidden');

    const author = child2.children[0].querySelector('p');
    const source = child2.children[1].querySelector('p');
    const figcaptionEl = document.createElement('figcaption');
    const str1 = `${author ? author.innerHTML : ''}`;
    const str2 = source ? `<cite title='${source.innerHTML}'>${source.innerHTML}</cite>` : '';
    let str = str1;
    if (str1 && str2) {
      str += ' in ';
    }
    str += str2;
    figcaptionEl.innerHTML = str;
    figureEl.append(figcaptionEl);

    const quoteImg = figureEl.querySelector('picture');

    if (quoteImg) {
      const pictureDiv = document.createElement('div');
      pictureDiv.classList.add('quote-v2-img');
      const pictureInnerDiv = document.createElement('div');
      pictureInnerDiv.append(quoteImg.cloneNode(true));
      pictureDiv.append(pictureInnerDiv);
      quoteImg.setAttribute('aria-hidden', true);
      if (blockquoteEl.children[0].querySelector('picture')) {
        col.append(pictureDiv);
        col.append(figureEl);
      } else {
        col.append(figureEl);
        col.append(pictureDiv);
      }
    } else {
      col.append(figureEl);
    }
  });
}
