const search = document.querySelector('.search')
const navigation = document.querySelector('.navigation')
const lupa = document.querySelector('.lupa')
const searchBtn = document.querySelector('.search-submit')

lupa.addEventListener('click', () => {
	search.classList.add('active')
	navigation.classList.add('active')
})

searchBtn.addEventListener('click', () => {
	search.classList.remove('active')
	navigation.classList.remove('active')
})
