// // pegamos o valor no localStorage
// const nightModeStorage = localStorage.getItem('gmtNightMode')
// const nightMode = document.querySelector('#night-mode')
// // pega o valor do meta tag
// const metaThemeColor = document.querySelector('meta[name=theme-color]')

// // caso tenha o valor no localStorage
// if (nightModeStorage) {
//   // ativa o night mode
//   document.documentElement.classList.add('night-mode')
//   // pinta o theme color na meta tag
//   metaThemeColor.setAttribute('content', '#2b2b2b')
//   // já deixa o input marcado como ativo
//   nightMode.checked = true
// }

// // ao clicar mudaremos as cores
// nightMode.addEventListener('click', () => {
//   // adiciona a classe `night-mode` ao html
//   document.documentElement.classList.toggle('night-mode')

//   // se tiver a classe night-mode
//   if (document.documentElement.classList.contains('night-mode')) {
//     // salva o tema no localStorage
//     localStorage.setItem('gmtNightMode', true)
//     // pinta o theme color na meta tag
//     metaThemeColor.setAttribute('content', '#2b2b2b')
//     return
//   }
//   // senão remove
//   localStorage.removeItem('gmtNightMode')
//   // senão bota a cor original
//   metaThemeColor.setAttribute('content', '#005f97')
// })


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


const icon = document.querySelector('.menuToggle')

icon.addEventListener('click', () =>{
  icon.classList.toggle('active')
  socialResp.classList.toggle('menu-open')
  linksResp.classList.toggle('menu-open')
  console.log(icon)
  console.log(socialResp)
  console.log(linksResp)
})




