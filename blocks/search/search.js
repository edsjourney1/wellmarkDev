import sampleData from './sample-data.js';
const searchParent = document.querySelector('.search-container');
const allSearchItems = Array.from(document.querySelectorAll('.search-wrapper'));
const allSearchBlocks = [];

const initSearch = () => {
  console.log('==============sampleData', sampleData);
  const searchGrid = document.querySelector('section');
};

export default async function decorate(block) {
  const thisBlock = block;
  thisBlock.classList.add('search-hidden');
  thisBlock.setAttribute('aria-hidden', true);
  allSearchBlocks.push(thisBlock);

  if (allSearchItems.length === allSearchBlocks.length) {
    initSearch();
  }
}
