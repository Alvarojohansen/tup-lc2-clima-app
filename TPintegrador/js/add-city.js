//defino los parrafos
const msj1 = document.getElementById("p1")
const msj2 = document.getElementById("p2")
const msj3 = document.getElementById("p3")
//hace invisible los parrafos
msj1.style.visibility = "hidden"
msj2.style.visibility = "hidden"
msj3.style.visibility = "hidden"

let botonGuardar = document.getElementById("boton-guardar")
botonGuardar.addEventListener('click', function () {
    //Valida que la ciudad ingresada no sea un caracter vacio
    //de otro caso valida que este en LocalStorage si no es el caso la agrega
    let city = document.getElementById("nuevacity").value;
    if (city == "" || city == " ") {
        alert("ingrese una ciudad");
    } else {
        ciudadAValidar.consultaApi(city);
    }
})
//añade una nueva ciudad en el LocalStorage
function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}
//Este es un objeto dividida en dos metodos.
let ciudadAValidar = {
    consultaApi : async function (city){
        //consulta a la API si se encuentra la ciudad.
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=801cbd68b59f4f8e349127c49a43f954&units=metric&lang=es") 
        //promesas
        .then((response) => response.json())
        .then((data) => this.addCiudad(data))
        //.then((data) => console.log(data))
        .catch((error) => console.log(error));
    },
    //valida los datos de la consulta esten en la API y si no es el caso muestra los carteles de aviso
    addCiudad : function (data){
        const { name } = data;
        if(name == undefined ){
            msj1.style.visibility = "hidden"
            msj2.style.visibility = "visible"
            msj3.style.visibility = "hidden"
        }else{
            let listaDeCiudades = getCitiesFromLocalStorage();   
            if(listaDeCiudades.includes(name)){ 
                msj1.style.visibility = "hidden"
                msj2.style.visibility = "hidden"
                msj3.style.visibility = "visible"    
            }else{
                addNewCityToLocalStorage(name)
                msj1.style.visibility = "visible"
                msj2.style.visibility = "hidden"
                msj3.style.visibility = "hidden"
            }    
        }
    }        
}
