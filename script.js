// navbar
const menu = document.querySelector('.menu')
const target = document.querySelectorAll('#target')

menu.addEventListener('click', () => {
    target.forEach((item) => {
        item.classList.toggle('change')
    })
})
// end navbar

// icon loop sec1
const icons = document.querySelectorAll('.sec-1-icons i');

let i = 1

setInterval(() => {
    i++

    const icon = document.querySelector('.sec-1-icons .change')

    icon.classList.remove('change')

    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }

},2000)
// END of icon loop sec1