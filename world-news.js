let changeSide = document.querySelector('#changing-side__image');
let newsImage = document.querySelector('.world-news-item');

// newsImage.setAttribute('onmouseover', 'mouseOver(this)');

const mouseOver = (el) => {
  // console.log(changeSide.classList.contains('changing__ani'));
  let value = el.querySelector('img').src;
  changeSide.src = value;
  if ( changeSide.classList.contains('changing__ani') == true ) {
    changeSide.classList.remove('changing__ani');
    
  } else {
    changeSide.classList.add('changing__ani');

  }
}

// let mouseExit = () => {
//   changeSide.classList.remove('changing__ani');
// }
