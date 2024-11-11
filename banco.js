// Commit 1: Importando dependências
import { rl } from "./Banco";
import { ContaBancaria, ContaCorrente, ContaPoupanca } from "./Banco";


// Commit 2: Definindo as variáveis globais
let contas: ContaBancaria[] = [];
let user: ContaBancaria | null = null; // Conta atual selecionada
