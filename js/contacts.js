/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire de contact")

//1: Fonction qui liste les contacts
//2:Fonction qui permet d'ajouter des contatcs
//3:Fonction qui permet de quitter le programme

var promptOption= prompt("Choisir une option : ");

console.log("1: Lister des contacts");
console.log("2: Ajouter des contacts");
console.log("0: Quitter");
/*
const contact ={

    prenom: "Carole",
    nom: "Lévisse",

    listeContact(){

        console.log("Voici la liste de tout vos contacts : ")
        return `Prénom : ${this.prenom}, Nom : ${this.nom}`;
    },

    ajoutContact(){

        if(promptOption === "2"){

            var promptPrenom = prompt("Prenom : ");
            var promptNom = prompt("Nom : ");

            
            this.prenom = promptPrenom;
            this.nom = promptNom;

            

        }

         console.log("Voici votre nouveau contact  : ")
        return `Prénom : ${this.prenom}, Nom : ${this.nom}`;

    }
   
};

console.log(contact.listeContact());
console.log(contact.ajoutContact());
*/

//function listeContact(){  // /!\ AVEC MA FUNCTION MES TABLEAUX NE ME RENVOIENT PAS TOUTES MES VALEURS DE contact /!\

        prenom =["Carole","Mélodie"];
        nom =["Lévisse","Nelsonne"];

        if(promptOption==1){ // Si choix option 1
            console.log("Voici la liste de tout vos contacts : ");
            
            for (let i=0;i<prenom.length;i++){
            
            let contact='Prenom : '+prenom[i]+', '+ 'Nom : '+nom[i];
            //return contact;
            console.log(contact);
            
            }
     
        }
        if(promptOption==2){ // Si choix option 2

            var promptPrenom = prompt("Prenom : ");
            var promptNom = prompt("Nom : ");
        
            prenom.push("Xavier"); // Inserer le promptPrenom dans la derniere position du tableau prenom
            nom.push("Lami");  // Inserer le promptNom dans la derniere position du tableau nom

            console.log(contact)
        } 
         
//}
//console.log(listeContact());






