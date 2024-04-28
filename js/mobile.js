const menu = document.querySelector('.mobile-menu')
const burgerBtn = document.querySelector('.burger')
const xBtn = document.querySelector('.x')

burgerBtn.addEventListener('click', () => {
	menu.classList.add('open')
	burgerBtn.classList.add('open')
	xBtn.classList.add('open')
})

xBtn.addEventListener('click', () => {
	menu.classList.remove('open')
	burgerBtn.classList.remove('open')
	xBtn.classList.remove('open')
})
