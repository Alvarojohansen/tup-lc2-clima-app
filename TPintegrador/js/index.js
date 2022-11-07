const card = document.getElementById("carta")
card.style.visibility = "hidden"
const ciudad = document.querySelector(".ciudad")
const descripcion = document.querySelector(".descripcion")
const temperatura = document.querySelector(".temperatura")
const termica = document.querySelector(".termica")
const humedad = document.querySelector(".humedad")
const viento = document.querySelector(".viento")
const presion = document.querySelector(".presion")

//document.onload(agregarCities())
document.addEventListener('onload',agregarCities())
//Funcion para agregar las options a el select de las ciudades que estan almacenadas
//en el localStorage
function agregarCities() {
    let ciudades = getCitiesFromLocalStorage()
    console.log(ciudades)
    ciudades.forEach(ciudad => {
        let selectorDeCiudades = document.getElementById("selecCiudad")
        let nuevaOpc = document.createElement('option')
        let textOpc = document.createTextNode(`${ciudad}`)
        nuevaOpc.appendChild(textOpc)
        nuevaOpc.setAttribute('value', `${ciudad}`)
        selectorDeCiudades.appendChild(nuevaOpc)
    });
}



let hacerConsulta = document.getElementById("consult");
hacerConsulta.addEventListener('click', function () {
    //Segun ciudad que elija en el select, da los valores del clima actual

    let selectCitis = document.getElementById("selecCiudad");
    let ciudad = selectCitis.value;
    if (ciudad == 0) {
        alert("seleccione una ciudad para consultar el clima. O dirigirse a la pestaña de 'Agregar ciudad'");
    } else {
        miClima.buscarClima(ciudad);
        card.style.visibility = 'visible'
    }
})



let miClima = {
    //objeto que realiza consulta a la Api
    //vuelca los datos de la api segun la ciudad que elija

    buscarClima: function (ciudad) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=801cbd68b59f4f8e349127c49a43f954&units=metric&lang=es")
            .then((response) => response.json())
            .then((data) => this.mostrarDatos(data))
            .catch((error) => console.log(error));
    },
    mostrarDatos: function (data) {
        //obtener los datos de la ciudad y los mete en la carta

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, pressure, humidity } = data.main;
        const { speed } = data.wind;

        ciudad.innerHTML = name
        document.querySelector(".imagen").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        descripcion.innerHTML = "Su estado actual es: " + description;
        temperatura.innerHTML = "Temperatura: " + temp + "º";
        termica.innerHTML = "Térmica: " + feels_like + "º";
        humedad.innerHTML = "Humedad: " + humidity + " %";
        presion.innerHTML = "Presión: " + pressure + " P";
        viento.innerHTML = "Viento: " + speed + "m/s";
    },
}




































