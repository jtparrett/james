import $ from 'jquery'
import carousel from './modules/carousel'
import ObjectFit from './vendor/object-fit'

carousel()

$('.carousel__image').each(function(){
  new ObjectFit(this)
})