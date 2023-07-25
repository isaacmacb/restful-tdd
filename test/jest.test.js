test('devo conhecer as principais assertivas do jest', () => {
    // Define a variável 'number' como null
    let number = null;

    // Verifica se 'number' é nulo (null)
    expect(number).toBeNull();

    // Atualiza o valor de 'number' para 10
    number = 10;

    // Verifica se 'number' não é nulo (ou seja, possui um valor diferente de null)
    expect(number).not.toBeNull()

    // Verifica se 'number' é exatamente igual a 10 (tipo e valor)
    expect(number).toBe(10);

    // Verifica se 'number' é igual a 10 (valor) utilizando uma comparação mais flexível
    expect(number).toEqual(10);

    // Verifica se 'number' é maior do que 9
    expect(number).toBeGreaterThan(9);

    // Verifica se 'number' é menor do que 11
    expect(number).toBeLessThan(11);
});

test('devo saber trabalhar com objetos', () => {
    const obj = {
        name: 'Isaac Maciel',
        age: 22
    }
    expect (obj).toHaveProperty('name')
    expect (obj).toHaveProperty('name', 'Isaac Maciel')
    expect(obj.name).toBe('Isaac Maciel')
});