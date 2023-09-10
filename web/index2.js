
var precioInput= document.getElementById('precio');
var porcentajeInput = document.getElementById('porcentaje');
var calcularPropinaButton = document.getElementById('calcularPropina');
var propinaCalculadaSpan = document.getElementById('propinaCalculada');
var totalPagarSpan = document.getElementById('totalPagar');

calcularPropinaButton.addEventListener('click', calcularPropina);

function calcularPropina() {
    
    var precio = parseFloat(precioInput.value);
    var porcentaje = parseFloat(porcentajeInput.value);

    
    var propina = (precio * porcentaje) / 100;
    var total = precio + propina;

    propinaCalculadaSpan.textContent = propina.toFixed(2);
    totalPagarSpan.textContent = total.toFixed(2);
}
