const formulario = document.querySelector('#formulario');
const listaErrores = document.querySelector('#listaErrores');
const fecha = new Date();
const currentDate = fecha.getFullYear();
//console.log(currentDate);

formulario.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    validarForm();



})

const validarForm=()=>{
    const name = formulario.name.value;
    const director = formulario.director.value;
    const year = formulario.year.value;
    const genre = formulario.genre.value;
    //console.log(name, director, year, genre);
    let errores = '';
    

    if (name ===''){
        errores+='<li>El nombre es obligatorio</li>'
    }
    if (director ===''){
        errores+='<li>El director es obligatorio</li>'
    }
    if (year ===''){
        errores+='<li>El año es obligatorio</li>'
        if(year <= 1800 && year >= currentDate){
            errores += '<li>El año debe ser mayor que 1800 y menor que la fecha actual'
        }
    }
    if (genre ===''){
        errores+='<li>El género es obligatorio</li>'
    }

    if (errores !=''){
        listaErrores.innerHTML=errores;
    } else {
        formulario.submit();
    }
}

const pintarTabla = () => {

    let arrayPeliculas = [];

    formulario.forEach(({name, director, year, genre}) => {
        
        


    });


}