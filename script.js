const bntListar = document.getElementById('BtnGet')
const bntCadastrar = document.getElementById('Btn-cadastrar')
const bntAtualizar = document.getElementById('Btn-atualizar')
const bntApagar = document.getElementById('Btn-apagar')

btnListar.addEventListener('click', async () => {
    const resposta = await fetch('http://localhost:3000/alunos');
    const dados = await resposta.json();
    document.getElementById('lista').textContent = JSON.stringify(dados, null, 2);
});


bntCadastrar.addEventListener('click', async () =>{
    const resposta = await fetch ('http://localhost:3000/alunos', {
        method: 'POST',
        headers: {'content-type':'applications/json'},
        nome: document.getElementById('cad-nome').value, 
        email: document.getElementById('cad-email').value,
        senha: document.getElementById('cad-senha').value,
    })

    const dados = await resposta.json();
    console.log(dados);
});