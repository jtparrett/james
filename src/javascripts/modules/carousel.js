import $ from 'jquery'
import slick from 'slick-carousel/slick/slick'

export default function (){
  $('[data-behaviour="carousel"]').slick({
    dots: false,
    arrows: false,
    draggable: false
  }) 

  $('[data-behaviour="content"]').slick({
    dots: false,
    arrows: false,
    draggable: false,
    asNavFor: '[data-behaviour="carousel"]'
  })

  $('[data-behaviour="next"]').on('click', () => {
    $('[data-behaviour="content"]').slick('slickNext')
  })
}