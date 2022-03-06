export let images = () => document.querySelectorAll('[data-src]').forEach(item => observer.observe(item))
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
const observer = new IntersectionObserver((entries, observer) => {entries.forEach(entry =>{ 
    if(entry.isIntersecting){
        entry.target.src = entry.target.dataset.src 
        entry.target.removeAttribute('data-src')
        observer.unobserve(entry.target)
    }
})}, options) 