function calcularPromedio(array) {
  let sumaNumeros = 0;
  for (let i = 0; i < array.length; i++) {
    sumaNumeros += Number(array[i].textContent);
  }
  return (sumaNumeros / array.length).toFixed(2);
}

function calcularNumeroPequeño(array) {
  let min = Number(array[0].textContent);

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].textContent) < min) {
      min = Number(array[i].textContent);
    }
  }

  return min;
}

function calcularNumeroGrande(array) {
  let max = Number(array[0].textContent);

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].textContent) > max) {
      max = Number(array[i].textContent);
    }
  }

  return max;
}

function buscarNumeroFrecuente(array) {
  let mayorFrecuencia = 1;
  let frecuencia = 0;
  let numeroMasFrecuente = 0;

  for (let i = 0; i < array.length; i++) {
    for (let b = i; b < array.length; b++) {
      let numeroA = Number(array[i].textContent);
      let numeroB = Number(array[b].textContent);

      if (numeroA === numeroB) {
        frecuencia++;
      }
      if (frecuencia > mayorFrecuencia) {
        mayorFrecuencia = frecuencia;
        numeroMasFrecuente = Number(array[i].textContent);
      }
    }
    frecuencia = 0;
  }
  return numeroMasFrecuente;
}

function mostrarPromedio(array) {
  const $promedio = document.querySelector('#promedio');
  const resultadoPromedio = calcularPromedio(array);

  $promedio.textContent = `El promedio es de ${resultadoPromedio}`;
}

function mostrarNumeroPequeño(array) {
  const $numeroPequeño = document.querySelector('#numero-pequeño');
  const resultadoNumeroPequeño = calcularNumeroPequeño(array);

  $numeroPequeño.textContent = `El numero más pequeño es ${resultadoNumeroPequeño}`;
}

function mostrarNumeroGrande(array) {
  const $numeroGrande = document.querySelector('#numero-grande');
  const resultadoNumeroGrande = calcularNumeroGrande(array);

  $numeroGrande.textContent = `El numero más grande es ${resultadoNumeroGrande}`;
}

function mostrarNumeroFrecuente(array) {
  const $numeroFrecuente = document.querySelector('#numero-frecuente');
  const resultadoNumeroFrecuente = buscarNumeroFrecuente(array);

  $numeroFrecuente.textContent = `El numero más frecuente es ${resultadoNumeroFrecuente}`;
}

const $listaArray = document.querySelectorAll('li');

mostrarPromedio($listaArray);
mostrarNumeroPequeño($listaArray);
mostrarNumeroGrande($listaArray);
mostrarNumeroFrecuente($listaArray);
