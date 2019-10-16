/* eslint-disable no-unused-expressions */
document.querySelector('.team_message1').classList.add('hidd');
document.querySelector('.team_message2').classList.add('hidd');
document.querySelector('.team_message3').classList.add('hidd');
document.querySelector('.team_message4').classList.add('hidd');
document.querySelector('.team_message5').classList.add('hidd');
document.querySelector('.team_message6').classList.add('hidd');

// eslint-disable-next-line no-multi-assign
const a = document.querySelector('.team_photo1').onclick = function () {
  const b = document.querySelector('.team_message1');
  // eslint-disable-next-line no-unused-expressions
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  window.console.log(a);
};

// eslint-disable-next-line no-multi-assign
const c = document.querySelector('.team_photo2').onclick = function () {
  const b = document.querySelector('.team_message2');
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  console.log(c);
};
// eslint-disable-next-line no-multi-assign
const d = document.querySelector('.team_photo3').onclick = function () {
  const b = document.querySelector('.team_message3');
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  console.log(d);
};

// eslint-disable-next-line no-multi-assign
const e = document.querySelector('.team_photo4').onclick = function () {
  const b = document.querySelector('.team_message4');
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  console.log(e);
};
// eslint-disable-next-line no-multi-assign
const f = document.querySelector('.team_photo5').onclick = function () {
  const b = document.querySelector('.team_message5');
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  console.log(f);
};

// eslint-disable-next-line no-multi-assign
const g = document.querySelector('.team_photo6').onclick = function () {
  const b = document.querySelector('.team_message6');
  b.classList.contains('hidd') ? b.classList.remove('hidd') : b.classList.add('hidd');
  console.log(g);
};


// /*eslint-disable*/
// jQuery('.lightzoom').lightzoom();
// // eslint-disable-next-line no-undef
// (function ($) {
//   // eslint-disable-next-line no-undef
//   $( '.lightzoom' ).lightzoom({
//     // eslint-disable-next-line no-undef
//     speed: 1000,   // скорость появления
//     imgPadding: 10,
//     overlayOpacity: '0.5',
//     viewTitle: true,
//     isOverlayClickClosing: true,
//     isWindowClickClosing: true,
//     isEscClosing: true
//       } );
//     })( jQuery );

// alert('fff')
//     const a = document.getElementByClassName('team_photo2');
//     console.log(a);
