export default function(el){
  if(!browserUnsupported()){ return false }
  let placeholder = document.createElement('div')
  placeholder.className = 'object-fit ' + el.className
  placeholder.style.backgroundImage = 'url(' + el.src + ')'
  el.parentNode.insertBefore(placeholder, el.nextSibling)
  el.parentNode.removeChild(el)
}

function browserUnsupported() {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ') > 0
  const safari = ua.indexOf('Safari/537.78.2') > 0
  return msie || safari || !!navigator.userAgent.match(/Trident.*rv\:11\./)
}