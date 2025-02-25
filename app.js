//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let msgErro = document.getElementById('msgError');
let botaoAdicionar = document.getElementById('btnAdd')
let listaAmigos = document.getElementById('listaAmigos')

// Evento para pressionar "Enter" no campo de input
document.getElementById("amigo").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        adicionarAmigo();  
    }
});

// Evento para o botão de adicionar amigo (clicando no botão)
botaoAdicionar.addEventListener('click', adicionarAmigo);

//fução incluir amigo
function adicionarAmigo () {
    let amigoDigitado = document.getElementById("amigo").value;
        
    if (amigoDigitado === '') {      
        msgErro.style.display ='block';
       
        
    } else {
        amigos.push(amigoDigitado);
        msgErro.style.display ='none';
        document.getElementById("amigo").value = ''
        console.log(amigos)
        atualizaListaAmigo()
    }
}


//função atualizar lista
function atualizaListaAmigo () {
    listaAmigos.innerHTML= "";
    
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
       
    }
}


//sortear Amigo
function sortearAmigo(){
    if (amigos.length === 0){
        alert('Por gentileza informar um amigo antes de sortear!');
    } else {
        listaAmigos.innerHTML = '';
        let amigoSorteado = Math.floor(Math.random()*amigos.length);      
        // Criar um novo item e exibir apenas o sorteio atual
        let li = document.createElement('li');
        li.textContent = "Seu amigo secreto é: " + amigos[amigoSorteado];
        listaAmigos.appendChild(li); 
    }
}

