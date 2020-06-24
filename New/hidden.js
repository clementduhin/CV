let blue = 'rgb(44, 117, 212)';
let white = 'rgb(220, 220, 220)';

let tel = document.getElementById('tel');
let revelTel = document.getElementById('revelTel');

tel.addEventListener("mouseover", function() {
    revelTel.removeAttribute('hidden');
    this.style.backgroundColor=blue;
})

tel.addEventListener("mouseleave", function() {
    revelTel.setAttribute('hidden', 'true');
    this.style.backgroundColor=white;
})

let mail = document.getElementById('mail');
let revelMail = document.getElementById('revelMail');

mail.addEventListener("mouseover", function() {
    revelMail.removeAttribute('hidden');
    this.style.backgroundColor=blue;
})

mail.addEventListener("mouseleave", function() {
    this.style.backgroundColor=white;
    revelMail.setAttribute('hidden', 'true');
})

let map = document.getElementById('map');
let revelMap = document.getElementById('revelMap');

map.addEventListener("mouseover", function() {
    this.style.backgroundColor=blue;
    revelMap.removeAttribute('hidden');
})

map.addEventListener("mouseleave", function() {
    this.style.backgroundColor=white;
    revelMap.setAttribute('hidden', 'true');
})