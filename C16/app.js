let color = 'black';
const canvas = document.getElementById('canvas');
const container = document.getElementById('container');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let resizer = new ResizeObserver(function(){
    const w = container.offsetWidth
    const h = container.offsetHeight
    canvas.height = h
    canvas.width = w
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}) 

resizer.observe(container)

$(document).on('click', '.colors div', function(){
    color = $(this).css('background-color')
})

canvas.addEventListener('mousedown', e => {
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    ctx.beginPath();
    ctx.moveTo(x, y);
})

function move(e){
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.x
    const y = e.clientY - rect.y
    ctx.lineTo(x,y)
    ctx.strokeStyle = color
    ctx.stroke()
}

function up(){
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', up);
}

$(document)
    .on('click', '#jpg', function(){
        const data = canvas.toDataURL('image/jpeg')
        const a = document.createElement('a')
        a.setAttribute('download', 'C16.jpg')
        a.setAttribute('href', data)
        a.click()
    })
    .on('click', '#png', function(){
        const data = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.setAttribute('download', 'C16.png')
        a.setAttribute('href', data)
        a.click()
    })