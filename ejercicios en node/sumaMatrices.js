
function sumarMatrices(matriz1, matriz2) {
    // Verificar que las matrices tengan la misma dimensión
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      throw new Error('Las matrices deben tener la misma dimensión');
    }
    
    // Crear una matriz para almacenar el resultado
    var resultado = [];
    
    // Recorrer las filas de las matrices
    for (var i = 0; i < matriz1.length; i++) {
      var fila = [];
      
      // Recorrer las columnas de las matrices
      for (var j = 0; j < matriz1[0].length; j++) {
        // Sumar los elementos correspondientes de las matrices
        var suma = matriz1[i][j] + matriz2[i][j];
        
        // Agregar el resultado a la fila
        fila.push(suma);
      }
      
      // Agregar la fila al resultado
      resultado.push(fila);
    }
    
    return resultado;
  }
  
  // Ejemplo de uso
  var matriz1 = [[1, 2], [3, 4]];
  var matriz2 = [[5, 6], [7, 8]];
  
  var resultado = sumarMatrices(matriz1, matriz2);
  console.log(resultado); // [[6, 8], [10, 12]]
  