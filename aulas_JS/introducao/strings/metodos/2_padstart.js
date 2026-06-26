// caso precisemos de um padrão de dado enviado com um limite minimo de caracteres, podemos usar o padstart para adicionar digitos no inicio da string
let sku = '12'

// 5 definido como numero maximo de caracteres vai imprimir 00012
console.log(sku.padStart(5, '0'))

// padEnd faz o contrario com o mesmo principio, vai imprimir 12000
console.log(sku.padEnd(5, '0'))