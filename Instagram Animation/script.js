const buttonOn = document.querySelector('.on');
const buttonOff = document.querySelector('.off');
const img = document.querySelector('.wrap-img');

buttonOn.addEventListener('click',function(){
    img.style.animationPlayState = 'running';  
})
buttonOff.addEventListener('click',function(){
    img.style.animationPlayState = 'paused';  
})