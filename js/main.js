const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navMobileLinks = document.querySelectorAll('.nav-mobile__link')
const cakes = document.querySelectorAll('.offer__cake')
const pies = document.querySelectorAll('.offer__pie')
const sortAllBtn = document.querySelector('.offer__sort-btn-all')
const sortCakesBtn = document.querySelector('.offer__sort-btn-cakes')
const sortPiesBtn = document.querySelector('.offer__sort-btn-pies')
const footerYear = document.querySelector('.footer__year')
//ACCORDION
const accordion = document.querySelector('.aboutus__accordion')
const accordionBtns = document.querySelectorAll('.aboutus__accordion-btn')

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('aboutus__accordion-info--active')) {
		this.nextElementSibling.classList.remove('aboutus__accordion-info--active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('aboutus__accordion-info--active')
	}
}
const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.aboutus__accordion-info--active')
	allActiveItems.forEach(item => item.classList.remove('aboutus__accordion-info--active'))
}
const clickOutsideAccordion = e => {
	if (e.target.classList.contains('aboutus__accordion-btn')) {
		return
	} else {
		closeAccordionItems()
	}
}
//THROTTLING
const throttle = (fn, delay) => {
	let last = 0
	return () => {
		const now = new Date().getTime()
		if (now - last < delay) {
			return
		}
		last = now
		return fn()
	}
}
//SORT OFFER PRODUCTS
const sortAllProducts = () => {
	cakes.forEach(cake => {
		cake.style.display = 'block'
	})
	pies.forEach(pie => {
		pie.style.display = 'block'
	})
	sortCakesBtn.classList.remove('offer__sort-btn--active')
	sortPiesBtn.classList.remove('offer__sort-btn--active')
	sortAllBtn.classList.add('offer__sort-btn--active')
}
const sortCakes = () => {
	cakes.forEach(cake => {
		cake.style.display = 'block'
	})
	pies.forEach(pie => {
		pie.style.display = 'none'
	})
	sortCakesBtn.classList.add('offer__sort-btn--active')
	sortPiesBtn.classList.remove('offer__sort-btn--active')
	sortAllBtn.classList.remove('offer__sort-btn--active')
}
const sortPies = () => {
	cakes.forEach(cake => {
		cake.style.display = 'none'
	})
	pies.forEach(pie => {
		pie.style.display = 'block'
	})
	sortCakesBtn.classList.remove('offer__sort-btn--active')
	sortPiesBtn.classList.add('offer__sort-btn--active')
	sortAllBtn.classList.remove('offer__sort-btn--active')
}
//CURRENT YEAR FOR FOOTER
const year = new Date().getFullYear()
footerYear.textContent = year

//NAVIGATION MANAGEMENT
const handleNavMobile = () => {
	hamburger.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('ovh')
}
const closeNavWhenResize = () => {
	hamburger.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
	document.body.classList.remove('ovh')
}

sortAllBtn.addEventListener('click', sortAllProducts)
sortCakesBtn.addEventListener('click', sortCakes)
sortPiesBtn.addEventListener('click', sortPies)
navMobileLinks.forEach(link => link.addEventListener('click', handleNavMobile))
hamburger.addEventListener('click', handleNavMobile)
window.addEventListener('resize', throttle(closeNavWhenResize, 200))
//ACCORDION
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)
