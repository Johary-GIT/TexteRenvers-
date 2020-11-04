function getvalue() {

    var valeurText = document.getElementById("txt").value;
    console.log(valeurText);
    
    if (valeurText=="") {
        alert("Inserer votre texte dans le champ de saisi!");
    } else {
       var afficherResultat = document.getElementById("message"); 
       afficherResultat.innerHTML = "";
       var textReverse = valeurText.split('').reverse().join('');
       console.log(textReverse);
       afficherResultat.innerHTML = "L\'inverse est = " + textReverse;
    }
        
}