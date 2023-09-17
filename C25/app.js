const cursor = document.querySelector ('.cursor')
const circle = document.querySelector ('.circle')

addEventListener ('mousemove', function(e){
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
    circle.style.left = e.clientX - 50 + 'px'
    circle.style.top = e.clientY - 50 + 'px'

})


addEventListener ('click', function(e){
    circle.classList.add('appear')
    setTimeout(()=>{
        circle.classList.remove('appear')
    }, 500)

})