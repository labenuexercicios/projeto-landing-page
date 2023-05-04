// FUNÇÃO MENU HAMBURGUER

let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')

menuSection.addEventListener('click', () => {
  document.body.style = show ? 'hidden' : 'initial'
  // overflow

  menuSection.classList.toggle('on', show)
  show = !show
})