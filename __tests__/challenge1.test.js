const {suma} = require("../index.js");

test("Deberia regresar 8 al pasar como atgumento 6 y 2", () => {
    let a = 6;
    let b = 2;

    let result = suma(a,b);

    expect(result).toBe(8);
});
