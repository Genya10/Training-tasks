const inputId = document.querySelector('#input'); 
const line = document.querySelector('.line');

IMask(
    inputId,
    {mask:'+{38 (\\000) 000-00-00}'}
)

inputId.addEventListener("input",function(){
   const width = this.offsetWidth;
   const valueLength = this.value.length;
   line.style.width = ((width / 19) * valueLength) + 'px';
   line.style.backgroundColor = `rgb(${(255 - (255/19) * valueLength)}, 130,0)`;
})