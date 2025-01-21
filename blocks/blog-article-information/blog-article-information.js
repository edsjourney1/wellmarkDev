export default function decorate(block) {
  const blockChild = block.children[0].children[0];
  const dates = block.children[0].children[0].querySelector('p');
  if (dates) {
    dates.parentElement.classList.add('date');
  }
  setTimeout(() => {
    // Check if block and its children exist
    if (block && block.children && block.children[0] && block.children[0].children[1]) {
      const date = block.children[0].children[1].querySelector('p');
      // Check if date element exists
      if (date) {
        const modifiedDate = window.BlogLastModified;
        // Check if modifiedDate exists
        if (modifiedDate) {
          const spanmodified = document.createElement('span');
          spanmodified.innerHTML = modifiedDate;
          date.append(spanmodified);
          // Check if blockChild exists before appending
          if (blockChild) {
            blockChild.append(date);
          }
        } else {
          const spanNull = document.createElement('span');
          spanNull.innerHTML = 'MM/DD/YYYY';
          date.append(spanNull);
          // Check if blockChild exists before appending
          if (blockChild) {
            blockChild.append(date);
          }
        }
      }
    }
  }, 500);
  const author = block.children[0].children[2].querySelector('p');
  if (author) {
    author.parentElement.classList.add('author');
  }
  const linkPara = block.children[1].children[0].querySelector('p');
  if (linkPara) {
    linkPara.parentElement.classList.add('article-link');
    const links = linkPara.querySelectorAll('a');
    links.forEach((link) => {
      if (link.href || link.textContent.trim()) {
        const anchorPtag = document.createElement('p');
        anchorPtag.append(link);
        linkPara.parentElement.append(anchorPtag);
      } else {
        // Remove the empty <a> tag
        link.remove();
      }
    });
  }
  const audio = block.children[2].children[0].querySelector('p');
  if (audio) {
    audio.parentElement.classList.add('article-audio');
  }
}
