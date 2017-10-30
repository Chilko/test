/**
 * Created by user on 2017/10/27.
 */
(function() {
  var baseFontSize = 50;
  var baseWidth = 320;
  var clientWidth = document.documentElement.clientWidth || window.innerWidth;
  var innerWidth = Math.max(Math.min(clientWidth, 480), 320);
  var rem = 50;
  if (innerWidth > 362 && innerWidth <= 375) {
    rem = Math.floor(innerWidth / baseWidth * baseFontSize * 0.9);
  }
  if (innerWidth > 375) {
    rem = Math.floor(innerWidth / baseWidth * baseFontSize * 0.84);
  }
  window.__baseREM = rem;
  document.querySelector('html').style.fontSize = rem + 'px';
}());
