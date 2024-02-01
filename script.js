const header = document.querySelector('.main-header');
const btn = document.querySelector('.btn-menu');
btn.addEventListener('click', function (){
  header.classList.toggle('nav-open')
});

function clicar() {
  // Tab to edit
  header.classList.remove('nav-open')
} 


const links = document.querySelectorAll('a:link')
links.forEach(function(link) {
  link.addEventListener('click', function (e) {
    // Tab to edit
    e.preventDefault()
    
    const href = this.getAttribute('href')
    if(href === '#'){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
    if (href.startsWith('#')&& href !=='#') {
      const secEl = document.querySelector(href);
      secEl.scrollIntoView({
        behavior:'smooth',
      })
    }
    
  })
})

const msg = document.querySelector('.msg-btn')

msg.addEventListener('click', function () {
  // Tab to edit
  const inputs = document.querySelectorAll('input')
  const validInputs = input.filter(input =>{
    return input.value !== ''
  })
  if(validInputs.length === inputs.length){
    alert('Mensagem enviada')
  }
})