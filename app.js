const ingredientes = ["harina", "agua", "sal", "oregano", "tomate", "jamon", "mozzarella", "aceitunas", "ananá", "levadura"];
const pares = [];
const impares = [];

const clasificador = (ingredientes, pares, impares) => {
    ingredientes.forEach(ingrediente => { 
        ingrediente.length % 2 == 0 ? pares.push(ingrediente) : impares.push(ingrediente)
    })

    console.log(`
Ingredientes: ${ingredientes};

Pares: ${pares};

Impares: ${impares}
    `)
}

clasificador(ingredientes, pares, impares);
