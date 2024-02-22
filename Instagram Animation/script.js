const buttonOn = document.querySelector('.on');
const buttonOff = document.querySelector('.off');
const img = document.querySelector('img');
console.log(img)

buttonOn.addEventListener('click',function(){
    img.style.animationPlayState = 'running';  
})
buttonOff.addEventListener('click',function(){
    img.style.animationPlayState = 'paused';  
})

document.querySelector('.buttons').addEventListener('click',function(event){       
    if(!event.target.classList.contains('speed')) return;
    let speed = event.target.getAttribute('data-speed');
    console.log(speed);
    img.style.animationDuration = speed + 's';
}) 