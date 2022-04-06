const btn = document.querySelector('button');
const idFirstName = document.getElementById("idFirstName");
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
    formulaireObjetDelphine.idFirstName = idFirstName.value
    console.log(formulaireObjetDelphine);
}
