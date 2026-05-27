let anwserShown = true;
let anwser;
let body;
let p;
function onload() {
  body = document.body;
  p = document.getElementById('theText');
  window.addEventListener('resize', fitText);
  document.addEventListener('click', newText);
  document.addEventListener('keydown', newText);
  newText();
}
function fitText() {
  p.style.fontSize = '1000px';
  const scale = body.clientWidth / p.scrollWidth;
  p.style.fontSize = `min(${1000 * scale}px, 100dvh)`;
}
const random1to16 = () => Math.floor(Math.random()*16)
const hexToString = (x) => x.toString(16).toUpperCase()
function newText() {
  if (anwserShown) {
    anwserShown = false;
    const a = random1to16();
    const b = random1to16();
    const sum = a+b;
    const aString = hexToString(a);
    const bString = hexToString(b);
    anwser = hexToString(sum);
    p.innerText = `${aString}+${bString}`;
  } else {
    anwserShown = true;
    p.innerText = anwser;
  }
  fitText();
}
