const me = document.querySelector('.me')

me.addEventListener('mouseover', changeMe )

me.addEventListener("mouseout", changeMe);
function changeMe() {
    if (me.innerHTML === 'me.') {
        me.innerHTML = 'ME!'
    } else {
        me.innerHTML = 'me.'
    }
}