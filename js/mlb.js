const baralho = [
    {
        nome: "mari",
        img: "img/mlb/1-Marinette_Dupain-Cheng.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "mari",
        img: "img/mlb/1-lady.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmil",
        img: "img/mlb/1-Miraculous_da_Joaninha_Carregado.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmil",
        img: "img/mlb/1-Tikki.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "cn",
        img: "img/mlb/2-adrien.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "cn",
        img: "img/mlb/2-chat.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmicn",
        img: "img/mlb/2-Cat_Miraculous.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmicn",
        img: "img/mlb/2-plagg.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "renar",
        img: "img/mlb/3-alya.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "renar",
        img: "img/mlb/3-rena.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmir",
        img: "img/mlb/3-Trixx.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmir",
        img: "img/mlb/3-Miraculous_da_Raposa_(Carregada).png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "carapace",
        img: "img/mlb/4-Nino_Lahiffe.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "carapace",
        img: "img/mlb/4-carapace.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "queen",
        img: "img/mlb/5-chole.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "queen",
        img: "img/mlb/5-Queen_Bee.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmibee",
        img: "img/mlb/5-abelha.jpg",
        br: "img/mlb/verso.png",
        gwi: "img/hp.jpg"
    },
    {
        nome: "kwmibee",
        img: "img/mlb/5-Pollen_Square.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "luka",
        img: "img/mlb/6-Luka_Couffaine.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "luka",
        img: "img/mlb/6-Viperion.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmiss",
        img: "img/mlb/6-Sass.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmiss",
        img: "img/mlb/6-cobra_Miraculous.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "mayura",
        img: "img/mlb/7-mayura.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "mayura",
        img: "img/mlb/7-Nathalie_Sancoeur.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmidu",
        img: "img/mlb/7-Duusu_Square_2.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmidu",
        img: "img/mlb/7-Miraculous_do_Pavão_(carregada).png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "hawk",
        img: "img/mlb/8-hawk.jpg",
        br: "img/mlb/verso.png",
        gwi: "img/hp.jpg"
    },
    {
        nome: "hawk",
        img: "img/mlb/8-Gabriel_Agreste_Square.png",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmino",
        img: "img/mlb/8-nooroo.jpg",
        br: "img/mlb/verso.png"
    },
    {
        nome: "kwmino",
        img: "img/mlb/8-Miraculous_da_Borboleta_(Carregado).png",
        br: "img/mlb/verso.png"
    }
];

baralho.sort(function () {
    return 0.5 - Math.random()
});

const grade = document.getElementById("grade");
let pontuacao = document.getElementById("score");
let ponto;
let escolhidas = [];

function criarGrade() {
    ponto = 0;
    pontuacao.innerText = ponto;
    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = baralho[i].nome;
        carta.src = baralho[carta.id].br;
        carta.alt = baralho[i].alt;
        carta.addEventListener("click", escolherCarta);
        grade.appendChild(carta);
    }

    console.log(baralho)
}

function escolherCarta() {
    let carta = this;
    carta.src = baralho[carta.id].img;
    escolhidas.push(carta);

    if (escolhidas.length == 2) {

        setTimeout(() => {

            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1];

            if (carta1.name == carta2.name) {
                carta1.className += "match";
                carta2.className += "match";
                carta1.removeEventListener("click", escolherCarta);
                carta2.removeEventListener("click", escolherCarta);
                ponto++;
                pontuacao.innerText = ponto;
            }
            else {
                carta1.src = baralho[carta.id].br;
                carta2.src = baralho[carta.id].br;
            }

            if (ponto == baralho.length / 2) {
                alert("Terminou baby!");
                grade.innerHTML = "";
                criarGrade();
            }
            escolhidas = []

        }, 1000)
    }
}