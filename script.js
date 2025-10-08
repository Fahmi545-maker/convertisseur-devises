//stocke les taux de conversion par rapport à l’Euro
/*let taux = {
    euro: 1,        
    usd: 1.01,
    aud: 1.47
};

let lastEdited = "euro";


function convertir(source) {
    let valeur = parseFloat(document.getElementById(source).value);//récupère la valeur entrée par l’utilisateur
    if (isNaN(valeur)) return;//on arrete si il ya une erreur 


    let enEuro = valeur / taux[source];


    for (let devise in taux) {
        if (devise !== source) {
            document.getElementById(devise).value = (enEuro * taux[devise]).toFixed(2);
        }
    }
}

window.onload = function() {

    ["euro", "usd", "aud"].forEach(devise => {
        document.getElementById(devise).addEventListener("input", () => lastEdited = devise);
    });


    document.getElementById("convertir").addEventListener("click", () => convertir(lastEdited));


    convertir("euro");
};*/
//2eme version 
let taux = {
    euro: 1,
    usd: 1.01,
    aud: 1.47
};

function convertir(source) {
    let valeur = parseFloat(document.getElementById(source).value);
    if (isNaN(valeur)) return;


    let enEuro = valeur / taux[source];


    for (let devise in taux) {
        if (devise !== source) {
            document.getElementById(devise).value = (enEuro * taux[devise]).toFixed(2);
        }
    }
}

window.onload = function() {
    ["euro", "usd", "aud"].forEach(devise => {
        document.getElementById(devise).addEventListener("input", () => convertir(devise));
    });
    convertir("euro");
};
