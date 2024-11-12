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