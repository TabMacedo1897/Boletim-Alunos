function nomePais() {
    var nomes = document.querySelector("#nomesP").value;
    if (nomes.trim() !== "") {
        var resposta = `A ${nomes} é ótima em dar respostas analíticas em sala de aula, sempre muito comunicativa.<br><br>
        
        A ${nomes} é uma aluna super criativa, e demonstra altas habilidades em design em sala de aula. Sempre dá boas sugestões para implementar nos projetos.<br><br>
        
        A ${nomes} possui erros, mas os mesmos a ajudam a evoluir e a se desenvolver como programadora.<br><br>
        
        A ${nomes} nunca desistiu de nenhuma atividade e/ou tarefa durante as nossas aulas.<br><br>
        
        A ${nomes} é um aluna tranquila para receber feedback's, sempre ouve com bastante atenção a profê.<br><br>
        
        A ${nomes} não apressa os nossos conceitos em sala de aula.<br><br>
        
        A ${nomes} é um ótimo aluna, e vem se dedicado muito durante as aulas. O esforço é o caminho ideal para que ela se desenvolva na programação. Parabéns, ${nomes} continue assim!`;
        
        document.querySelector("#resposta").innerHTML = resposta;
    }
}
