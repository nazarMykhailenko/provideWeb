// burger
function burger() {
    let menu = document.querySelectorAll(`.menu`)
    menu.forEach(e => addEventListener(`click` , function (event) {
        if (event.target.closest(`div`).classList.contains(`menu__icon`)) {
            e.classList.toggle(`_active`)
            document.body.classList.toggle(`_lock`)
        }
    }))
}

burger()

// swiper slider
new Swiper(`.plan__block`, {
    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
    },
    keyboard: {
       enable: true,
       onlyInViewport: true,
       pageUpDown: true,
    },
    loop: true,
    grabCursor: true
})

// secondSlider

function clickSlider() {
    let chooseBtnIndex = 0
    let prevBtn = document.querySelector(`.prev`)
    let nextBtn = document.querySelector(`.next`)
    let slides = document.querySelectorAll(`.clickSlides .clickSlide`)
    let buttons = document.querySelectorAll(`.clickSlider__buttons .clickSlider__btn`)

    // Function

    function removeOther() {
        if (slides) {
            slides.forEach(e => {
                if (e.classList.contains(`_active`)) {
                    e.classList.remove(`_active`)
                }
            })
        }
        if (buttons) {
            buttons.forEach(e => {
                if (e.classList.contains(`_active`)) {
                    e.classList.remove(`_active`)
                }
            })
        }
    }

    function change() {
        let chooseBtnId = `clickBtn` + chooseBtnIndex
        let chooseBtn = document.getElementById(chooseBtnId)
        chooseBtn.classList.add(`_active`)
        document.getElementById(chooseBtn.getAttribute(`data-imgId`)).classList.add(`_active`)
    }

    // incrementor, decrementor

    function indexDecrimentor() {
        prevBtn.addEventListener(`click`, () => {
            removeOther()
            if (chooseBtnIndex === 0) {
                chooseBtnIndex = 2
            } else {
                chooseBtnIndex--
            }
            change()
        })
    }

    function indexIncrementor() {
        nextBtn.addEventListener(`click`, () => {
             removeOther()
            if (chooseBtnIndex === 2) {
                chooseBtnIndex = 0
            } else {
                chooseBtnIndex++
            }
            change()
        })
    }

    indexDecrimentor()
    indexIncrementor()

    // change by btn

    buttons.forEach(e => {
        e.addEventListener(`click`, () => {
            removeOther()
            let imgId = e.getAttribute(`data-imgId`)
            document.getElementById(imgId).classList.add(`_active`)
            e.classList.add(`_active`)
            chooseBtnIndex = +imgId.slice(10)
        })
    })
}

clickSlider()

// quotes slider

new Swiper(`.quotes__slider`, {
    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
    },
    grabCursor: true
})

// spoiler

function spoiler() {
    let icon = document.querySelectorAll(`.question-item__icon`)
    let block = document.querySelectorAll(`.question-item`)
    block.forEach(e => {
        e.addEventListener(`click`, event => {
            if (event.target.closest(`div`).classList.contains(`question-item__icon`)) {
                e.classList.toggle(`_active`)
            }
        })
    })
}

spoiler()