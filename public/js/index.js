console.log('JS vinculado');

let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');

console.log(main);
console.log(h2);
console.log(a);
console.log(p);

let sign = prompt('Ingrese su nombre:');

if (!sign) {
    h2.innerText += ' Invitado';
} else {
    h2.innerText += sign;
}

h2.style.textTransform = 'uppercase';
console.log(h2);
a.style.color = '#E51B3E';
console.log(a);

question = confirm('¿Desea colocar un fondo de pantalla?');

if (question) {
    document.querySelector('body').classList.add('fondo');
}

for (let i = 1; i <= p.length; i++) {
    if (i % 2 === 0) {
        p[i - 1].classList.add('destacadoPar');
    } else {
        p[i - 1].classList.add('destacadoImpar');
    }
}

main.style.display = 'block';
