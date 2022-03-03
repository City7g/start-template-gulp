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

  // Fixed Grid
  document.body.style.setProperty("--screen-width", document.body.scrollWidth + "px");
  window.addEventListener('resize', () => {
    document.body.style.setProperty("--screen-width", document.body.scrollWidth + "px");
  })

  // Screen
  setInterval(() => {
    document.querySelector('.screen-width span').textContent = window.screen.width
    document.querySelector('.screen-height span').textContent = window.screen.height
    document.querySelector('.screen-screen-left span').textContent = window.screenLeft
    document.querySelector('.screen-screen-top span').textContent = window.screenTop
    document.querySelector('.screen-screen-y span').textContent = window.screenY
    document.querySelector('.screen-screen-x span').textContent = window.screenX
    document.querySelector('.screen-avail-width span').textContent = window.screen.availWidth
    document.querySelector('.screen-avail-height span').textContent = window.screen.availHeight
    document.querySelector('.screen-outer-width span').textContent = window.outerWidth
    document.querySelector('.screen-outer-height span').textContent = window.outerHeight
    document.querySelector('.screen-inner-width span').textContent = window.innerWidth
    document.querySelector('.screen-inner-height span').textContent = window.innerHeight
    document.querySelector('.screen-client-width span').textContent = document.documentElement.clientWidth
    document.querySelector('.screen-client-height span').textContent = document.documentElement.clientHeight
    document.querySelector('.screen-scroll-width span').textContent = document.documentElement.scrollWidth
    document.querySelector('.screen-scroll-height span').textContent = document.documentElement.scrollHeight
    document.querySelector('.screen-offset-width span').textContent = document.documentElement.offsetWidth
    document.querySelector('.screen-offset-height span').textContent = document.documentElement.offsetHeight
  }, 100)

  window.addEventListener('resize', () => {
    document.querySelectorAll('h4 span').forEach(item => item.style.color = 'blue')
    setTimeout(() => {
      document.querySelectorAll('h4 span').forEach(item => item.style.color = '')
    }, 50);
  })
}

export default development