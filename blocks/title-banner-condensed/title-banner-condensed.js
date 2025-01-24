export default function decorate(block) {
  const parentEle = block.parentElement.parentElement;
  parentEle.classList.add('blue-550');
  const titleClass = block.children[0].children[0].querySelector('p');
  if (titleClass) {
    titleClass.classList.add('title');
  }
  const descrClass = block.children[0].children[1].querySelector('p');
  if (descrClass) {
    descrClass.classList.add('description');
  }
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('tbnr-maindiv');
  const textContDiv = document.createElement('div');
  textContDiv.classList.add('tbnr-textcont');
  if (titleClass) {
    textContDiv.append(titleClass);
  }
  if (descrClass) {
    textContDiv.append(descrClass);
  }
  const buttonDiv = block.children[1].children[0].querySelectorAll('p');
  if (buttonDiv.length > 0) {
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('tbnr-btn');
    // Iterate over the NodeList and check/add the class
    buttonDiv.forEach((button) => {
      if (!button.classList.contains('button-container')) {
        button.classList.add('button-container');
      }
      btnDiv.append(button);
    });
    textContDiv.appendChild(btnDiv);
  }
  mainDiv.append(textContDiv);
  block.innerHTML = '';
  block.append(mainDiv);
}
