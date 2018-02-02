import './index.css';

var main = document.querySelectorAll('.main')[0]
var menubutton = document.getElementById('menubutton')

menubutton.addEventListener('click', function() {
    main.classList.toggle("open");
})