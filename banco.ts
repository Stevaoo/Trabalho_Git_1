// Commit 15: Função para pressionar Enter para continuar
function pressionarEnterParaContinuar(): void {
    rl.question("Pressione Enter para continuar...");
}
// Commit 17: Chamada para iniciar o sistema
menuInicial();
//

// Commit 16: Adicionando funcionalidade para pressionar Enter
pressionarEnterParaContinuar();

// Commit 18: Adicionando tratamento de erros e validação no processo de login
function EntrarNaConta(): ContaBancaria | null {
    if (contas.length === 0) {
        console.log("Nenhuma conta cadastrada.");
        return null;
    }

    let id = rl.questionInt("Insira o ID da conta: ");
    let senha = rl.questionInt("Insira a senha da conta: ");

    for (let conta of contas) {
        if (conta.Id === id && conta.Senha === senha) {
            console.log(`Bem-vindo(a), ${conta.Nome}!`);
            return conta;
        }
    }

    console.log("ID ou senha incorretos.");
    return null;
}



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

// Commit 20: Finalizando a funcionalidade FAQ
FAQ();


// Commit 21: Adicionando mais interatividade no menu principal
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
}// Commit 22: Continuando a execução do código com o menu inicial
menuInicial();

// Commit 23: Melhorando o menu bancário e opções de conta
function menuBancario(): void {
    console.clear();
    let continuar = true;
    while (continuar) {
        console.log(`\
        ------------------------------------
        ----------- MENU BANRISUL ----------
        ------------------------------------
        - 1. CRIAR NOVA CONTA              -
        - 2. ENTRAR NA CONTA               -
        - 3. VOLTAR AO MENU INICIAL        -
        ------------------------------------`);

        let opcao = rl.questionInt("Escolha uma opcao: ");

        switch (opcao) {
            case 1:
                console.clear();
                let tipo = rl
                    .question(` 
        -------------------------------------------------
        ----------- ESCOLHA SUA OPCAO DE CONTA ----------
        -------------------------------------------------
                        1 - POUPANCA
                        2 - CORRENTE 
                        `)
                    .toLowerCase();
                    if (tipo === "1" || tipo === "2") {
                    let novaConta = criarConta(tipo);
                    contas.push(novaConta);
                    console.clear();
                    }
                break;
            case 2:
                console.clear();
                user = EntrarNaConta(); 
                if (user) {
                    menuConta(user);
                }
                break;
            case 3:
                console.clear();
                console.log("Voltando ao menu inicial...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Commit 24: A função menuConta finalizada e organizada para opções de conta
function menuConta(user: ContaBancaria): void {
    console.clear();
    let continuar = true;
    while (continuar) {
        console.log(`\
        ------------------------------------
        ------------ MENU CONTA ------------
        ------------------------------------
        - 1. VER EXTRATO                   -
        - 2. REALIZAR DEPÓSITO             -
        - 3. REALIZAR SAQUE                -
        - 4. TRANSFERÊNCIA                 -
        - 5. APLICAR JUROS (POUPANÇA)      -
        - 6. SAIR DA CONTA                 -
        ------------------------------------`);

        let opcao = rl.questionInt("Escolha uma opcao: ");

        switch (opcao) {
            case 1:
                user.GerarExtrato();
                break;
            case 2:
                let valorDeposito = rl.questionInt("Valor do depósito: ");
                user.Depositar(valorDeposito);
                break;
            case 3:
                console.clear();
                let valorSaque = rl.questionInt("Valor do saque: ");
                user.Sacar(valorSaque);
                break;
            case 4:
                console.clear()
                let valorTransferencia = rl.questionInt("Valor da transferência: ");
                let idDestino = rl.questionInt("ID da conta de destino: ");
                let contaDestino = contas.find((conta) => conta.Id === idDestino);
                if (contaDestino) {
                    user.Transferir(valorTransferencia, contaDestino);
                } else {
                    console.log("Conta de destino não encontrada.");
                }
                break;
            case 5:
                console.clear();
                if (user instanceof ContaPoupanca) { 
                    let taxa = rl.questionFloat("Taxa de juros (%): ");
                    user.AplicarJuros(taxa);
                } else {
                    console.log("Essa opção está disponível apenas para contas poupança.");
                }
                break;
            case 6:
                console.log("Saindo da conta...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

