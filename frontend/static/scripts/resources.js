export const CLASSLIST = { 
    MENU: '.menu',
    MENU_BODY: '.column-header',
    FULLSCREEN: '.fullscreen',
    HEADER: '.header',
    IBG: '.ibg',
    SCROLL_BTN: '#scroll-btn',
    TAB_NAV_ITEM: '.tabs-nav__item',
    TAB: '.tab'
}

export const tab = () => {
    // получаем все данные из html
    // вкладки
    // контент
    // имя таба
    let tabNav = document.querySelectorAll(CLASSLIST.TAB_NAV_ITEM),
        tabContent = document.querySelectorAll(CLASSLIST.TAB),
        tabName;
    // обработчик при клике на вкладку
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            // убирает классы active у всех
            item.classList.remove('active');
        });
        // добавляет класс active вкладке на которой клик
        this.classList.add('active');
        // получаем имя атрибута у кликнутой вкладки
        tabName = this.getAttribute('data-tab-name');
        // передаем имя атрибута
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            // проверяем имя таба, если оно совпадает - active, если нет - убираем класс
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

}
export const click = () => {
    document.querySelector(CLASSLIST.SCROLL_BTN).addEventListener('click', () => window.scrollTo({top: document.querySelector('.history').offsetTop, left: 0,behavior: 'smooth'}))
} 
export const ibgFunc = () => {
    let ibg = document.querySelectorAll(CLASSLIST.IBG)
    for(let i = 0; i < ibg.length; i++) if(ibg[i].querySelector('img'))ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'
}

export const removeClassActive = () => {
    document.body.classList.remove("active")
    menu.classList.remove('active')
    menuBody.classList.remove('active')
}

export const root = document.getElementById("root")

export const menu = document.querySelector(CLASSLIST.MENU)
export const menuBody = document.querySelector(CLASSLIST.MENU_BODY)

