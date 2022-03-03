const development = () => {
  // Device Width
  const deviceWidth = document.createElement('div')
  deviceWidth.style.position = 'fixed'
  deviceWidth.style.zIndex = '100000'
  deviceWidth.style.right = '20px'
  deviceWidth.style.bottom = '20px'
  deviceWidth.style.background = 'white'
  deviceWidth.style.padding = '2px'
  deviceWidth.textContent = window.innerWidth

  document.querySelector('body').append(deviceWidth)

  window.addEventListener('resize', () => {
    deviceWidth.textContent = window.innerWidth
  })

  // Add Grid
  const gridItemNav = document.createElement('a')
  gridItemNav.setAttribute('href', '#grid')
  gridItemNav.classList.add('header-nav__link')
  gridItemNav.textContent = 'Grid'
  document.querySelector('.header .header-nav__link:last-child').after(gridItemNav)

  gridItemNav.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('grid')
  })
}

export default development