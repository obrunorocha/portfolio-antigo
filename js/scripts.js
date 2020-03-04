//Adiciona status de active nos links de navegação, tanto ao clicar como ao rolar da página
document.addEventListener('DOMContentLoaded', function(){

  const sections = document.querySelectorAll('section')
  const links = document.querySelectorAll('.links-list li')

  const makeActive = link => links[link].classList.add('active')
  const removeActive = link => links[link].classList.remove('active')
  const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link))

  const sectionMargin = 200

  let currentActive = 0

  window.addEventListener('scroll', () => {
    const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1

    if(current !== currentActive)
    {
      removeAllActive()
      currentActive = current
      makeActive(current)
    }
  })
}, false)

const nightStorage = localStorage.getItem('nightModeStorage')
const nightBtn = document.querySelector('#nightMode')

const content = document.querySelector('.main')
const aside = document.querySelector('nav')

const author = document.querySelector('.author')
const position = document.querySelector('.position')
const socialLinks = document.querySelectorAll('.social-list li a')
const linksList = document.querySelectorAll('.links-list li a')

const socialResp = document.querySelector('.social-wrapper')
const linksResp = document.querySelector('.links-list')

if (nightStorage) {
  content.classList.add('daymode')
  aside.classList.add('daymode-barra')
  author.classList.add('daymode-barra')
  position.classList.add('daymode-barra')
  socialResp.classList.add('daymode-barra')
  linksResp.classList.add('daymode-barra')
  
  socialLinks.forEach(el =>{
    el.classList.add('daymode-barra')
  })

  linksList.forEach(el => {
    el.classList.add('daymode-barra')
  })

  nightMode.checked = true
}

nightBtn.addEventListener('click', () => {

  if(content.classList.contains('daymode') && aside.classList.contains('daymode-barra'))
  {
    localStorage.removeItem('nightModeStorage')
    content.classList.remove('daymode')
    
    aside.classList.remove('daymode-barra')
    author.classList.remove('daymode-barra')
    position.classList.remove('daymode-barra')
    socialResp.classList.remove('daymode-barra')
    linksResp.classList.remove('daymode-barra')

    socialLinks.forEach(el =>{
      el.classList.remove('daymode-barra')
    })
    
    linksList.forEach(el => {
      el.classList.remove('daymode-barra')
    })

    nightBtn.checked = false
  }else{
    localStorage.setItem('nightModeStorage', true)
    content.classList.add('daymode')

    aside.classList.add('daymode-barra')
    author.classList.add('daymode-barra')
    position.classList.add('daymode-barra')
    socialResp.classList.add('daymode-barra')
    linksResp.classList.add('daymode-barra')

    socialLinks.forEach(el =>{
      el.classList.add('daymode-barra')
    })

    linksList.forEach(el => {
      el.classList.add('daymode-barra')
    })

    nightBtn.checked = true
  }
})

function toggle(){
  const icon = document.querySelector('.menuToggle')
  icon.classList.toggle('active')
  socialResp.classList.toggle('menu-open')
  linksResp.classList.toggle('menu-open')
}




