// ======================================
// Vinheria Agnello - Checkpoint 02
// Sistema de cadastro e análise de vinhos
// ======================================


// ===== VARIÁVEIS GLOBAIS =====
let totalCadastros = 0;        // conta quantos vinhos foram cadastrados
let totalEstoqueBaixo = 0;     // conta quantos vinhos têm estoque < 5
let safraMaisAntiga = null;    // guarda a menor safra encontrada
let nomeMaisAntigo = "";       // guarda o nome do vinho mais antigo

// variáveis para guardar cada vinho cadastrado
let nome1, tipo1, safra1, quant1;
let nome2, tipo2, safra2, quant2;
let nome3, tipo3, safra3, quant3;
let nome4, tipo4, safra4, quant4;
let nome5, tipo5, safra5, quant5;


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

    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);

    // aviso se o estoque estiver baixo
    if (estoqueBaixo) {
        console.log("ESTOQUE MENOR DE 5!");
    }

    console.log("====================================");

    // mensagem para o usuário
    alert("Vinho cadastrado: " + nome + "\nClassificação: " + classificacao);
}

// função para processar cada vinho cadastrado
function processarVinho(nome, safra, quantidade) {

    totalCadastros++; // incrementa contador

    let estoqueBaixo = verificarEstoque(quantidade);

    // conta quantos têm estoque baixo
    if (estoqueBaixo) {
        totalEstoqueBaixo++;
    }

    // verifica o vinho mais antigo
    if (safraMaisAntiga === null || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nome;
    }

    return estoqueBaixo;
}


// ===== CADASTRO DOS VINHOS =====

// --- Vinho 1 ---
nome1 = validarEntrada("Digite o nome do vinho:");
tipo1 = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
safra1 = parseInt(validarEntrada("Digite o ano da safra:"));
quant1 = parseInt(validarEntrada("Digite a quantidade em estoque:"));

let classificacao1 = classificarVinho(safra1);
let estoqueBaixo1 = processarVinho(nome1, safra1, quant1);
mostrarDados(nome1, tipo1, safra1, quant1, classificacao1, estoqueBaixo1);

let resposta = prompt("Deseja cadastrar outro vinho? (S/N)");

// --- Vinho 2 ---
if (resposta !== null && resposta.toUpperCase() === "S") {

    nome2 = validarEntrada("Digite o nome do vinho:");
    tipo2 = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    safra2 = parseInt(validarEntrada("Digite o ano da safra:"));
    quant2 = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    let classificacao2 = classificarVinho(safra2);
    let estoqueBaixo2 = processarVinho(nome2, safra2, quant2);
    mostrarDados(nome2, tipo2, safra2, quant2, classificacao2, estoqueBaixo2);

    resposta = prompt("Deseja cadastrar outro vinho? (S/N)");
}

// --- Vinho 3 ---
if (resposta !== null && resposta.toUpperCase() === "S") {

    nome3 = validarEntrada("Digite o nome do vinho:");
    tipo3 = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    safra3 = parseInt(validarEntrada("Digite o ano da safra:"));
    quant3 = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    let classificacao3 = classificarVinho(safra3);
    let estoqueBaixo3 = processarVinho(nome3, safra3, quant3);
    mostrarDados(nome3, tipo3, safra3, quant3, classificacao3, estoqueBaixo3);

    resposta = prompt("Deseja cadastrar outro vinho? (S/N)");
}

// --- Vinho 4 ---
if (resposta !== null && resposta.toUpperCase() === "S") {

    nome4 = validarEntrada("Digite o nome do vinho:");
    tipo4 = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    safra4 = parseInt(validarEntrada("Digite o ano da safra:"));
    quant4 = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    let classificacao4 = classificarVinho(safra4);
    let estoqueBaixo4 = processarVinho(nome4, safra4, quant4);
    mostrarDados(nome4, tipo4, safra4, quant4, classificacao4, estoqueBaixo4);

    resposta = prompt("Deseja cadastrar outro vinho? (S/N)");
}

// --- Vinho 5 ---
if (resposta !== null && resposta.toUpperCase() === "S") {

    nome5 = validarEntrada("Digite o nome do vinho:");
    tipo5 = validarEntrada("Digite o tipo (Tinto, Branco ou Rosé):");
    safra5 = parseInt(validarEntrada("Digite o ano da safra:"));
    quant5 = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    let classificacao5 = classificarVinho(safra5);
    let estoqueBaixo5 = processarVinho(nome5, safra5, quant5);
    mostrarDados(nome5, tipo5, safra5, quant5, classificacao5, estoqueBaixo5);
}


// ===== RESULTADO FINAL =====

console.log("===== RESUMO FINAL =====");
console.log("Total de cadastros: " + totalCadastros);
console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
console.log("Vinho mais antigo: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")");
console.log("========================");

// exibe resumo para o usuário
alert(
    "Resumo final:\n" +
    "Cadastros: " + totalCadastros + "\n" +
    "Estoque baixo: " + totalEstoqueBaixo + "\n" +
    "Mais antigo: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")"
);
