let totalCadastros = 0;        
let totalEstoqueBaixo = 0;     
let safraMaisAntiga = null;    
let nomeMaisAntigo = "";       

function validarEntrada(mensagem) {
    let valor = prompt(mensagem);

    while (valor === "" || valor === null) {
        alert("Valor inválido! Tente novamente.");
        valor = prompt(mensagem);
    }

    return valor;
}

function verificarEstoque(quantidade) {
    if (quantidade < 5) {
        return true;
    }
    return false;
}

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear(); 
    let idade = anoAtual - safra;           

    if (idade <= 3) {
        return "Vinho jovem";
    } else if (idade <= 10) {
        return "Vinho amadurecido";
    } else {
        return "Vinho antigo";
    }
}

function mostrarDados(nome, tipo, safra, quantidade, classificacao, estoqueBaixo) {

    console.log("====================================");
    console.log("Cadastro de Vinho - Vinheria Agnello");
    console.log("====================================");

    console.log(`Nome: ${nome}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Safra: ${safra}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Classificação: ${classificacao}`);

    if (estoqueBaixo) {
        console.log("ESTOQUE MENOR DE 5!");
    }

    console.log("====================================");

    alert(`Vinho cadastrado: ${nome}\nClassificação: ${classificacao}`);
}


let continuar = true;

while (continuar) {

    let nomeVinho = validarEntrada("Digite o nome do vinho:");
    let tipoVinho = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    let safraVinho = parseInt(validarEntrada("Digite o ano da safra:"));
    let quantidadeEstoque = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    totalCadastros++; 

    let estoqueBaixo = verificarEstoque(quantidadeEstoque);
    let classificacao = classificarVinho(safraVinho);

    if (estoqueBaixo) {
        totalEstoqueBaixo++;
    }

    if (safraMaisAntiga === null || safraVinho < safraMaisAntiga) {
        safraMaisAntiga = safraVinho;
        nomeMaisAntigo = nomeVinho;
    }

    mostrarDados(
        nomeVinho,
        tipoVinho,
        safraVinho,
        quantidadeEstoque,
        classificacao,
        estoqueBaixo
    );

    let resposta = prompt("Deseja cadastrar outro vinho? (S/N)");

    if (resposta === null || resposta.toUpperCase() !== "S") {
        continuar = false;
    }
}

console.log("===== RESUMO FINAL =====");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${totalEstoqueBaixo}`);
console.log(`Vinho mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`);
console.log("========================");

alert(
    `Resumo final:\n` +
    `Cadastros: ${totalCadastros}\n` +
    `Estoque baixo: ${totalEstoqueBaixo}\n` +
    `Mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`
);