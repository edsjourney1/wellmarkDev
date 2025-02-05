const formTheQuote = (child1, child2) => {
  const col = document.createElement("div");
  // child1.parentNode.insertBefore(col, child1);

  // child1.setAttribute('aria-hidden', true);
  // // child1.classList.add('quote-v2-hidden');
  // child2.setAttribute('aria-hidden', true);
  // // child2.classList.add('quote-v2-hidden');

  // col.appendChild(child1);
  // col.appendChild(child2);

  console.log("==========children", child1, child2);

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
    for(let i=0; i<children.length; i+=2) {
      quoteMainArr.push(formTheQuote(children[i], children[i+1], 'col'));
      // const gridCol = document.createElement('div');
      // gridCol.className = 'quote-v2-col';
      // if (children[i] && children[i+1]) {
      //   quoteMainArr.push(formTheQuote(gridCol, children[i], children[i+1]));
      // }
    }
  } else {
    quoteMainArr.push(formTheQuote(children[0], children[1], 'article'));
    // const gridCol = document.createElement('div');
    // gridCol.className = 'quote-v2-article';
    // if (children[0] && children[1]) {
    //   quoteMainArr.push(formTheQuote(gridCol, children[0], children[1]));
    // }
  }

  quoteMainArr.forEach((col) => {
    console.log("-------------col", col);
    const child1 = col.children[0];
    const child2 = col.children[1];

    const figureEl = document.createElement('figure');
    const blockquoteEl = document.createElement('blockquote');
    blockquoteEl.append(child1);

    col.append(figureEl);
  });
}
