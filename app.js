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


  // FRONT-LANDING ANIMATIONS
  const frontLandingLine = document.querySelector('.front-landing-line')
  const frontLandingTaglineContainer = document.querySelector('.front-landing-tagline-container')
  const frontLandingTagline = document.querySelector('.front-landing-tagline')
  // console.log(frontLandingLine)

  let frontLandingCounter = 0
  frontLandingLine.style.width = '0%'
  setTimeout(() => {
    const frontLandingAnimationCount = setInterval(() => {
      if (frontLandingCounter >= 98) {
        frontLandingTagline.classList.remove('hidden')
        frontLandingTaglineContainer.classList.add('typewriter')
      }
      if (frontLandingCounter >= 99) clearInterval(frontLandingAnimationCount)
      frontLandingCounter++
      frontLandingLine.style.width = `${frontLandingCounter}%`
    }, 15)
  }, 300)

  const frontLandingPage = document.querySelector('.front-landing')
  const frontLandingPageContainer = document.querySelector('.front-landing-container')

  let frontLandingCounterTwo = 100

  setTimeout(() => {
    const frontLandingAnimationCountTwo = setInterval(() => {
      if (frontLandingCounterTwo === 70) {
        frontLandingPageContainer.classList.remove('slow')
        frontLandingPageContainer.classList.add('faster')
        frontLandingPageContainer.classList.add('fadeOut')
      }
      if (frontLandingCounterTwo === 1) frontLandingPage.classList.add('hidden')
      if (frontLandingCounterTwo === 1) clearInterval(frontLandingAnimationCountTwo)
      frontLandingCounterTwo--
      console.log(frontLandingCounterTwo)
      frontLandingPage.style.height = `${frontLandingCounterTwo}vh`
    }, 15)
  }, 3500)
})