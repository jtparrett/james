import $ from 'jquery'
import slick from 'slick-carousel/slick/slick'

export default function (){
  $('[data-behaviour="carousel"]').slick({
    dots: false
  }) 
}