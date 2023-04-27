document.querySelector('#agregar-integrante').onclick = function (event) {
  crearInput();
  mostrarBotonCalculo();
  event.preventDefault();
};

document.querySelector('#quitar-integrante').onclick = function (event) {
  const $divInputs = document.querySelectorAll('#input-salario');
  ocultarResultados();
  borrarInput();
  if ($divInputs.length === 1) {
    ocultarBotonCalculo();
  }
  event.preventDefault();
};

document.querySelector('#boton-calculo').onclick = function () {
  calcularSalarios();
  mostrarResultados();
};

function crearInput() {
  const $formSalarios = document.querySelector('#form-salarios');
  const $div = document.createElement('div');
  $div.id = 'input-salario';
  const $label = document.createElement('label');
  $label.textContent = 'Salario integrante ';
  const $input = document.createElement('input');
  $input.type = 'number';

  $label.appendChild($input);
  $div.appendChild($label);
  $formSalarios.appendChild($div);
}

function borrarInput() {
  const $divInputs = document.querySelectorAll('#input-salario');
  if ($divInputs.length > 0) {
    $divInputs[$divInputs.length - 1].remove();
  }
}

function mostrarBotonCalculo() {
  document.querySelector('#boton-calculo').className = '';
}

function ocultarBotonCalculo() {
  document.querySelector('#boton-calculo').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#resultados').className = '';
}

function ocultarResultados() {
  document.querySelector('#resultados').className = 'oculto';
}

function calcularSalarios() {
  const salarios = obtenerSalarios();
  const $divResultados = document.querySelector('#resultados');


  const textoMayorSalarioAnual = document.createElement('div');
  textoMayorSalarioAnual.textContent = 'El mayor salario anual es ' + calcularMayorSalarioAnual(salarios);
  const textoMenorSalarioAnual = document.createElement('div');
  textoMenorSalarioAnual.textContent = 'El menor salario anual es ' + calcularMenorSalarioAnual(salarios);
  const textoPromedioAnual = document.createElement('div');
  textoPromedioAnual.textContent = 'El salario anual promedio es ' + calcularSalarioAnualPromedio(salarios);
  const textoPromedioMensual = document.createElement('div');
  textoPromedioMensual.textContent = 'El salario mensual promedio es ' + calcularSalarioMensualPromedio(salarios);

  $divResultados.appendChild(textoMayorSalarioAnual);
  $divResultados.appendChild(textoMenorSalarioAnual);
  $divResultados.appendChild(textoPromedioAnual);
  $divResultados.appendChild(textoPromedioMensual);
}

function obtenerSalarios() {
  const $salarios = document.querySelectorAll('#input-salario input');
  const salarios = [];

  for (let i = 0; i < $salarios.length; i++) {
    if ($salarios[i].value !== '') {
      salarios.push(Number($salarios[i].value));
    }
  }


  return salarios;
}

function calcularMayorSalarioAnual(salarios) {
  let salarioMayor = salarios[0];

  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] > salarioMayor) {
      salarioMayor = salarios[i];
    }
  }

  return salarioMayor;
}

function calcularMenorSalarioAnual(salarios) {
  let salarioMenor = salarios[0];

  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] < salarioMenor) {
      salarioMenor = salarios[i];
    }
  }
  
  return salarioMenor;
}

function calcularSalarioAnualPromedio(salarios) {
  let suma = 0;

  for (let i = 0; i < salarios.length; i++) {
    suma += salarios[i];
  }


  return (suma / salarios.length).toFixed(2);
}

function calcularSalarioMensualPromedio(salarios) {
  let salariosMensuales = convertirSalariosAnualesEnMensuales(salarios);
  let suma = 0;

  for (let i = 0; i < salariosMensuales.length; i++) {
    suma += salariosMensuales[i];
  }
 
  return (suma / salariosMensuales.length).toFixed(2);
 
}

function convertirSalariosAnualesEnMensuales(salarios) {
  const salariosMensuales = [];
  const mesesEnUnAnio = 12;

  for (let i = 0; i < salarios.length; i++) {
    salariosMensuales.push((salarios[i] / mesesEnUnAnio.toFixed(2)));
  }

  return salariosMensuales;
}
