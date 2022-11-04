


let ciudad = JSON.parse(localStoragetItem("CITIES"))

function cargarOptions(){
    for(let i = 0; i < Object.keys(ciudad).values; i++){
        select.options.add(new Option(ciudad[i]))
    }  
}


    
        
//    setTimeout(() => {
//     ciudad.innerHTML = data.name
//     temperatura.innerHTML = "Temperatura: " +  data.main.temp + "º"
//     termica.innerHTML = "Térmica: " + data.main.feels_like + "º"
//     humedad.innerHTML = "Humedad: " + data.main.humidity + " %"
//     presion.innerHTML = "Presión: " + data.main.pressure
//     viento.innerHTML = "Viento: " + data.wind.speed
//     loading.style.display = "none"
//     card.style.visibility = "visible"
//             }, 4000);
            
      





