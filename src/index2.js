
function calcular(){
    //creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
  let precio =0;
  let propina =0;
  let propinacalculada = 0;
  let total =0;
  
  //Asignacion del valor capturado en la caja del texto enla variable
  precio = document.getElementById('precio').value;
  propina = document.getElementById('propina').value;
  
  //cálculo de propina
  propinacalculada =((precio * propina)/100);
  //Asignacion del resultado en la caja de propina calculada
  document.getElementById('propina calculada').value=propinacalculada;
  //calculo del total
  total =parseFloat (precio) + parseFloat(propinacalculada);
  
  //Asignación del valor de la variable total a la caja de texto total
  document.getElementById('total').value=total;
  console.log(total);
  }
  function calcular(){
    //creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
  let precio =0;
  let propina =0;
  let propinacalculada = 0;
  let total =0;
  
  //Asignacion del valor capturado en la caja del texto enla variable
  precio = document.getElementById('precio').value;
  propina = document.getElementById('propina').value;
  
  //cálculo de propina
  propinacalculada =((precio * propina)/100);
  //Asignacion del resultado en la caja de propina calculada
  document.getElementById('propina calculada').value=propinacalculada;
  //calculo del total
  total =parseFloat (precio) + parseFloat(propinacalculada);
  
  //Asignación del valor de la variable total a la caja de texto total
  document.getElementById('total').value=total;
  console.log(total);
  }
  