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