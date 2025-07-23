// Declarar uma função

// function calcularArea(raio) {
//     const pi = 3.14159;
//     return  pi * raio * raio;
// }

// let raio = 5;
// let area = calcularArea(raio);

// console.log(`A área do círculo é de ${area}m², send que seu raio é de ${raio}m`);

function calculateCircleArea(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}

let radii = [3, 5, 7];
for (let i = 0; i < radii.length; i++) {
    console.log("Área do círculo com raio " + radii[i] + " é: " + calculateCircleArea(radii[i]));
}