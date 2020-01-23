window.addEventListener('DOMContentLoaded', () => {
  
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )

  const secondScreenTypewriterText = document.querySelector('.centre')
  
  window.addEventListener('scroll', () => {
    const pagePercentageScrolled = Number(((window.scrollY + document.body.offsetHeight) / scrollHeight).toFixed(3))
    if (pagePercentageScrolled > 0.75) {
      secondScreenTypewriterText.classList.remove('hidden')
      secondScreenTypewriterText.classList.add('typewriter')
    }

  })

  const privacyPolicy = document.querySelector('.pp')
  const pageOne = document.querySelectorAll('.page-1')
  const pageTwo = document.querySelectorAll('.page-2')
  privacyPolicy.addEventListener('click', () => {
    pageOne.forEach(elem => elem.classList.add('hidden'))
    pageTwo.forEach(elem => elem.classList.remove('hidden'))
  })

  const backButton = document.querySelector('.back')
  backButton.addEventListener('click', () => {
    pageOne.forEach(elem => elem.classList.remove('hidden'))
    pageTwo.forEach(elem => elem.classList.add('hidden'))
  })

})