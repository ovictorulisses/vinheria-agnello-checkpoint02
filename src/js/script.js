// ======================================
// Vinheria Agnello - Checkpoint 02
// Sistema de cadastro e análise de vinhos
// ======================================


// ===== VARIÁVEIS GLOBAIS =====
let totalCadastros = 0;        // conta quantos vinhos foram cadastrados
let totalEstoqueBaixo = 0;     // conta quantos vinhos têm estoque < 5
let safraMaisAntiga = null;    // guarda a menor safra encontrada
let nomeMaisAntigo = "";       // guarda o nome do vinho mais antigo

// ===== FUNÇÕES =====

// função para validar entrada do usuário (não aceita vazio ou cancelado)
function validarEntrada(mensagem) {
    let valor = prompt(mensagem);

    while (valor === "" || valor === null) {
        alert("Valor inválido! Tente novamente.");
        valor = prompt(mensagem);
    }

    return valor;
}

// função para verificar se o estoque está baixo
function verificarEstoque(quantidade) {
    if (quantidade < 5) {
        return true;
    }
    return false;
}

// função para classificar o vinho pela idade
function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear(); // pega o ano atual
    let idade = anoAtual - safra;            // calcula idade do vinho

    if (idade <= 3) {
        return "Vinho jovem";
    } else if (idade <= 10) {
        return "Vinho amadurecido";
    } else {
        return "Vinho antigo";
    }
}

// função para exibir os dados no console e alert
function mostrarDados(nome, tipo, safra, quantidade, classificacao, estoqueBaixo) {

    console.log("====================================");
    console.log("Cadastro de Vinho - Vinheria Agnello");
    console.log("====================================");

    console.log(`Nome: ${nome}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Safra: ${safra}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Classificação: ${classificacao}`);

    // aviso se o estoque estiver baixo
    if (estoqueBaixo) {
        console.log("ESTOQUE MENOR DE 5!");
    }

    console.log("====================================");

    // mensagem para o usuário
    alert(`Vinho cadastrado: ${nome}\nClassificação: ${classificacao}`);
}

// ===== LOOP PRINCIPAL =====

let continuar = true;

while (continuar) {

    // --- Entrada de Dados ---
    let nomeVinho = validarEntrada("Digite o nome do vinho:");
    let tipoVinho = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    let safraVinho = parseInt(validarEntrada("Digite o ano da safra:"));
    let quantidadeEstoque = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    totalCadastros++; // incrementa contador
    
    // --- Processamento ---
    let estoqueBaixo = verificarEstoque(quantidadeEstoque);
    let classificacao = classificarVinho(safraVinho);

    // conta quantos têm estoque baixo
    if (estoqueBaixo) {
        totalEstoqueBaixo++;
    }

    // verifica o vinho mais antigo
    if (safraMaisAntiga === null || safraVinho < safraMaisAntiga) {
        safraMaisAntiga = safraVinho;
        nomeMaisAntigo = nomeVinho;
    }

    // --- Saída de Dados ---
    mostrarDados(
        nomeVinho,
        tipoVinho,
        safraVinho,
        quantidadeEstoque,
        classificacao,
        estoqueBaixo
    );

    // --- Controle de Repetição ---
    let resposta = prompt("Deseja cadastrar outro vinho? (S/N)");

    if (resposta === null || resposta.toUpperCase() !== "S") {
        continuar = false;
    }
}

// ===== RESULTADO FINAL =====

console.log("===== RESUMO FINAL =====");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${totalEstoqueBaixo}`);
console.log(`Vinho mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`);
console.log("========================");

// exibe resumo para o usuário
alert(
    `Resumo final:\n` +
    `Cadastros: ${totalCadastros}\n` +
    `Estoque baixo: ${totalEstoqueBaixo}\n` +
    `Mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`
);