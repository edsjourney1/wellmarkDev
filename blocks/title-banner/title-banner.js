export default function decorate(block) {
  const parentEle = block.parentElement.parentElement;
  // Check if the parent element has the class 'one-btn-banner'
  if (parentEle.classList.contains('one-btn-banner')) {
    // Remove the class 'blue-550' if 'one-btn-banner' is present
    parentEle.classList.remove('blue-550');
  } else {
    // Add the class 'blue-550' if 'one-btn-banner' is not present
    parentEle.classList.add('blue-550');
  }
  // Get the image
  const image = block.children[0].children[0].querySelector('img, picture');
  // Get the title and description
  const titleClass = block.children[1].children[0].querySelector('p');
  if (titleClass) {
    titleClass.classList.add('title');
  }
  const descrClass = block.children[1].children[1].querySelector('p');
  if (descrClass) {
    descrClass.classList.add('description');
  }
  // Get the buttons
  const buttons = block.children[2].children[0].innerHTML;
  // Create the main div
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('tbnr-maindiv');
  // Create the text container div
  const textContDiv = document.createElement('div');
  textContDiv.classList.add('tbnr-textcont');
  // Create the picture div
  const picDiv = document.createElement('div');
  picDiv.classList.add('tbnr-pic');
  // Append the image to the picture div
  picDiv.append(image);
  // Append the title and description to the text container div
  if (titleClass) {
    textContDiv.append(titleClass);
  }
  if (descrClass) {
    textContDiv.append(descrClass);
  }
  // Check if buttons is not empty
  if (buttons.trim() !== '') {
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('tbnr-btn');
    btnDiv.innerHTML = buttons;
    textContDiv.append(btnDiv);
  }
  // Append the text container div and picture div to the main div
  mainDiv.append(textContDiv, picDiv);
  // Clear the block's inner HTML and append the main div
  block.innerHTML = '';
  block.append(mainDiv);
}
