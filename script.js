
// EXIBIR MENSAGEM
function bemVindo(){
    console.log("Olá, bem vindo!")
}
bemVindo()


// EXIBIR NOME

function mostraNome(nomeDaPessoa) {

    console.log(nomeDaPessoa)
}
mostraNome("Gabriel")


// NOME, IDADE, ESTILO MÚSICAL

let pessoa = {
    nome: "Gabriel",
    idade: "17 Anos",
    musicaPreferida: "Love Again - the kid laroi"
}

function dados(pessoa){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Musica: ${pessoa.musicaPreferida}`)
}
dados(pessoa)

// FILME, MUSICA

function filmMusic(filme, musica){
    console.log(filme, musica)
}
filmMusic("Continência ao Amor, Love Again")


// TRIPLO DO NUMERO
let x = 5
function triplo(x){
    console.log(x*3)
}
triplo(x)

// TRUE OU FALSE

let minhaVariavel = 15

function trueOrFalse(minhaVariavel){
    console.log(x == 15)
}
trueOrFalse(minhaVariavel)