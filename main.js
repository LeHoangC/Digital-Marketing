const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
    let toggle = $('#nav .toggle-btn')
    let collapse = $('#nav .collapse')

    toggle.addEventListener('click', () => {
        collapse.classList.toggle('active')
    })
}

let grid = $('#site-main .recent-work-area .images-flex')

let masonry = new Masonry(grid, {
    itemSelector: '.flex-item',
    gutter: 100,
    fitWidth: true,
})

var rellax = new Rellax('.rellax', {
    center: true,
})
