const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')

const handleNavMobile = () => {
    hamburger.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
}
hamburger.addEventListener('click', handleNavMobile)