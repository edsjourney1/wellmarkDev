import sampleData from './sample-data.js';

const searchParent = document.querySelector('.search-container');
const allSearchItems = Array.from(document.querySelectorAll('.search-wrapper'));
const allSearchBlocks = [];

const buildSearchBanner = () => { // bannerBlock, bannerEl, searchGrid
  console.log('===========bannerBlock', sampleData);
  // const [bannerH1, bannerP] = Array.from(bannerBlock.children);

  // bannerEl.append(bannerH1.querySelector(':scope > div'));
  // searchGrid.append(bannerEl);
};

const initSearch = () => {
  const searchWrap = document.createElement('section');
  const searchGrid = document.createElement('div');
  const searchLeftCol = document.createElement('div');
  const searchRightCol = document.createElement('div');
  searchWrap.classList.add('search-grid-wrapper');
  searchGrid.classList.add('search-grid');
  // searchBanner.innerHTML = '<div class="search-banner-section"></div>';

  buildSearchBanner(allSearchBlocks[0], searchGrid);

  searchGrid.append(searchLeftCol);
  searchGrid.append(searchRightCol);
  searchWrap.append(searchGrid);
  searchParent.append(searchWrap);
};

export default async function decorate(block) {
  const thisBlock = block;
  // thisBlock.classList.add('search-hidden');
  // thisBlock.setAttribute('aria-hidden', true);
  allSearchBlocks.push(thisBlock);

  if (allSearchItems.length === allSearchBlocks.length) {
    initSearch();
  }
}
