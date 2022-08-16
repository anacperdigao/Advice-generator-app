const url = 'https://api.adviceslip.com/advice'
var id = 0
var string = ""

async function conselho(){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        id = data.slip.id;
        string = data.slip.advice;
        document.querySelector(".container__numero-advice").textContent = `Advice #${id}`;
        document.querySelector(".container__conteudo-advice").textContent = string;
    })
}

document.querySelector(".botao").addEventListener('click', conselho);

