import development from './development.js'
import { showPopup, closePopup } from './popup.js'

development()

// Header Scrolled
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 10) {
    document.querySelector('header').classList.add('header--scrolled')
  } else {
    document.querySelector('header').classList.remove('header--scrolled')
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

// Popup
document.querySelectorAll('form').forEach(item => {
  item.addEventListener('submit', e => {
    e.preventDefault()
    showPopup('.popup')
  })
})

window.addEventListener('click', e => {
  if(e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
    document.querySelectorAll('.popup').forEach(item => closePopup(item))
  }
})