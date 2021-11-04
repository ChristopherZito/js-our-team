// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team.
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

//array con oggetti(foto,nome,ruolo)
const personal = [
    {
        "foto":"img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo": "Founder Ceo"
    },
    {
        "foto":"img/angela-caroll-chief-editor.jpg",
        "nome": "Anela Carol",
        "ruolo": "Chief Editor"
    },
        
    {
        "foto":"img/walter-gordon-office-manager.jpg",
        "nome": "Walter Gordon",
        "ruolo": "Office Manager"
    },
    {
        "foto":"img/angela-lopez-social-media-manager.jpg",
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager"
    },
    {
        "foto":"img/scott-estrada-developer.jpg",
        "nome": "Scott Sstrada",
        "ruolo": "Developer"
    },
    {
        "foto":"img/barbara-ramos-graphic-designer.jpg",
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer"
    },
]
//output in-page
const page = document.querySelector(".team-container")
let outputTeam = ``;
//selezione elementi array
for(let i = 0; i <personal.length; i++){
    // console.log(personal[i]);
    for(let key in personal[i]){
        // console.log(key, personal[i][key]);
        
        if( [key] == "nome"){
            var nomeTeam = personal[i][key];
            console.log(nomeTeam);
        }
        if( [key] == "foto"){
            var fotoTeam = personal[i][key];
            console.log(fotoTeam);
        }
        if( [key] == "ruolo"){
            var ruoloTeam = personal[i][key];
            console.log(ruoloTeam);
        }
        //inserimento di oggetti in html
        outputTeam = `
            <div class="team-card">
                <div class="card-image">
                    <img src="${fotoTeam}" alt="${nomeTeam}"/>
                </div>
                <div class="card-text">
                    <h3>${nomeTeam}</h3>
                    <p>${ruoloTeam}</p>
                </div>
            </div>`

        
        console.log(outputTeam);
    }
    page.innerHTML += outputTeam
}



//con dati presi dall'html creaiamo un nuovo oggetto e lo inseriemo nell'array
//inseriamo il nuovo oggetto nell'html
