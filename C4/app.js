var render = (e) => {
    document.designMode  = 'on'
    document.execCommand('backColor', false, 'yellow')
    document.execCommand('foreColor', false, 'red')
    document.designMode  = 'off'
};

window.onload = ()=> {
    document.querySelector('.render-btn')
    .addEventListener('click', render)
}