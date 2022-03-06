import {Visitors, Filials, National, Woman, Main, Museum, Old, Lotto, Rembrandt, Gallery, ErrorPage} from "./pages.js"
import {tab, ibgFunc, click, root, menu, menuBody, removeClassActive} from './resources.js'

const route = event => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    handleLocation()
}
const routes = {
    "ErrorPage": ErrorPage,
    "/": Main,
    "/filials": Filials,
    "/visitors": Visitors,
    "/national" : National,
    "/rembrandt" : Rembrandt,
    "/woman" : Woman,
    "/lotto" : Lotto,
    "/gallery" : Gallery,
    "/museum" : Museum,
    "/old" : Old
}
const handleLocation = async () => {
    const path = window.location.pathname
    const routePage = routes[path] || routes['ErrorPage']
    const html = routePage()
    root.innerHTML = html

    scrollTo(0, 0)
    ibgFunc()

    if(document.body.classList.contains('active') && menu.classList.contains('active') && menuBody.classList.contains('active')) removeClassActive()

    path === "/" ? click() : null
    path === "/visitors" ? tab() : null

    document.querySelectorAll('[data-link]').forEach(item => item.onclick = route)
}
window.onpopstate = handleLocation
window.route = route

handleLocation()
