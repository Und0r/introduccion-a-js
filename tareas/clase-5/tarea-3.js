document.querySelector("#ingresar").onclick = function(){
    const $cantidadClases = Number(document.querySelector("#cantidad-clases").value);
    const $datosVideos = document.querySelector("#datos-videos");
    
    while ($datosVideos.hasChildNodes()) {
    $datosVideos.removeChild($datosVideos.lastChild);
    }

    if($cantidadClases !== '') {

    for(let i = 0; i < $cantidadClases; i++){
        const nuevoLabel = document.createElement('label');
        nuevoLabel.innerText = `Video #${i+1}`
        const nuevoInputHora = document.createElement('input');
        nuevoInputHora.type = 'number';
        nuevoInputHora.placeholder = 'Hora';
        nuevoInputHora.id = 'horas';
        const nuevoInputMinutos = document.createElement('input');
        nuevoInputMinutos.type = 'number';
        nuevoInputMinutos.placeholder = 'Minutos';
        nuevoInputMinutos.id = 'minutos';
        const nuevoInputSegundos = document.createElement('input');
        nuevoInputSegundos.type = 'number';
        nuevoInputSegundos.placeholder = 'Segundos';
        nuevoInputSegundos.id = 'segundos';
        const nuevoEspacio = document.createElement('br');

        $datosVideos.appendChild(nuevoEspacio);
        $datosVideos.appendChild(nuevoLabel);
        $datosVideos.appendChild(nuevoInputHora);
        $datosVideos.appendChild(nuevoInputMinutos);
        $datosVideos.appendChild(nuevoInputSegundos);
        $datosVideos.appendChild(nuevoEspacio);
        
    }
    const botonCalcular = document.createElement('button');
    botonCalcular.type = 'button';
    botonCalcular.innerText = 'Calcular tiempo total';
    $datosVideos.appendChild(botonCalcular);

    botonCalcular.onclick = function(){

        const inputHoras = document.querySelectorAll('#horas');
        const inputMinutos = document.querySelectorAll('#minutos');
        const inputSegundos = document.querySelectorAll('#segundos');
        let horasTotales = 0;
        let minutosTotales = 0;
        let segundosTotales = 0;

        for(let i = 0; i < inputSegundos.length; i++){
            segundosTotales += Number(inputSegundos[i].value);
            if (segundosTotales > 60){
                minutosTotales ++;
                segundosTotales -= 60;
            }
        }

        for(let i = 0; i < inputMinutos.length; i++){
            minutosTotales += Number(inputMinutos[i].value);
            if (minutosTotales > 60){
                horasTotales ++;
                minutosTotales -= 60;
            }
        }
        for(let i = 0; i < inputHoras.length; i++){
            horasTotales += Number(inputHoras[i].value);
           
        }

        $resultado = document.querySelector('#resultado');
        $resultado.innerText = `Horas totales:${horasTotales} Minutos totales:${minutosTotales} Segundos totales:${segundosTotales}`;
        }

    }
 }

