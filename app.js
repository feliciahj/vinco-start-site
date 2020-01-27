window.addEventListener('DOMContentLoaded', () => {

  // FRONT-LANDING ANIMATIONS ******************************************************************
  const frontLandingLine = document.querySelector('.front-landing-line')
  const frontLandingTagline = document.querySelector('.front-landing-tagline')

  let frontLandingCounter = 0
  frontLandingLine.style.width = '0%'
  setTimeout(() => {
    const frontLandingAnimationCount = setInterval(() => {
      if (frontLandingCounter >= 98) {
        frontLandingTagline.classList.remove('hidden')
      }
      if (frontLandingCounter >= 99) clearInterval(frontLandingAnimationCount)
      frontLandingCounter++
      frontLandingLine.style.width = `${frontLandingCounter}%`
    }, 15)
  }, 300)

  // PURPLE SCROLL-UP ******************************************************************
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
  }, 2500)


  // PRIVACY POP UP ANIMATIONS ****************************************************************** 
  const popUpButton = document.querySelector('.link')
  const privacyPolicyToggle = document.querySelectorAll('.priv-toggle')
  popUpButton.addEventListener('click', () => {
    privacyPolicyToggle.forEach(elem => elem.classList.add('hidden'))
  })

  const privacyPolicyPopUp = document.querySelector('.ppp')
  const pageOne = document.querySelectorAll('.page-1')
  const pageTwo = document.querySelectorAll('.page-2')
  privacyPolicyPopUp.addEventListener('click', () => {
    pageOne.forEach(elem => elem.classList.add('hidden'))
    pageTwo.forEach(elem => elem.classList.remove('hidden'))
  })

  // VOTE ANIMATIONS ****************************************************************** 
  const voteTimeButton = document.querySelector('.time')
  const timeAccepted = document.querySelector('.timeAccept')
  voteTimeButton.addEventListener('click', () => {
    timeAccepted.classList.remove('hidden')
    voteTimeButton.classList.add('hidden')
  })

  const voteActiveButton = document.querySelector('.active')
  const activeAccepted = document.querySelector('.activeAccept')
  voteActiveButton.addEventListener('click', () => {
    activeAccepted.classList.remove('hidden')
    voteActiveButton.classList.add('hidden')
  })

  const voteJargonButton = document.querySelector('.jargon')
  const jargonAccepted = document.querySelector('.jargonAccept')
  voteJargonButton.addEventListener('click', () => {
    jargonAccepted.classList.remove('hidden')
    voteJargonButton.classList.add('hidden')
  })

  const voteUxButton = document.querySelector('.ux')
  const uxAccepted = document.querySelector('.uxAccept')
  voteUxButton.addEventListener('click', () => {
    uxAccepted.classList.remove('hidden')
    voteUxButton.classList.add('hidden')
  })

  // PRIVACY POLICY ANIMATIONS ******************************************************************
  const privacyPolicy = document.querySelector('.pp')
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