const minusBtn = document.querySelector('.minus')
const counterEl = document.querySelector('.counter')
const plusBtn = document.querySelector('.plus')

let counterValue = 0

minusBtn.addEventListener('click', () => {
	if (counterValue > 0) {
		counterValue--
		counterEl.textContent = counterValue
	}
})

plusBtn.addEventListener('click', () => {
	counterValue++
	counterEl.textContent = counterValue
})
