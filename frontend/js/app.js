const listaContatos = document.getElementById ("lista-contatos");

fetch("/contatos")
.then(response => response.json ())
.then(contatos => {

    listaContatos.innerHTML = "";

    contatos.forEach (contato =>{
        const artigo = document.createElement("article");

        artigo.classList.add ("contato");

        artigo.innerHTML = 
        <h3>${contato.nome}</h3>

        <p>
            <strong>Telefone:</strong>
            $ {contato.telefone}
            </p>

            <p>
            <strong>E-mail:</strong>
            ${contato.email}
            </p>
            ;

            listaContatos.appendChild(artigo);
    });

    });