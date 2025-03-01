// function addScript(src, id) {
//   const script = document.createElement('script');
//   script.src = src;
//   if (id) {
//     script.id = id;
//   }
//   document.head.appendChild(script);
// }

// (() => {
//   addScript('//899-BTB-436.mktoweb.com/js/forms2/js/forms2.min.js');
//   //  new line
//   addScript('//pages.wellmark.com/js/forms2/js/forms2.min.js');
//   addScript('https://899-BTB-436.mktoweb.com/rs/899-BTB-436/images/teknkl-formsplus-core-1.0.8.js?version=0', 'teknkl-FormsPlus-Core-1.x');
//   addScript('https://899-BTB-436.mktoweb.com/rs/899-BTB-436/images/teknkl-simpledto-2.0.4.js?version=0', 'teknkl-SimpleDTO-2.x');
// })();

// creation of block for marketo form
export default function decorate(block) {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  const formIdEl = block.querySelector('p');
  if (formIdEl) {
    const authoredFormId = formIdEl.innerHTML.split('_')[1];
    const formId = formIdEl.innerHTML;
    if (authoredFormId) {
      const cForm = document.createElement('form');
      cForm.classList.add('eds-mkto-form');
      const divIDkebab = formIdEl.innerHTML.toLowerCase().replace('_', '-');
      cForm.classList.add(divIDkebab);
      cForm.setAttribute('id', formId);
      block.append(loader);
      block.append(cForm);
      if (window.MktoForms2) {
        window.MktoForms2.loadForm('//899-BTB-436.mktoweb.com', '899-BTB-436', authoredFormId, (form) => {
          const mktoform = form.getFormElem();
          mktoform[0].removeAttribute('style');
          const allchildren = mktoform[0].querySelectorAll('*');
          allchildren.forEach((elm) => {
            elm.removeAttribute('style');
          });
          loader.style.display = 'none';
          mktoform[0].style.display = 'flex';
        });
      }
    }
  }
  // [...block.children].forEach((row) => {
  //   const section = row.querySelector('p');
  //   const divId = section.innerHTML;
  //   const idstringValue = divId.split('_')[1];
  //   const cForm = document.createElement('form');
  //   cForm.classList.add('eds-mkto-form');
  //   const divIDkebab = divId.toLowerCase().replace('_', '-');
  //   cForm.classList.add(divIDkebab);
  //   cForm.setAttribute('id', divId);
  //   cForm.setAttribute('style', 'display: none;');
  //   section.insertAdjacentElement('afterend', cForm);
  //   setTimeout(() => {
  //     const formId = parseInt(idstringValue, 10);
  //     window.MktoForms2.loadForm('//899-BTB-436.mktoweb.com', '899-BTB-436', formId);
  //     window.MktoForms2.loadForm('//pages.wellmark.com', '464-UUV-172', formId);
  //     window.MktoForms2.whenReady((prop) => {
  //       const mktoform = prop.getFormElem();
  //       mktoform[0].removeAttribute('style');
  //       const allchildren = mktoform[0].querySelectorAll('*');
  //       allchildren.forEach((elm) => {
  //         elm.removeAttribute('style');
  //       });
  //       loader.style.display = 'none';
  //       mktoform[0].style.display = 'flex';
  //     });
  //   }, 1000);
  // });
  // if (document.querySelector('.eds-mkto-form')) {
  //   document.querySelector('.eds-mkto-form').insertAdjacentElement('beforebegin', loader);
  // }
}
