// - 10-dars
//     - Array, ichma-ich array, array metodlari
//     - For of loopi
//     - Yangi element yaratish va sahifaga qoʻshish
//     - Bozorlik roʻyxati mashqi
//     - Don-don-ziki oʻyini yechimi

// console.log("Defer atribute");
// console.log("Hello world!");
// console.error("Xatolik!");
// console.warn("Ogohlantirish!");
// console.info("Ulug'bek aka Olimxonni mashina urdi dedila!");
// console.debug("Dubegging!");

// Nesting Array
// var arr = [];
// var --> keyword
// arr --> identifier
// = --> equal operator
// [] --> array (value)
// ; --> terminator, semicolon

// var person = [
//     ["firstName", "John"],
//     ["lastName", "Doe"],
//     ["age", 30],
//     ["isMarried", false],
//     ["job", "Frontend Engineer"],
//     ["hobby", "CS:GO", "PUBG", "Fishing", "Hunting"]
// ];

// console.log(person);
// console.log(person[0]);
// console.log(person[0][1]);
// console.log(person[1]);
// console.log(person[1][1]);

// person.push(["address", ["country", "USA"], ["city", "California"], ["street", "Silicon Valley"]]);

// console.log(person);
// console.log(person[0], person[1]);
// console.log(person[6]);
// console.log(person[6][1]);
// console.log(person[6][1][1]);
// console.log(person[6][2]);
// console.log(person[6][2][1]);
// console.log(person[6][3]);
// console.log(person[6][3][1]);

// for(i of person){
//     console.log(i);
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21];

// console.log(arr);

// for(item of arr){
//     if(item % 2 === 0){
//         console.log(item = "Eshmat");
//     } else {
//         console.log(item);
//     }
// }


var elForm = document.querySelector(".form");
var elFormName = document.querySelector(".form-name");
var elFormResult = document.querySelector(".form-result");

var ombor = [];

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  
  // elFormName.value = "";
  // elFormPrice.value = "";
  
  var newProduct = [
    [elFormName.value]
  ]
  
  ombor.push(...newProduct);
  // ...spread operator
  
  // elFormName.value = "";
  // elFormPrice.value = "";
  elFormName.value = null;
  
  console.log(ombor);
  
  // result = result + 
  drawPage();
});

function drawPage(){
  var result = "";
  for(var i = 0; i < ombor.length; i++){
    result += 
    "<div class='list-group-item'>" +
    "<div class='box'>" +
    "<input type='checkbox' class='input-check'>" +
    "<p class='text'>" + ombor[i][0] + "</p>" +
    "</div>" +
    "<div>" +
    "<button class='btn-delete' type='button' onclick='deleteProduct(" + i + ")'>Delete</button>" +
    "</div>" +
    "</div>"
  }
  
  elFormResult.innerHTML = result;
}

function deleteProduct(eshmat) {
  ombor.splice(eshmat, 1);
  drawPage();
}


var elInputCheck = document.querySelector(".input-check");
var elText = document.querySelector(".text");

elInputCheck.addEventListener("click", function () {
  if(elInputCheck.checked){
    elText.style.textDecoration = "line-through";
  } else {
    elText.style.textDecoration = "none";
  }
  console.log(elInputCheck);
  console.log(elInputCheck.checked);
})