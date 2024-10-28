const alunos = []

document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault() // evita o envio do formulário

    const name = document.getElementById('name').value
    const age = parseInt(document.getElementById('age').value)

    // verificando se aluno é maior de idade
    const maiorIdade = age >= 18

    // criando objeto aluno
    const aluno = {
        nome: name,
        idade: age,
        maiorIdade: maiorIdade
    };

    // Adicionando aluno a um array
    alunos.push(aluno)

    // dsiplay para exiber os alunos cadastrados na array
    displayAlunos()

    // limpa os campos
    document.getElementById('alunoForm').reset()
});

// função que exibi todos os alunos do array
function displayAlunos() {
    const alunoList = document.getElementById('alunoList')
    alunoList.innerHTML = ''

    alunos.forEach(aluno => {
        const li = document.createElement('li')
        li.textContent = `Nome: ${aluno.nome}, Idade: ${aluno.idade}, ${aluno.maiorIdade ? 'Maior de Idade' : 'Menor de Idade'}`
        alunoList.appendChild(li)
    })
}