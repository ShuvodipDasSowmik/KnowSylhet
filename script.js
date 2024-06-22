let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 0.999 + 'px';
    leaf.style.top = value* -1 + 'px';
    leaf.style.left = value* 1+ 'px';
    hill5.style.left = value * 1 + 'px';
    hill4.style.left = value * -1 + 'px';
    // hill1.style.bottom = value * 1 + 'px';
    tree.style.top = value * 0.8 +'px';
});