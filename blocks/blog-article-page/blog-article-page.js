export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
        // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  // const secondchild = block.children[2];

  // Facebook
  const fbtext = document.createElement('button');
  fbtext.classList.add('facebook');
  fbtext.innerHTML = ('facebook');
  // const link = encodeURI(window.location.href);
  const linktext = encodeURI(document.title);
  // fbtext.href = `https://www.facebook.com/share.php?title=${linktext}&u=${link}`;
  // fbtext.setAttribute('href', fbtext);
  block.append(fbtext);

  // window.addEventListener('click', () => {
  //   // const e = document.querySelectorAll('.facebook');
  //   console.log('test');
  //   const url = encodeURIComponent(window.location.href);
  //   window.open(`https://twitter.com/intent/tweet?url=${url}&text=${linktext}`, '_blank');
  // });

  fbtext.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?t=${linktext}&u=${url}&text=${linktext}`, '_blank');
  });
  const twittertext = document.createElement('button');
  twittertext.classList.add('Twitter');
  twittertext.innerHTML = ('Twitter');
  twittertext.addEventListener('click', () => {
    const twitterlink = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${twitterlink}&text=${linktext}`, '_blank');
  });
  const intext = document.createElement('button');
  intext.classList.add('Linkedin');
  intext.innerHTML = ('Linkedin');
  intext.addEventListener('click', () => {
    const inlink = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${inlink}&text=${linktext}`, '_blank');
  });
  const mailtext = document.createElement('button');
  mailtext.classList.add('Mail');
  mailtext.innerHTML = ('Mail');
  mailtext.addEventListener('click', () => {
    const maillink = encodeURIComponent(window.location.href);
    window.open(`mailto:?subject=${document.title}&body=${maillink}`, '_blank');
    // mailtext.href = `mailto:?subject=${document.title}&body=${maillink}`;
  });
  // Twitter
  // const twittertext = document.createElement('a');
  // twittertext.classList.add('Twitter');
  // twittertext.innerHTML = ('Twitter');

  // const twitterlink = encodeURI(window.location.href);
  // console.log('check', twitterlink);
  // twittertext.href = `https://twitter.com/share?url=${twitterlink}&text=${document.title}`;
  // twittertext.href = (`https://twitter.com/intent/tweet?url=${twitterlink}&text=${document.title}`, '_blank');
  // twittertext.href = `http://twitter.com/share?&url=${twitterlink}&text=${document.title}&hashtags=javascript,programming`;
  // twittertext.setAttribute('href', twittertext);
  block.append(twittertext);

  // Linkedin
  // const intext = document.createElement('a');
  // intext.classList.add('Linkedin');
  // intext.innerHTML = ('Linkedin');
  // const inlink = encodeURI(window.location.href);
  // intext.href = `https://www.linkedin.com/sharing/share-offsite/?url=${inlink}`;
  // intext.setAttribute('href', intext);
  block.append(intext);

  // Mail
  // const mailtext = document.createElement('a');
  // mailtext.classList.add('Mail');
  // mailtext.innerHTML = ('Mail');
  // const maillink = encodeURI(window.location.href);
  // mailtext.href = `mailto:?subject=${document.title}&body=${maillink}`;
  // mailtext.setAttribute('href', mailtext);
  block.append(mailtext);
}
