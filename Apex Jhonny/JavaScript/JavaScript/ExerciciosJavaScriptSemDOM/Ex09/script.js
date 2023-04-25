let pessoas = [];
let masculino = 0;
let feminino = 0;
let maisAlto = 0;
let sexoMaisAlto = "";
// Perguntar o nome e o sexo das pessoas
for (let i = 0; i < 5; i++) {
    let pessoa = {
        altura: parseFloat(prompt("Digite sua altura")),
        sexo: prompt("Digite seu sexo").toUpperCase() // M ou F
    }
    pessoas.push(pessoa);
}
// verificar quantas pessoas sao de cada sexo
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].sexo === "M") {
        masculino++;
    } else {
        feminino++;
    }
}
//Verificar qual o sexo da pessoa mais alta
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura > maisAlto) {
        maisAlto = pessoas[i].altura;
        sexoMaisAlto = pessoas[i].sexo;
    }
}
document.write(`Masculino: ${masculino}<br>
Feminino: ${feminino}<br>
A pessoa mais alta tem ${maisAlto} de altura é do sexo ${sexoMaisAlto}
`)

