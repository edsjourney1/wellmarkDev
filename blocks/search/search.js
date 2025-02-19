
export default async function decorate(block) {
  const thisBlock = block;
  console.log('============thisBlock', thisBlock);
  thisBlock.classList.add('search-hidden');
  thisBlock.setAttribute('aria-hidden', true);
}
