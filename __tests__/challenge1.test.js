const {suma} = require("../index.js");

test("Deberia regresar 8 al pasar como atgumento 6 y 2", () => {
    let a = 6;
    let b = 2;

    let result = suma(a,b);

    expect(result).toBe(8);
});

test("Debería regresar 4 al ingresar 8 y 4", () => {
    let a = 8;
    let b = 4;

    let result = (resta(a,b);
    expect(result).toBe(4);
})