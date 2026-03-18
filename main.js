const cursor = document.getElementById('cursor');
const duble = document.getElementById('duble');
const cursorColor = document.getElementById('cursor_color');

cursor.addEventListener('mouseenter', () => {
    duble.src = 'images/card/cursor_hover.svg';
}); 

cursor.addEventListener('mouseleave', () => {
    duble.src = 'images/card/cursor_out.svg';
});