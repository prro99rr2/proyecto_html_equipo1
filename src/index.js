/*document.getElementById("calcularPropina").onclick=function(){

    let precio = Number(document.getElementById("precio").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);
    let propinaCalculada =precio *porcentaje/100;
    document.getElementById("propinaCalculada").innerHTML=propinaCalculada;
    document.getElementById("totalPagar").innerHTML=precio+propinaCalculada;

}*/

document.getElementById("calcularPropinaRadio").onclick=function(){
    let precio = Number(document.getElementById("precio").value);
    let porcentaje = Number(document.querySelector('input[name="porcentajeSelec"]:checked').value);
    let propinaCalculada =precio *porcentaje/100;
    document.getElementById("propinaCalculadaRadio").innerHTML=propinaCalculada;
    document.getElementById("totalPagarRadio").innerHTML=precio+propinaCalculada;

}
