import { validate } from "../../../src/example2/after/cpf";

test("Deve validar um cpf válido", function () {
    const isValid = validate("935.411.347-80");
    expect(isValid).toBeTruthy();
});

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
    "444.444.444-44",
    "555.555.555-55",
    "666.666.666-66",
    "777.777.777-77",
    "888.888.888-88",
    "999.999.999-99",
];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function () {
    const isValid = validate("111.111.111-11");
    expect(isValid).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", function () {
    const isValid = validate(null);
    expect(isValid).toBeFalsy();
});

test("Deve validar um cpf válido sem pontos e traços", function () {
    const isValid = validate("93541134780");
    expect(isValid).toBeTruthy();
});

test("Deve validar um cpf válido com alguns pontos", function () {
    const isValid = validate("935.411.34780");
    expect(isValid).toBeTruthy();
});