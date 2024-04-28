const selectBtn = document.querySelector('.select')
const countEL = document.querySelector('.count')
const counterEL = document.querySelector('.counter')

selectBtn.addEventListener('click', () => {
	selectBtn.classList.add('active')
	countEL.classList.add('active')
})

counterEL.addEventListener('click', () => {
	selectBtn.classList.remove('active')
	countEL.classList.remove('active')
})
