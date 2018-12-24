//  3322 squad



let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/react-classic.svg') {
    myImage.setAttribute('src', 'images/react-heart.svg');
  } else {
    myImage.setAttribute('src', 'images/react-classic.svg');
  }
}