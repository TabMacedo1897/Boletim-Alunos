function nomePais() {
    var nomes = document.querySelector("#nomesP").value;
    if (nomes.trim() !== "") {
        var resposta = `O ${nomes}, é ótimo em dar respostas analíticas em sala de aula.<br><br>
        
        O ${nomes} é um aluno super criativo, demonstra altas habilidades em design em sala de aula. Sempre dá boas sugestões para implementar os projetos.<br><br>
        
        O ${nomes} possui erros, mas os mesmos os ajudam a evoluir e a se desenvolver como programador.<br><br>
        
        O ${nomes} nunca desistiu de nenhuma atividade e/ou tarefa durante as nossas aulas.<br><br>
        
        O ${nomes} é um aluno tranquilo para receber feedback's, sempre ouve com bastante atenção a profê.<br><br>
        
        O ${nomes} não apressa os nossos conceitos em sala de aula.<br><br>
        
        O ${nomes} é um ótimo aluno, e vem se dedicado muito durante as aulas. O esforço é o caminho ideal para que ele se desenvolva na programação. Parabéns, ${nomes} continue assim!`;
        
        document.querySelector("#resposta").innerHTML = resposta;
    }
}
