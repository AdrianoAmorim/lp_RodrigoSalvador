
var splideGaleria = new Splide( '#splide-galeriaImg', {
    type   : 'slide',
    perPage: 4,
    perMove: 1,
    fixedWidth:'24.3%',
    breakpoints:{
      860:{
        perPage:3,
        fixedWidth:'32.4%'
      },
      590:{
        fixedWidth:'48.8%'
      }
    }
  } );



  window.addEventListener('scroll', function() {
    var header = document.querySelector('.lp-headerPrincipal');
    var textoLogo = document.querySelector('.text-logoPage span:nth-child(1)');
    var textoLogo2 = document.querySelector('.text-logoPage span:nth-child(2)');
    var textoAgenda = document.querySelector('.title-imgAgenda a span');
    var menuHeader = document.querySelectorAll('.lp-headerPrincipal .menu-header > ul a');
    var imgLogo = document.querySelector('.logoPage img');

    if (window.scrollY > 0) {
      header.classList.add('header-fixo');
      textoLogo.style.color = '#fff' ;
      textoLogo2.style.color = '#72bca5';
      textoAgenda.style.color = "#fff";
      imgLogo.src = './assets/img/logo-fixo.png';
    
      menuHeader.forEach(menu => {
        menu.style.color = "#fff";
        menu.addEventListener('mouseover',()=>{
          menu.classList.add('corTexto-HeaderFixo');
        })
        menu.addEventListener('mouseout',()=>{
          menu.classList.remove('corTexto-HeaderFixo');
        })
      });
      
      textoAgenda.addEventListener('mouseover',()=>{
        textoAgenda.classList.add('corTexto-HeaderFixo');
      })
      textoAgenda.addEventListener('mouseout',()=>{
        textoAgenda.classList.remove('corTexto-HeaderFixo');
      })
    } else {
      header.classList.remove('header-fixo');
      textoLogo.removeAttribute('style');
      textoLogo2.removeAttribute('style');
      textoAgenda.removeAttribute('style');
      imgLogo.src = './assets/img/logo2.png';
      menuHeader.forEach(menu => {
        menu.removeAttribute('style');
      });
    }
  });




  window.addEventListener('DOMContentLoaded',()=>{
    splideGaleria.mount()
  })