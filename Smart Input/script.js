const modelsInput = document.querySelector('#models-id')

modelsInput.addEventListener('input', function(){
    stringProgressing(this.value)
})

function stringProgressing(inputValue){
    let str = inputValue.trim().toUpperCase()

    let arr = str.split('').map(item => {
        if(item in objChange) item = objChange[item]
        return item
    })
    console.log(arr)
    arr = arr.filter(item => /^[A-Z0-9]/.test(item));
    modelsInput.value = arr.join('')
}