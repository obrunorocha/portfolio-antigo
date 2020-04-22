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