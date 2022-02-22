const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function linkOn() {
    cursor.classList.add('linkOn');
    cursor.classList.remove('linkOut');
}

function linkOut() {
    cursor.classList.add('linkOut');
    cursor.classList.remove('linkOn');
}
