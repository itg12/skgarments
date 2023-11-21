let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('cbtn')
let navbar = document.getElementById('navbar');

function show() {
    if (btn.style.display == 'none') {
        navbar.style.display = 'none';
    } else {
        btn1.style.display = 'none';
        btn2.style.display = 'block';
        navbar.style.display = 'block';
    }
}

function hide() {
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    navbar.style.display = 'none';
}