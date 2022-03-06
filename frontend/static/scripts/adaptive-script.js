import { menu, menuBody, removeClassActive } from "./resources.js";
const addButtonToTop = () => {
    const colors = {
        white: `#e0f2e9`,
        brown: `#544b3d`
    }
    const styles = {
        buttonStyles: `
        width: 40px;
        height: 40px;
        background-color: ${colors.brown};
        opacity: .7;     
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 15;
        `,
        spanStyles: `
        position: absolute;
        height: 2px;
        width: 15px;
        background-color: ${colors.white};
        top: 45%;
        `,
        spanFirstStyles: `
        transform: rotate(-50deg);
        left: 21%;
        `,
        spanSecondStyles: `
        transform: rotate(50deg);
        right: 21%;
        `
    }
    document.body.style.position = 'relative'

    const button = document.createElement('div')
    const spanFirst = document.createElement('span')
    const spanSecond = document.createElement('span')

    button.classList.add('js-button')

    button.style.cssText = styles.buttonStyles

    spanFirst.style.cssText = styles.spanStyles
    spanFirst.style.cssText += styles.spanFirstStyles

    spanSecond.style.cssText = styles.spanStyles
    spanSecond.style.cssText += styles.spanSecondStyles

    button.appendChild(spanFirst)
    button.appendChild(spanSecond)

    button.onclick = () => scrollTo({top: 0, left: 0,behavior: 'smooth'})

    document.body.appendChild(button)
}
const removeButtonToTop = () => {
    const button = document.querySelector('.js-button')
    document.body.removeChild(button)
    document.body.style.position = ''
}

const addButtonToMainPage = () => {
    const colors = {
        white: `#e0f2e9`,
        brown: `#544b3d`
    }
    const styles = {
        linkStyles: `
            display: inline-block;
            padding: 10px 20px;
            background-color: ${colors.brown};
            opacity: .7;
            font-size: 10px;
            color: ${colors.white};
            position: fixed;
            top: 20px;
            right: 20px;
        `
    }
    const link = document.createElement('a')
    link.textContent = 'На главную'
    link.classList.add('js-buttonToMainPage')
    link.style.cssText = styles.linkStyles
    link.href = '/'
    link.setAttribute('data-link', '')
    link.onclick = route
    document.body.appendChild(link)
}
const removeButtonToMainPage = () => {
    const link = document.querySelector('.js-buttonToMainPage')
    document.body.removeChild(link)
}

let bool = false

menu.addEventListener("click", () => {
    document.body.classList.toggle("active")
    menu.classList.toggle('active')
    menuBody.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 768 && !bool){
        bool = !bool
        addButtonToTop()
        console.log('add');
        location.pathname === '/' ? null : addButtonToMainPage()
    }
    if(window.pageYOffset < 768 && bool){
        removeButtonToTop()
        document.querySelector('.js-buttonToMainPage') ? removeButtonToMainPage() : null
        bool = !bool
    }   
})

window.addEventListener('resize', () => {
    if(window.matchMedia("(pointer:coarse) and (orientation: landscape) and (min-width: 768px)")) removeClassActive()
})

