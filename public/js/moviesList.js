console.log('JS Movies vinculado');

let body = document.querySelector('body');
let h1 = document.querySelector('h1');

question = confirm('¿Desea modo oscuro?');

if (question) {
    body.style.backgroundColor = ' #7f7f7f'
    body.classList.add('fondoMoviesList')
    let a = document.querySelectorAll('a')
    a.forEach(element => {
        element.style.color = 'white'
    });
}
h1.innerText += ' LISTADO DE PELÍCULAS';
h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.padding = '20px'

