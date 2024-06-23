let textContact = document.getElementById('textContact');
let Forest3 = document.getElementById('Forest3');
let Forest1 = document.getElementById('Forest1');
let Mist = document.getElementById('Mist');
let Four = document.getElementById('4');
let Five = document.getElementById('5');
let Six = document.getElementById('6');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    textContact.style.marginTop = value * 0.5 + 'px';
    Forest3.style.left = value* -2 + 'px';
    Forest1.style.left = value* 2+ 'px';
    Mist.style.top = value* 0.999 +'px';
    
});