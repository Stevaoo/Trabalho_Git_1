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

// Commit 5: Função FAQ para tratar dúvidas frequentes dos usuários
function FAQ(): void {
    console.clear();
    console.log(`\ 
        ---------------------------------------------------------------------------------------------
        ------------------------------ PERGUNTAS FREQUENTES -----------------------------------------
        ---------------------------------------------------------------------------------------------
        - 1. COMO FAÇO LOGIN NA MINHA CONTA BANCÁRIA ONLINE ?                                       -
        - 2. ESQUECI MINHA SENHA. COMO POSSO RECUPERA-LÁ ?                                          -
        - 3. O QUE FAZER SE MINHA CONTA FOR BLOQUEADA OU SUSPENSA ?                                 -
        - 4. COMO POSSO VERIFICAR O SALDO E HISTÓRICO DE TRANSAÇÕES DA MINHA CONTA ?                -
        - 5. COMO REALIZAR TRANSFERÊNCIAS ENTRE CONTAS OU PARA TERCEIROS PELO SITE ?                -
        - 6. O QUE FAZER SE EU SUSPEITAR DE ATIVIDADE FRAUDELENTA NA MINHA CONTA ?                  -
        ---------------------------------------------------------------------------------------------
        ---------------------------- DIGITE "SAIR" PARA VOLTAR --------------------------------------
        ---------------------------------------------------------------------------------------------`);

    let loop = true;

    while (loop) {
        let duvida = rl.question("Digite o numero da sua duvida ou 'SAIR' para voltar: ");
        switch (duvida) {
            case "1":
            case " COMO FAÇO LOGIN NA MINHA CONTA BANCÁRIA ONLINE ?":
            console.clear();
                console.log(`\ 
                1 - ➱ Quando estiver no menu inicial do sistema, escolha a opção para "Entrar na Conta".
                2 - ✔ Você será solicitado a inserir o ID da sua conta e a senha correspondente.
                3 - ✔ O sistema verifica se o ID e a senha inseridos correspondem a uma conta existente. 
                Se estiverem corretos, você será autenticado e poderá acessar as funcionalidades da sua conta.
                4 - ✔ Se o login for bem-sucedido, uma mensagem de boas-vindas com o seu nome será exibida, 
                indicando que você entrou na conta com sucesso.\n`);
                break;
            case "2":
            case "ESQUECI MINHA SENHA. COMO POSSO RECUPERA-LÁ ?":
            console.clear();
                console.log(`Sinto muito, nosso Banco é inicial....seu dinheiro agora é nosso! Obrigado.`);
                break;

            case "3":
            case "O QUE FAZER SE MINHA CONTA FOR BLOQUEADA OU SUSPENSA ?":
            console.clear();
                console.log("Se for chorar, manda áudio! Nós não nos responsabilizamos por contas bloqueadas ou suspensas.\n");
                break;

            case "4":
            case " COMO POSSO VERIFICAR O SALDO E HISTÓRICO DE TRANSAÇÕES DA MINHA CONTA ?":
            console.clear();
                console.log(`\ 
                    1 - ➱ No menu bancário, selecione a opção 2. Entrar na Conta.
                    2 - ✔ Insira o ID da conta e a senha.
                    3 - ✔ No menu da conta, selecione a opção 1. 
                    Ver Extrato para visualizar o saldo e o histórico de transações.\n`);
                break;

            case "5":
            case " COMO REALIZAR TRANSFERÊNCIAS ENTRE CONTAS OU PARA TERCEIROS PELO SITE ?":
            console.clear();
                console.log(`\ 
                    1 - ➱ No menu bancário, selecione a opção 2. Entrar na Conta.
                    2 - ✔ Insira o ID da conta e a senha.
                    3 - ✔ No menu da conta, selecione a opção 4. Transferência.
                    4 - ✔ Insira o valor da transferência.
                    5 - ✔ Insira o ID da conta de destino. (O sistema verificará se a conta de destino existe.)
                    6 - ✔ O sistema realizará a transferência e atualizará o seu saldo e o histórico de transações.\n`);
                break;

            case "6":
            case "O QUE FAZER SE EU SUSPEITAR DE ATIVIDADE FRAUDELENTA NA MINHA CONTA ?":
            console.clear();
                console.log(`Ligue para a central de atendimento do banco pelo número 4002-8922. 
                    \n Informe o problema e forneça os detalhes necessários para que a equipe possa investigar a situação.\n`);
                break;

            case "SAIR":
            case "Sair":
            case "sair":
                loop = false;
                console.log("Saindo do FAQ...");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

// Commit 6: Função para exibir o menu inicial
function menuInicial(): void {
    console.clear();
    let continuar = true;
    while (continuar) {
        console.log(`\ 
        -----------------------------------
        ------------ BANRISUL -------------
        -----------------------------------
        - 1. ACESSAR BANRISUL             -
        - 2. INFORMAÇÕES DO BANRISUL      -
        - 3. AJUDA                        -
        - 4. SAIR                         -
        -----------------------------------`);
        
        let opcao = rl.questionInt("Escolha uma opcao: ");

        switch (opcao) {
            case 1:
                console.clear();
                console.log("\nEntrando No Banrisul...");
                menuBancario();
                break;
            case 2:
                console.clear();
                console.log("\n O Banrisul oferece serviços de contas correntes e poupanças.");
                break;
            case 3:
                console.log("\nEntrando em contato com o FAQ...");
                FAQ();
                break;
            case 4:
                console.clear();
                console.log("\nSaindo do sistema...");
                continuar = false;
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.");
        }
    }
}