const showPopup = (popupName) => {
  const widthScroll = window.innerWidth - document.body.scrollWidth
  document.body.style.overflow = 'hidden'

  if (widthScroll > 0) {
    document.body.style.marginRight = widthScroll + 'px'
  }

  document.querySelector(popupName).classList.add('show')
  setTimeout(() => {
    document.querySelector(popupName).style.opacity = 1
  }, 10);
}

const closePopup = (popupName, isFirstPopup = true) => {
  popupName.style.opacity = 0

  setTimeout(() => {
    popupName.classList.remove('show')

    document.body.style.overflow = isFirstPopup ? '' : 'hidden'

    if (isFirstPopup) {
      document.body.style.marginRight = ''
    }
  }, 300);
}

export { showPopup, closePopup }