var hps = new Image();
hps.src = "img/hp.jpg";
var hpgif = new Image();
hpgif.src = "img/hp.gif";

function hpMode(){
    window.document['hpo'].src = hpgif.src;
}

var mvs = new Image();
mvs.src = "img/mv.jpg";
var mvsgif = new Image();
mvsgif.src = "img/marvel.gif";

function mvMode(){
    window.document['marvels'].src = mvsgif.src;
}

var mlbs = new Image();
mlbs.src = "img/mlb.jpg";
var mlbsgif = new Image();
mlbsgif.src = "img/mlb.gif";

function mlbMode(){
    window.document['mlb'].src = mlbsgif.src;
}