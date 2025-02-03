export default async function decorate(block) {
  const [quoteEl, infoEl] = block.children;
  let quote;
  let authorEl;
  let sourceEl;
  if (quoteEl && !infoEl) {
    quote = quoteEl.querySelector('p');
    quoteEl.remove();
  }
  if (quoteEl && infoEl) {
    quote = quoteEl.querySelector('p');
    authorEl = infoEl.querySelector('div:first-child');
    sourceEl = infoEl.querySelector('div:last-child');
    quoteEl.remove();
    infoEl.remove();
  }
  const figureEl = document.createElement('figure');
  const blockquoteEl = document.createElement('blockquote');
  blockquoteEl.append(quote);
  figureEl.append(blockquoteEl);
  if (authorEl || sourceEl) {
    const author = authorEl.querySelector('p');
    const source = sourceEl.querySelector('p');
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
  }
  const startSymbol = document.createElement('div');
  const endSymbol = document.createElement('div');
  startSymbol.classList.add('pullquote-v2-bar');
  endSymbol.classList.add('pullquote-v2-bar');
  startSymbol.innerHTML = `<span class='icon icon-solid--quote-left'>
    <i class='fa-solid fa-quote-left' data-icon-name='solid--quote-left'></i></span>`;
  endSymbol.innerHTML = `<span class='icon icon-solid--quote-right'>
    <i class='fa-solid fa-quote-right' data-icon-name='solid--quote-right'></i></span>`;
  block.append(startSymbol);
  block.append(figureEl);
  block.append(endSymbol);
}
