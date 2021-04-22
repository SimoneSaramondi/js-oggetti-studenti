/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

Creare un array di oggetti di studenti.

Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// PRIMA PARTE

// OGGETTO STUDENTE
var studente = {
    nome: "Simone",
    cognome: "Saramondi",
    eta: 22  
}

// STAMPAGGIO PROPRIETA' OGGETTO STUDENTE
var printer = document.getElementById("studente");

for(var key in studente){
    printer.innerHTML += studente[key] + "<br>";
}


// SECONDA PARTE

// ARRAY DI OGGETTI STUDENTE
var arrOggetti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 22 
    },

    {
        nome: "Luca",
        cognome: "Verdi",
        eta: 22 
    },

    {
        nome: "Paolo",
        cognome: "Gialli",
        eta: 22 
    }
]

// CICLARE SU ARRAY DI OGGETTI E STAMPARE NOME E COGNOME
var stampoStudenti = document.getElementById("studenti");
var i = 0;
for(var key in arrOggetti){
    stampoStudenti.innerHTML += arrOggetti[i].nome + " " + arrOggetti[i].cognome + "<br>";
    i++;
}


// AGGIUNTA NUOVO STUDENTE
var nuovoStudente = {
    nome: prompt("Inserisci il nome dello studente"),
    cognome: prompt("Inserisci il cognome dello studente"),
    eta: parseInt(prompt("Inserisci l'età dello studente"))
}

arrOggetti.push(nuovoStudente);

console.log(arrOggetti);