const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        s2()
        panel.classList.add('active')
    })
})

function s2() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
