/**
 * Un rivenditore di auto deve poter gestire le vendite e le spese del suo concessionario. Questo viene fatto attraverso un libro contabile
Il libro contiene tutti gli ingressi e le spese
gestire un libro contabile, ogni riga del libro deve avere:
  - descrizione
  - importo
  - data
  - iva 
  - cliente
Inoltre ogni cliente è composto dai campi Nome, cognome, città.
Il rivenditore deve
  - poter aggiungere, modificare e cancellare righe dal libro.
  - poter visualizzare attraverso una selezione: l'intero libro, solo le entrate o solo le uscite.
  - stampare il guadagno giornaliero (ingressi - uscite). Il risultato deve essere colorato rosso se è in perdita, in verde se è in guadagno.
  - stampare tutti i movimenti di un dato cliente in input.
 */

class LibroContabile{
    constructor(descrizione,importo,data,cliente){
        this.descrizione=descrizione;
        this.importo=importo;
        this.iva=this.calcoloIva();
        this.data=data;
        this.cliente=cliente;
    }
    calcoloIva(){
        return (this.importo/100)*22; // Calcola iva dall'importo lordo
    }

}
/**
 * Inoltre ogni cliente è composto dai campi Nome, cognome, città .
 */

 class Cliente{
  constructor(nome, cognome, citta){
      this.nome=nome;
      this.cognome=cognome;
      this.citta=citta;
  }
  stampaNomeCompleto(){
      console.log("Nome: " + this.nome + " Cognome: " + this.cognome);
      return this.nome +" "+ this.cognome; 
  }
}
var cliente1 = new Cliente("Mario","Rossi", "Milano");
var cliente2 = new Cliente("Maria","Bianchi", "Roma");
var cliente3 = new Cliente("Paolo","Verdi", "Firenze");

var clientiArray = [cliente1,cliente2,cliente3];

console.log(clientiArray);

function stampaElenco(array,id){
  var str="";
  array.forEach(element => {
      str += "<tr>";
      str += "<td>" + element.nome +"</td>";
      str += "<td>" + element.cognome +"</td>";
      str += "<td>" + element.citta +"</td>";
      str += "</tr>";
  });
  document.getElementById(id).innerHTML = str;
}

function stampaElencoClienti(){
  stampaElenco(clientiArray,"elencoClienti");
}
window.addEventListener("load", function(){
  stampaElencoClienti();
})

// creare array di righe
var spesa1 = new LibroContabile("pulizia filtro",500,new Date(12/04/2021),cliente1.stampaNomeCompleto());
console.log(spesa1);
var spesa2 = new LibroContabile("aggiornamento software",200,new Date(15/09/2021),cliente2.stampaNomeCompleto());
console.log(spesa2);
var spesa3 = new LibroContabile("controllo dell'olio",500,new Date(12/04/2021),cliente3.stampaNomeCompleto());
console.log(spesa3);

var arraySpese = [spesa1,spesa2,spesa3];
console.log(arraySpese);

function stampaElencoSpese(array,id){
  var str = "";
  array.forEach(el => {
    str += "<tr>";
    str += "<td>" + el.descrizione +"</td>";
      str += "<td>" + el.importo +"</td>";
      str += "<td>" + el.iva +"</td>";
      str += "<td>" + el.data +"</td>";
      str += "<td>" + el.cliente +"</td>";
      str += "</tr>";
  })
  document.getElementById(id).innerHTML = str;
}

function stampaElencoSpeseConId(){
  stampaElencoSpese(arraySpese,"elencoRighe");
}
window.addEventListener("load", function(){
  stampaElencoSpeseConId();
})