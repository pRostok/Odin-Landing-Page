const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        expandingPan()
        panel.classList.add('active')
    })
})

function expandingPan() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const textEl = document.getElementById('catStr')
const text = textEl.innerHTML

let idx = 1
let speed = 350 

ticker()

function ticker() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }
    setTimeout(ticker, speed)
}

const ba = document.getElementById('main')
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

let load = 0
let int = setInterval(blurr, 15)

function blurr() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    ba.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}