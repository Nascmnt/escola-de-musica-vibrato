const professores = [
    { nome: "Ana Costa", instrumento: "Violão Popular e Clássico", descricao: "Cantora, compositora e produtora musical com 10 anos de experiência. Foca na leitura de partituras e percepção rítmica." },
    { nome: "Lucas Almeida", instrumento: "Guitarra Elétrica", descricao: "Guitarrista com 8 anos de experiência, especializado em rock, blues e metal. Atua como músico de estúdio e professor." },
    { nome: "Marina Torres", instrumento: "Violino", descricao: "Professora com 12 anos de experiência, especialista em música clássica e preparação para audições em orquestras." },
    { nome: "Rafael Mendes", instrumento: "Baixo Elétrico", descricao: "Baixista com 15 anos de atuação em jazz e funk. Foca no desenvolvimento de grooves e improvisação." },
    { nome: "Beatriz Rocha", instrumento: "Violão Infantil", descricao: "Professora com 5 anos de experiência no ensino infantil, usando métodos lúdicos para incentivar o aprendizado." },
    { nome: "Fernando Lopes", instrumento: "Violão e Guitarra", descricao: "Músico com 20 anos de carreira, especialista em rock, pop e sertanejo, com foco em performance e arranjos." },
    { nome: "Clara Nogueira", instrumento: "Violino e Viola", descricao: "Professora com 7 anos de experiência, utiliza o Método Suzuki para desenvolver a percepção auditiva de seus alunos." }
];

const listaProfessores = document.getElementById("lista-professores");
professores.forEach(professor => {
    const professorDiv = document.createElement("div");
    professorDiv.classList.add("professor-card");
    professorDiv.innerHTML = `<h3>${professor.nome}</h3><p><strong>${professor.instrumento}</strong></p><p>${professor.descricao}</p>`;
    listaProfessores.appendChild(professorDiv);
});