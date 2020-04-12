/*Validación TC */
//Conviertiendo el string en Array
const stringToArray = (creditCardNumber) => {
    let creditCardArray = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
        let charToNumber = parseInt(creditCardNumber.charAt(i)) //devuelve un nuevo string
        creditCardArray.push(charToNumber); //añade los elementos al final del array, convierte caracteres en números
    }
    return creditCardArray;
}

let newArray = stringToArray(creditCardNumber);
//Reversando el Array
const reverseArray = (newArray) => {
    let reversedArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) { //invierte el orden del array
        let number = parseInt(newArray[i]);
        reversedArray.push(number); //obtenemos el nuevo array reversado
    }
    return reversedArray;
}

let arrayReversed = reverseArray(newArray);
//Obteniendo los números pares
const pares = (arrayReversed) => {
    let sonPares = [];
    for (let i = 0; i < arrayReversed.length; i++) { //obtiene los dígitos
        if (i % 2 > 0) {
            sonPares.push(arrayReversed[i]); //define los números pares
        }
    }
    return sonPares;
}

let evenNumbers = pares(arrayReversed);
//Números impares
const impares = (arrayReversed) => {
    let numerosImpares = [];
    for (let i = 0; i < arrayReversed.length; i++) { //obtiene los dígitos
        if (i / 2 === Math.round(i / 2)) {
            numerosImpares.push(arrayReversed[i]); //define los números impares
        }
    }
    return numerosImpares;
}

let oddNumbers = impares(arrayReversed);
//Multiplicando los números por 2 
const doubleNumbers = (evenNumbers) => {
    let sumatoria = [];
    for (let i = 0; i < evenNumbers.length; i++) {
        let multiplied = evenNumbers[i] * 2
        if (multiplied >= 10) {
            sumatoria.push((multiplied - 1) % 9 + 1);
        } else {
            sumatoria.push(multiplied);
        }
    }
    return sumatoria;
}

let finalEvenNumbers = doubleNumbers(evenNumbers);
//Concatenando los números para verificación
const joinNumbers = (oddNumbers, finalEvenNumbers) => {
    let numeroTotal = oddNumbers.concat(finalEvenNumbers);
    return numeroTotal
}

let totalNumbers = joinNumbers(oddNumbers, finalEvenNumbers);
//Suma de todos los dígitos
const addTotalNumbers = (totalNumbers) => {
    let suma = 0;
    for (let i = 0; i < totalNumbers.length; i++) {
        suma = suma + totalNumbers[i];
    }
    return suma;
}

let allNumbers = addTotalNumbers(totalNumbers)
    //Realizando división por 10
const encontrandoResiduos = (allNumbers) => {
    if (allNumbers % 10 == 0) {
        return true;
    } else {
        return false;
    }
}


const validator = {
    isValid: (creditCardNumber) => {
        const newArray = stringToArray(creditCardNumber);
        const arrayReversed = reverseArray(newArray);
        const evenNumbers = pares(arrayReversed);
        const oddNumbers = impares(arrayReversed);
        const finalEvenNumbers = doubleNumbers(evenNumbers);
        const totalNumbers = joinNumbers(oddNumbers, finalEvenNumbers);
        const allNumbers = addTotalNumbers(totalNumbers);
        const finalValue = encontrandoResiduos(allNumbers);
        return finalValue;
    },

    maskify: (creditCardNumber) => {
        return creditCardNumber.replace(/\d(?=\d{4})/g, "#");
    }
};

export default validator;