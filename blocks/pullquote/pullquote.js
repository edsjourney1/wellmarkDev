export default async function decorate(block) {
    const children = block.children;
    let quoteEl;
    let infoEl;
    let quote;
    let authorEl;
    let sourceEl;
    if (children.length === 1) {
        quoteEl = children[0];
        quote = quoteEl.querySelector("p");
        quoteEl.remove();
    }
    if (children.length === 2) {
        quoteEl = children[0];
        infoEl = children[1];
        quote = quoteEl.querySelector("p");
        authorEl = infoEl.querySelector("div:first-child");
        sourceEl = infoEl.querySelector("div:last-child");
        quoteEl.remove();
        infoEl.remove();
    }
    const figureEl = document.createElement("figure");
    const blockquoteEl = document.createElement("blockquote");
    blockquoteEl.append(quote);
    figureEl.append(blockquoteEl);
    if (authorEl || sourceEl) {
        const author = authorEl.querySelector("p");
        const source = sourceEl.querySelector("p");
        const figcaptionEl = document.createElement("figcaption");
        const str1 = `${author ? author.innerHTML : ""}`;
        const str2 = source ? `<cite title="${source.innerHTML}">${source.innerHTML}</cite>` : "";
        let str = str1 ? str1 : "";
        str += str2 && str1 ? " in " : "";
        str += str2 ? str2 : "";
        figcaptionEl.innerHTML = str;
        figureEl.append(figcaptionEl);
    }
    const startSymbol = document.createElement("div");
    const endSymbol = document.createElement("div");
    startSymbol.classList.add("pullquote-bar");
    endSymbol.classList.add("pullquote-bar");
    startSymbol.innerHTML = `<span class="icon icon-solid--quote-left">
        <i class="fa-solid fa-quote-left" data-icon-name="solid--quote-left"></i></span>`;
    endSymbol.innerHTML = `<span class="icon icon-solid--quote-right">
        <i class="fa-solid fa-quote-right" data-icon-name="solid--quote-right"></i></span>`;
    block.append(startSymbol);
    block.append(figureEl);
    block.append(endSymbol);
}
