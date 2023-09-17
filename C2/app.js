const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
var size = 50

container.addEventListener('mousemove', function(e){
    console.log(e)
    c = container.getBoundingClientRect()
    circle.style.left = e.clientX - c.x + 'px'
    circle.style.top = e.clientY - c.y + 'px'

})