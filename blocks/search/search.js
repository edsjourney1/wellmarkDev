export default async function decorate(block) {
  const thisBlock = block;
  thisBlock.classList.add('search-hidden');
  thisBlock.setAttribute('aria-hidden', true);
}
