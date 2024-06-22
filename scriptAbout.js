let textAbout = document.getElementById('textAbout');
let One = document.getElementById('1');
let Two = document.getElementById('2');
let Three = document.getElementById('3');
let Four = document.getElementById('4');
let Five = document.getElementById('5');
let Six = document.getElementById('6');



window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    textAbout.style.marginTop = value * 0.5 + 'px';
    One.style.left = value* -2 + 'px';
    Three.style.left = value* 2+ 'px';
    Five.style.left = value* -1 +'px';
    
});