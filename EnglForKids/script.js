// GLOBAL
let burgerCheck = false
let switchCheck = false
let buttonSwitchCheck = false
let mainPageCheck = false

let main = document.querySelector('.main')
loadPage()


let burgerContent = document.querySelector('.burger__content')
let burger = document.querySelector('.burger')
let buttonSwitch = document.querySelectorAll('.card__switch')
let cards = document.querySelectorAll('.card')
let cardImages = document.querySelectorAll('.card__img')
let cardName = document.querySelectorAll('.card__name')
let menuList = document.querySelectorAll('.list__item')

// ----------------------burger--------------------


loadCardContent()





for (let i = 0; i < menuList.length; i++) {
    let menuItem = menuList[i]
    menuItem.addEventListener('click', (e) => {
        changePage(e)
    })
}



burger.addEventListener('click', () => {
    openBurger()
})



for (let i = 0; i < buttonSwitch.length; i++) {
    let button = buttonSwitch[i]
    button.addEventListener('click', (e) => {
        cardSwitch(e)
    })
}

for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    card.addEventListener('click', (e) => {
        if(mainPageCheck) {
            changePage(e)
        }
    })
}


// --------------------------------------------SHOW BURGER---------------------------------------

function openBurger () {
    burger.classList.toggle('burger__active')
    burgerCheck = !burgerCheck
    if (burgerCheck) {
        burgerContent.style.left = '0px'
    } else {
        burgerContent.style.left = '-700px'
    }
}

// -----------------------------------SWITCH CARD AND CHANGE TEXT--------------------------------------

function cardSwitch (e) {
    mainPageCheck = false
    switchCheck = !switchCheck
    if (switchCheck) {  
        cards.forEach(item => {
            if (item.classList.contains(e.target.id)) {
                item.style.transform = 'rotateY(180deg)'
                item.childNodes.forEach(item => {(item.style !== undefined) ? item.style.transform = 'rotateY(180deg)' : console.log('no');})
                cardName[e.target.id - 1].innerHTML = cardsList[e.target.id][e.target.id - 1].translation
            }
        })
    } else {
        cards.forEach(item => {
            if (item.classList.contains(e.target.id)) {
                item.style.transform = 'rotateY(0deg)'
                item.childNodes.forEach(item => {(item.style !== undefined) ? item.style.transform = 'rotateY(0deg)' : console.log('no');})
                cardName[e.target.id - 1].innerHTML = cardsList[e.target.id][e.target.id].word
            }
        })
    }

}



// -----------------------------------------------LOAD PAGE-------------------------------------------

function loadCardContent () {
    buttonSwitchCheck = false
    mainPageCheck = true
    for (let i = 0; i < cardImages.length; i++) {
        cardImages[i].style.background = `center / cover no-repeat url(${cardsList[i+1][0].image})`
        cardName[i].innerHTML = cardsList[0][i]
    }
}




function loadPage() {
    main.removeChild(main.firstElementChild)
    let wrap = main.appendChild(document.createElement('div'))
    wrap.classList.add('wrapper')
    for(let i = 0; i < 2; i++) {
        let wrapLine = wrap.appendChild(document.createElement('div'))
        wrapLine.classList.add('wrapper__line')
        for(let i = 0; i < 4; i++) {
            wrapLine.innerHTML += `<div class="card ${i+1}" id="${i+2}">\n<div class="card__img"></div>\n<div class="card__text">\n<h2 class="card__name"></h2>\n<div class="card__switch visable">\n<img src="img/switch2.png" alt="swith" class="switch__pick" id="${i+1}">\n</div>\n</div>\n</div>\n`
        }
    }
}




// ---------------------------------------------------SHOW SWITCH PICK----------------------------------
function showSwitchPick () {
    buttonSwitch.forEach(item => {
        if(item.classList.contains('visable')) {
            item.classList.remove('visable')
        } else {
            if (!buttonSwitchCheck) {
                item.classList.add('visable')
            }
        }
    })
}




// ----------------------------------------------------CHANGE PAGE---------------------------------------
function changePage (id) { 
    if(burger.classList.contains('burger__active')) {
        openBurger()
    }

    if(id.target.id === '1') {
        loadPage()
        showSwitchPick()
        loadTextPage()
    } else if(id.target.id === '10') {
        showStatistics()
    } else {
        buttonSwitchCheck = true
        for (let i = 0; i < cardImages.length; i++) {
            cardImages[i].style.background = `center / cover no-repeat url(${cardsList[id.target.id - 1][i].image})`
            cardName[i].innerHTML = cardsList[id.target.id - 1][i].word
        }
            showSwitchPick()
    }
 
}




// -----------------------------------------------STATISTICS----------------------------------
function showStatistics () {
    main.removeChild(main.firstElementChild)
    let wrap = main.appendChild(document.createElement('div'))
    wrap.classList.add('wrapper')
}