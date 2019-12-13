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


})