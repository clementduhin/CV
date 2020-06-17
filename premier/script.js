// Déclaration de variable
let divAbtey = document.getElementById("abtey");
let divBts = document.getElementById("bts");
let divAmural = document.getElementById("amural");
let divGida = document.getElementById("gida");
let divIrfa = document.getElementById("irfa");

// Récupération des données html initiale
let initHtmlAmural = divAmural.innerHTML;
let initHtmlAbtey = divAbtey.innerHTML;
let initHtmlBts = divBts.innerHTML;
let initHtmlGida = divGida.innerHTML;
let initHtmlIrfa = divIrfa.innerHTML;

// Récupération des style initiaux
let initStyle = divAmural.style;

function abtey() {
    divAbtey.addEventListener('click', function() {
        divAbtey.innerHTML='<h3>Fabrication de chocolat</h3><br><p>Conduite de ligne de moulage</p><p>Coloration de chocolat</p><p>Contrôle de production(cadence, qualité)</p>';
        divAbtey.style.transition='700ms';
        divAbtey.style.flexDirection='column';
        divAbtey.style.lineHeight='1.5rem';
        divAbtey.style.height='250px';
        divAbtey.style.width='250px';
        divAbtey.style.backgroundColor='rgb(169, 85, 0)';

        divAbtey.addEventListener('click', function() {
            divAbtey.innerHTML = initHtmlAbtey;
            divAbtey.style = initStyle;
            divAbtey.style.transition = '700ms';
            abtey();
        });
    });     
}

function bts() {
    divBts.addEventListener('click', function() {
        divBts.innerHTML='<h3>Diplôme Agro-alimentaire</h3><br><p>Cours théoriques et pratiques en conception de produits alimentaire indutriels.</p>';
        divBts.style.flexDirection='column';
        divBts.style.transition='700ms';
        divBts.style.height='250px';
        divBts.style.width='250px';
        divBts.style.backgroundColor='rgb(169, 85, 0)';

        divBts.addEventListener('click', function() {
            divBts.innerHTML = initHtmlBts;
            divBts.style = initStyle;
            divBts.style.transition='700ms';
            bts();  
        });
    });
}

function amural() {
    divAmural.addEventListener('click', function() {
        divAmural.innerHTML='<h3>Fabrication de produits carnés prêt à la consommation</h3><br><p>Gestion de petite équipe</p><p>Démarrage de ligne de production</p><p>Gestion de production (productivité, qualité)</p>';
        divAmural.style.flexDirection='column';
        divAmural.style.transition='700ms';
        divAmural.style.height='250px';
        divAmural.style.width='250px';
        divAmural.style.backgroundColor='rgb(169, 85, 0)';       
        
        divAmural.addEventListener('click', function() {
            divAmural.innerHTML=initHtmlAmural;
            divAmural.style = initStyle;
            divAmural.style.transition='700ms';
            amural();
        });
    });
}

function gida() {
    divGida.addEventListener('click', function() {
        divGida.innerHTML='<h3>Fabrication de bonbons ( confiserie et parapharmacie ) et chocolats</h3><br><p>Gestion de matières premières</p><p>Démarrage et conduite de ligne de production</p><p>Gestion de production (productivité, qualité)</p>';
        divGida.style.flexDirection='column';
        divGida.style.transition='700ms';
        divGida.style.height='250px';
        divGida.style.width='250px';
        divGida.style.backgroundColor='rgb(169, 85, 0)'; 

        divGida.addEventListener('click', function() {
            divGida.innerHTML=initHtmlAmural;
            divGida.style = initStyle;
            divGida.style.transition='700ms';
            gida();
        });
    });
}

function irfa() {
    divIrfa.addEventListener('click', function() {
        divIrfa.innerHTML='<h3>Apprentissage de développement</h3><br><p>HTML CSS</p><p>Javascript</p><p>PHP</p>';
        divIrfa.style.flexDirection='column';
        divIrfa.style.transition='700ms';
        divIrfa.style.height='250px';
        divIrfa.style.width='250px';
        divIrfa.style.backgroundColor='rgb(169, 85, 0)'; 

        divIrfa.addEventListener('click', function() {
            divIrfa.innerHTML=initHtmlIrfa;
            divIrfa.style = initStyle;
            divIrfa.style.transition='700ms';
            irfa();   
        });
    });

}


abtey();
bts();
amural();
gida();
irfa ();