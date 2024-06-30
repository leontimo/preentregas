//conversor de moneda de pesos a dolares por consola//

let moneda = prompt("Ingrese un monto en pesos");

const pesos = 1;
const dolar = 1300;

let conversor = () => {
    if (isNaN(moneda)) {
        console.log("Por favor, ingrese un monto válido en números.");
        return;
    } else {
        let resultado = moneda * pesos / dolar;
        console.log(`Su monto en dólares es: ${resultado}`);
    }
};

conversor();