/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

let contacts=[
    {
        prenom: "Xavier",
        nom:"Lami"

    },

    {
        prenom:"Jean",
        nom:"Dujardin"
    }
];

do{

console.log("Bienvenue dans le gestionnaire de contact")

console.log("1: Lister les contacts");
console.log("2: Ajouter des contacts");
console.log("0: Quitter");

//1: Fonction qui liste les contacts
//2:Fonction qui permet d'ajouter des contatcs
//3:Fonction qui permet de quitter le programme

var promptOption= prompt("Choisir une option : ");



if(promptOption == 1){
    function lireContact(contact){
        console.log("Voici la liste de tout vos contacts : ");

    
        for(var personne of contacts){
        
        contact = console.log(personne.prenom +' '+ personne.nom);
        }   
        return contact;
    }

    lireContact()
}
if(promptOption == 2){
    function ajoutContact(contact){
        
        var newPrenom = prompt("Prenom : ");
        var newNom = prompt("Nom : "); 

        let newContact={

            prenom:newPrenom,
            nom:newNom

        };
          contacts.push(newContact) ;  

          
          for(let i=0;i<contacts.length;i++)
          {
              
              contacts[i].prenom+' '+contacts[i].nom;
          }
        console.log("Contact ajouter !")
     }
    ajoutContact()
    
    
}
} while(promptOption != 0){
    console.log("Fin du programme")
}





