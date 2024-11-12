// Commit 1: Importando dependências
import { rl } from "./Banco";
import { ContaBancaria, ContaCorrente, ContaPoupanca } from "./Banco";


// Commit 2: Definindo as variáveis globais
let contas: ContaBancaria[] = [];
let user: ContaBancaria | null = null; // Conta atual selecionada

// Commit 3: Função para criar uma nova conta bancária
function criarConta(tipo: string): ContaBancaria {
    console.clear();
    let id = rl.questionInt("Insira o ID do usuario: ");
    let nome = rl.question("Insira o nome do usuario: ");
    let email = rl.question("Insira o email do usuario: ");
    let senha = rl.questionInt("Insira a senha do usuario: ");
    let saldo = rl.questionInt("Insira o saldo inicial do usuario: ");

    if (tipo === "1") {
        let conta = new ContaCorrente(id, nome, email, senha, saldo);
        console.log(`Conta Corrente criada para ${nome} com saldo de R$${saldo}.`);
        return conta;
    } else if (tipo === "2") {
        let conta = new ContaPoupanca(id, nome, email, senha, saldo);
        console.log(`Conta Poupança criada para ${nome} com saldo de R$${saldo}.`);
        return conta;
    } else {
        throw new Error("Tipo de conta inválido.");
    }
}