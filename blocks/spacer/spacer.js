export default async function decorate(block) {
  const thisBlock = block;
  const pTag = thisBlock.querySelector('p');
  if (pTag) {
    thisBlock.style.height = `${pTag.innerHTML}px`;
  }
}
