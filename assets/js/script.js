var splideGaleria = new Splide( '#splide-galeriaImg', {
    type   : 'loop',
    perMove: 1,
    perPage: 4,
    arrows:false,
    pagination:true
  } );





  window.addEventListener('DOMContentLoaded',()=>{
    splideGaleria.mount()
  })