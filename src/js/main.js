import development from './development.js'

development()

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 10) {
    document.querySelector('header').classList.add('header--shadow')
  } else {
    document.querySelector('header').classList.remove('header--shadow')
  }
})


// Header Hamburger
document.querySelector('.header-hamb').addEventListener('click', () => {
  document.querySelector('.header-hamb').classList.toggle('active')
  document.querySelector('.header-nav').classList.toggle('show')
})

window.addEventListener('click', e => {
  if(!document.querySelector('.header').contains(e.target)) {
    document.querySelector('.header-hamb').classList.remove('active')
    document.querySelector('.header-nav').classList.remove('show')
  }
})