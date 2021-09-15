const baralho = [
    {
        nome: "hulk",
        img: "img/filmes/2.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "cap1",
        img: "img/filmes/5.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "avengers",
        img: "img/filmes/6.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "cap2",
        img: "img/filmes/9.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "gog",
        img: "img/filmes/10.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "avengers2",
        img: "img/filmes/11.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "homemf",
        img: "img/filmes/12.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "civil",
        img: "img/filmes/13.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "doctor",
        img: "img/filmes/14.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "gog2",
        img: "img/filmes/15.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "spider",
        img: "img/filmes/16.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "pantera",
        img: "img/filmes/18.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "ragnarok",
        img: "img/filmes/17.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "infinity",
        img: "img/filmes/19.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "ultimato",
        img: "img/filmes/22.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "hulk",
        img: "img/filmes/2.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "cap1",
        img: "img/filmes/5.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "avengers",
        img: "img/filmes/6.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "cap2",
        img: "img/filmes/9.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "gog",
        img: "img/filmes/10.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "avengers2",
        img: "img/filmes/11.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "homemf",
        img: "img/filmes/12.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "civil",
        img: "img/filmes/13.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "doctor",
        img: "img/filmes/14.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "gog2",
        img: "img/filmes/15.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "spider",
        img: "img/filmes/16.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "pantera",
        img: "img/filmes/18.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "ragnarok",
        img: "img/filmes/17.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "infinity",
        img: "img/filmes/19.jpg",
        br: "img/hp/verso.png"
    },
    {
        nome: "ultimato",
        img: "img/filmes/22.jpg",
        br: "img/hp/verso.png"
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