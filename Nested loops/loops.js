/////////////////////////
let str = '';
for (let i = 0; i < 5; i++) {
    str += i + '_' + (5 - i) + '_'
}
console.log(str);

////////////////////////
let out = '';
for (let i = 0; i < 5; i++) {
    out += i + '_';
    for (let j = 0; j < i; j++) {
        out += j + ' '
    }
    out += '<br>'
}
console.log(out);

document.querySelector('.out').innerHTML = out;

/////////////////////////
/*let put = '';
for (let i = 5; i => 0; i--) {
    for (let j = i; j => 0; j--) {
        put += '*'
    }
    put += '<br>'
}
console.log(put);

document.querySelector('.put').innerHTML = put;*/