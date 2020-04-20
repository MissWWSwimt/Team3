const anchor = document.querySelector('.scroll-href')
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const block =document.querySelector('.block3');
   block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
