//import validator from './validator.js';

/*Input Datos Tarjeta*/
function isValid() {
    var nombre = (document.getElementById("nombre").value);
    var numberCardStrng = (document.getElementById("numtarjeta").value); //llamando los datos del input por medio del ID
    var numberCardArrayR = numberCardStrng.split('').reverse(); //convirtiendo los a Array enorden inverso  //console.log("listaNumero", numberCardStrng, typeof numberCardStrng);

    /*Validación TC */
    var newNumberCardArrayR = ""
    for (i = 1; i < numberCardArrayR.length; i += 2) {
        var numberPairs = parseInt(numberCardArrayR[i]) * 2; //aplicar la operación a los numeros a las posiciones pares //console.log("Numeros pares multiplicados",numberPairs, typeof numberPairs)
        if (parseInt(numberPairs) >= 10) {
            var numberPairsDouble = numberPairs.toString(); // transformar numeros pares a String         //console.log("Numeros pares a String",numberPairsDouble, typeof numberPairsDouble)
            var numberPairsSum = parseInt(numberPairsDouble[0]) + parseInt(numberPairsDouble[1]); // sumar los numeros con digitos mayor de 10     //console.log("Numeros pares sumados",numberPairsSum, typeof numberPairsSum)
            numberCardArrayR.splice(i, 1, numberPairsSum) // incluir nuevos numeros mayor de 10 en el array invertido   //console.log("lista con numeros >10",numberCardArrayR)
        } else {
            numberCardArrayR.splice(i, 1, numberPairs) // Todos los que fueron multiplicados por 2 y son menor a 10 se incluiran en el array   //console.log("lista con numeros <=9",numberCardArrayR, typeof numberCardArrayR)
        }
        var newNumberCardArrayR = numberCardArrayR; // se crea nuevo array con los numeros nuevos   //console.log("nuevos datos", newNumberCardArrayR, typeof newNumberCardArrayR)
    }

    var sum = parseInt(newNumberCardArrayR[0]) + parseInt(newNumberCardArrayR[1]) + parseInt(newNumberCardArrayR[2]) + parseInt(newNumberCardArrayR[3]) + parseInt(newNumberCardArrayR[4]) + parseInt(newNumberCardArrayR[5]) + parseInt(newNumberCardArrayR[6]) + parseInt(newNumberCardArrayR[7]) +
        parseInt(newNumberCardArrayR[8]) + parseInt(newNumberCardArrayR[9]) + parseInt(newNumberCardArrayR[10]) + parseInt(newNumberCardArrayR[11]) + parseInt(newNumberCardArrayR[12]) + parseInt(newNumberCardArrayR[13]) + parseInt(newNumberCardArrayR[14]) + parseInt(newNumberCardArrayR[15]); //document.write("suma Proyecto" + sum + "<br><br>")
    if (sum % 10 === 0) {
        return document.write("Hola " + nombre + " su tarjeta es valida")
    } else {
        return document.write("Hola " + nombre + " su tarjeta es invalida")
    }

}

//console.log(validator);