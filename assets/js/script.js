const btnMenuMob = document.querySelector('.box-btnMenuMob');

//CONFIGURAÇÃO DO SPLIDER IMAGEM
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
        fixedWidth:'48.8%',
        arrows: false
      }
    }
  } );


//ADICIONA O EFEITO DE TROCAR AS CORES DO HEADER AO ROLA O SCROLL
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.lp-headerPrincipal');
    var textoLogo = document.querySelector('.text-logoPage span:nth-child(1)');
    var textoLogo2 = document.querySelector('.text-logoPage span:nth-child(2)');
    var textoAgenda = document.querySelector('.title-imgAgenda a span');
    var menuHeader = document.querySelectorAll('.lp-headerPrincipal .menu-header > ul a');
    var imgLogo = document.querySelector('.logoPage img');
    var btnMobi = document.querySelectorAll('.box-btnMenuMob .lineBtnMob');
    var menu = document.querySelector('.lp-headerPrincipal .menu-header');

    if (window.scrollY > 0) {
      header.classList.add('header-fixo');
      textoLogo.style.color = '#fff' ;
      textoLogo2.style.color = '#72bca5';
      textoAgenda.style.color = "#fff";
      imgLogo.src = './assets/img/logo-fixo.png';
      menu.classList.add('header-fixo');
      btnMobi.forEach(btn=>{
        btn.style.borderColor = '#fff'
      })

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
      menu.classList.remove('header-fixo');
      menuHeader.forEach(menu => {
        menu.removeAttribute('style');
      });
      btnMobi.forEach(btn=>{
        btn.removeAttribute('style');
      })
    }
  });

  //INICIA O SPLIDE QUANDO TODOS ELEMENTOS DO DOM ESTIVEREM CARREGADO
  window.addEventListener('DOMContentLoaded',()=>{
    splideGaleria.mount()
  })

//EVENTO DE CLIQUE NO BOTAO DE MENU DO MOBILE
btnMenuMob.addEventListener('click',()=>{
  var menu = document.querySelector('.menu-header');
  if(menu.classList.contains('show')){
    menu.classList.add('fadeOutMenu');
    setTimeout(() => {
      menu.classList.remove('show');
    }, 300);
  }else{
    menu.classList.remove('fadeOutMenu');
    menu.classList.add('show'); 
  }
})

//RESETA O HEADER AO VOLTAR PARA O TAMANHO DESKTOP
window.addEventListener('resize',()=>{
  var menu = document.querySelector('.menu-header');
  if(window.innerWidth >980){
    menu.classList.remove('show');
    menu.classList.remove('fadeOutMenu');
  }
})

