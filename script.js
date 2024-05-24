//variables
const formulario = document.querySelector('#formulario');
const listaErrores = document.querySelector('#listaErrores');
const fecha = new Date();
const currentDate = fecha.getFullYear();
//console.log(currentDate);
const arrayGeneros = ['terror', 'comedia', 'romantica', 'accion'];
const title = document.querySelector('#title');
const selectGeneros = document.querySelector('#genre');
const selectFiltrar = document.querySelector('#filtrar');
let arrayPelis = [];
let obj = {};
let tabla = document.querySelector('#tabla');
const regEx = {
    titulo: /^[a-zA-Z0-9\s.,'!?-Ññ]+$/,
    director: /^[a-zA-Zs.-Ññ]+$/,
    year: /^[0-9]{4}$/
}

const objValidar = {
    titulo: false,
    director: false,
    year: false,
    genre: false
}

const fragment = document.createDocumentFragment();


const pintarGeneros = (...array) => {

    array.forEach((elemento) => {
        let option = document.createElement('option');
        option.value = elemento;
        option.text = elemento;
        fragment.append(option);
    });
    return fragment;
};

selectGeneros.append(pintarGeneros('Selecciona un género', ...arrayGeneros));
selectFiltrar.append(pintarGeneros('Todos los géneros', ...arrayGeneros));



//eventos

formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validarForm();
    pintarTabla(arrayPelis);
    selectFiltrar.disable = false;
});

selectFiltrar.addEventListener('change', (ev) => {
    filtrarGenero();
})
//funciones

const validarForm = () => {

    const title = formulario.title.value;
    const director = formulario.director.value;
    const year = formulario.year.value;
    const genre = formulario.genre.value;
    //console.log(title, director, year, genre);
    let errores = '';


    if (title === '') {
        errores += '<li>El nombre es obligatorio</li>';
    }

    if (regEx.titulo.test(title)) {
        objValidar.titulo = true;
    } else {
        objValidar.titulo = false;
        errores += '<li>El título contiene caracteres no permitidos.';
    };

    if (director === '') {
        errores += '<li>El director es obligatorio</li>';
    };

    if (regEx.director.test(director)) {
        objValidar.titulo = true;
    } else {
        objValidar.director = false;
        errores += '<li>El director contiene caracteres no permitidos.';
    };

    if (year === '') {
        errores += '<li>El año es obligatorio</li>';

        if ((year >= 1800 && year <= currentDate) && regEx.year.test(year)) {
            objValidar.year = true;
        } else {
            objValidar.year = false;
            errores += '<li>El año debe ser mayor que 1800 y menor que la fecha actual';
        }
    };

    if (genre === 'Selecciona un género') {
        errores += '<li>El género es obligatorio</li>'
    } else {
        objValidar.genre = true;
    };

    const arrayObjValidar = Object.values(objValidar);
    const ok = arrayObjValidar.every((value) => value === true);

    if (ok) {
        obj.titulo = title;
        obj.director = director;
        obj.year = year;
        obj.selectGeneros = genre;
        arrayPelis.push(obj);
        obj = {};
    } else {
        listaErrores.innerHTML = errores;
    };
};


const pintarTabla = (obj) => {

        const linea = document.createElement('tr');
        let entrada = Object.values(obj);

        entrada.forEach((elemento) => {
            let celda = document.createElement('td');
            celda.innerHTML = elemento;
            linea.append(celda);
        });

        tabla.append(linea);
    };


    
//invocar

pintarTabla();