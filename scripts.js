
elemento = document.getElementById('userName')
console.log(elemento.textContent)

// Alterar o conteudo de um elemento (textContent)
// userName.textContent = "Rafael Luz"

// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES

    // function nomeDaFuncao(let argumentos){
    //     // code
    // }

    
    // chamar a função
    // nomeDaFuncao()

    // Alterar cor

    function changeColor(color) {
        card = document.querySelector(".card");
        card.style.backgroundColor = color;
        card.style.transition = '0.3s';
    }

    userImage.addEventListener('mouseover', function() {
        changeColor('#CE171F');
    });

    userImage.addEventListener('mouseout', function() {
        changeColor('');
    });
    
    
    // Função para mostrar alert, sendo chamada com um clique de botão
    iconYoutube.addEventListener('click', function() {
        alert("você quer ir para o youtube?")
    });

//Arrow functions 
    // argumentos => {
    // }

    // (arg1, arg2) => {
    // }

    // () => {
    // }

// ####### CONSUMINDO API DO GITHUB (api.github.com)

async function getProfileGithub() {
    const apiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=cc1ad967'
 
    const response = await fetch(apiUrl);

    if (!response.ok) {
        console.log('Erro ao obter os dados do usuario')
    } else {
        const data = await response.json();

        console.log(data);
        userName.textContent = data.name
        userDescription.textContent = data.bio
        userImage.src = data.avatar_url
        iconGithub.href = data.url
    }
}

getProfileGithub()
