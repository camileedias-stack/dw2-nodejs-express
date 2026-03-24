document.write("1 e 2)<br>");
let listaClientes = [
    {
        nome: "Camile Dias",
        endereco: "Rua Ivo Zanella",
        cpf: 53345664532
    },
    {
        nome: "Ana Aparecida",
        endereco: "Estrada Nossa Senhora",
        cpf: 457558623982
    },
    {
        nome: "Osni Dias",
        endereco: "Rua Palmeiras",
        cpf:633333372568362
    }    
];


listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Endereço: ${cliente.endereco} <br>
    CPF: ${cliente.cpf} <br><hr><br>
    
    `);
});

document.write("<br><br>");
document.write("3)<br>");

listaClientes.push({
    nome: "Ruth",
    endereco: "Rua São Jose",
    cpf: 5552596542121
});


listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Endereço: ${cliente.endereco} <br>
    CPF: ${cliente.cpf} <br><hr><br>
    
    `);
});
document.write("<br><br>");
document.write("4)<br>");
document.write(`A quantidade de clientes cadastrado na lista é ${listaClientes.length}`);