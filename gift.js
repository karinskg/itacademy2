let circle =document.getElementById('circle');
let button = document.getElementById('close')
let nose = document.getElementById('nose')
let klf = document.getElementById('kjh')

let hover = document.getElementsByClassName('hover-letter');
for (let i=0; i<hover.length; i++) {
    hover[i].innerHTML = hover[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
}
function go(){
  console.log("hjkim")
  circle.showModal()
  klf.style.display='block'
}

function lo(){
  circle.close()
  nose.style.animation='none'

}