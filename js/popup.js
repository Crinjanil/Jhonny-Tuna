const basket = document.querySelector('.basket')
const popUp = document.querySelector('.pop-up')

basket.addEventListener('mouseover', () => {
	popUp.classList.add('active')
})

basket.addEventListener('click', () => {
	popUp.classList.remove('active')
})
