const btn = document.querySelector('button');
const idFirstName = document.getElementById("idFirstName");
const idLastName = document.getElementById("idLastName");
const idMail = document.getElementById("idMail");
const idPhone = document.getElementById("idPhone");
const post = document.getElementById("post");
const alternance = document.getElementById("alternance");
const stage = document.getElementById("stage");
const idMessage = document.getElementById("idMessage");

const formulaireObjetDelphine = {}
// const chocolat = document.getElementById('chocolat');

// idFirstName.addEventListener('change', (updateValue),
// function updateValue(e){
//     log.textContent = e.target.value;
// })

//fonction formulaireObjetDelphine.idFirstName

btn.addEventListener('click', myFonction);
function myFonction(event){
    event.preventDefault();
    if (
        (formulaireObjetDelphine.idFirstName = idFirstName.value) &&
        (formulaireObjetDelphine.idLastName = idLastName.value) &&
        (formulaireObjetDelphine.idMail = idMail.value) &&
        (formulaireObjetDelphine.idPhone = idPhone.value) &&
        (
            (formulaireObjetDelphine.post = post.value) ||
            (formulaireObjetDelphine.alternance = alternance.value) ||
            (formulaireObjetDelphine.alternance = alternance.value) 
        ) &&
        (formulaireObjetDelphine.idMessage = idMessage.value)
    ){
        console.log(formulaireObjetDelphine);
    }
    
    // formulaireObjetDelphine.idFirstName = idFirstName.value;
    // formulaireObjetDelphine.idLastName = idLastName.value;
    // formulaireObjetDelphine.idMail = idMail.value;
    // formulaireObjetDelphine.idPhone = idPhone.value;
    // formulaireObjetDelphine.post = post.value;
    // formulaireObjetDelphine.alternance = alternance.value;
    // formulaireObjetDelphine.alternance = stage.value;
    // formulaireObjetDelphine.idMessage = idMessage.value;

    // console.log(formulaireObjetDelphine);
}
