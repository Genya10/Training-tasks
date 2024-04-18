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
let put = '';
for (let i = 5; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        put += '*'
    }
    put += '<br>'
}
console.log(put);

document.querySelector('.put').innerHTML = put;

////////////////////////////
let put_1 = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
        if (j <= i) put_1 += "*"
        else put_1 += '-'
    }
    put_1 += '<br>'
}
document.querySelector('.put-1').innerHTML = put_1;

//////////////////////////////
let put_2 = '';
let p = 1;
let s = 16;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 18; j++) {
        if (j >= p && j <= s) put_2 += '* '
        else put_2 += '_'
    }
    p = p + 2;
    s = s - 2;
    put_2 += '<br>'
}
document.querySelector('.put-2').innerHTML = put_2;