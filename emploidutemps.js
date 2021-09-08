var nombreHeureTotal=0
var nombreHeure1=0
var nombreHeure2=0
var nombreHeure3=0
var nombreHeure4=0
var Tennis=false
var Basket=false
var Volleyball=false
var Danse=false
function modifie(a){
    var element = document.getElementById(a); //par leur id dans l'HTML
    if (Tennis==true ||Basket==true ||Danse==true || Volleyball==true){
        if (nombreHeureTotal<20 && nombreHeure1<5 && Tennis==true && element.textContent!="Tennis"){
            element.textContent = "Tennis";//Il va afficher # dans la case
            nombreHeureTotal=nombreHeureTotal+1
            nombreHeure1=nombreHeure1+1
            if (nombreHeure1==5){
             alert("vous avez déjà choisi 5 séances de tennis,vous pouvez choisir d'autres activités.")
            }
        }
        if (nombreHeureTotal<20 && nombreHeure2<5 && Basket==true && element.textContent!="Basket"){
            element.textContent = "Basket";
            nombreHeureTotal=nombreHeureTotal+1
            nombreHeure2=nombreHeure2+1
            if (nombreHeure2==5){
                alert("vous avez déjà choisi 5 séances de basket,vous pouvez choisir d'autres activités.")
            }
        }

        if (nombreHeureTotal<20 && nombreHeure3<5 && Danse==true && element.textContent!="Danse"){
            element.textContent = "Danse";
            nombreHeureTotal=nombreHeureTotal+1
            nombreHeure3=nombreHeure3+1
            if (nombreHeure3==5){
                alert("vous avez déjà choisi 5 séances de danse,vous pouvez choisir d'autres activités.")
            }
        }

        if (nombreHeureTotal<20 && nombreHeure4<5 && Volleyball==true && element.textContent!="Volley ball"){
            element.textContent = "Volley ball";
            nombreHeureTotal=nombreHeureTotal+1
            nombreHeure4=nombreHeure4+1
            if (nombreHeure4==5){
                alert("vous avez déjà choisi 5 séances de volley ball,vous pouvez choisir d'autres activités.")
            }
        }
    }
    else{
        alert("Attention! vous devez d'abord choisir une activité")
    }
    
    if (nombreHeureTotal==20){
        alert("Votre emploi du temps est préparé,sauvegardez-le !")
    }

}
function changer1(){
    return Tennis=true,Basket=false,Danse=false,Volleyball=false
}
function changer2(){
    return Basket=true,Tennis=false,Danse=false,Volleyball=false
}
function changer3(){
    return Danse=true,Basket=false,Tennis=false,Volleyball=false
}
function changer4(){
    return Volleyball=true,Basket=false,Danse=false,Tennis=false
}
function sauvegarder(){
    if (nombreHeureTotal==0){
        alert("Vous devez choisir au moins une activité.")
    }
    else{
        window.history.back()
    }
}
