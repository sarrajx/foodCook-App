// let inputFood = document.getElementById("input-food");
// let inputBtn = document.getElementById("input-Btn");
// let foodContainer = document.getElementById("food-container");

// const handleInputFood = () => {
//   let newFoodItemEL = document.createElement("li");
//   const div = document.createElement("div");
//   const divBtn = document.createElement("div");

//   let textNode = document.createTextNode(inputFood.value);

//   newFoodItemEL.append(div, divBtn);
//   console.log(newFoodItemEL);
//   //assigning textContent & clasname to newFoodItems

//   div.textContent = inputFood.value;
//   newFoodItemEL.className = "food-item";

//   // divItem.append(textNode);
//   // divRemoveBtn.innerHTML = `<i class="fa fa-times" ></i> `;

//   divBtn.parentElement.setAttribute("onclick", "removeFoodItem(event)");

//   newFoodItemEL.className = "food-items";
//   divBtn.innerHTML = `<i class="fa fa-times" ></i> `;
//   newFoodItemEL.append(divBtn);
//   // list.append(div);
//   // list.append(divBtn);

//   foodContainer.append(newFoodItemEL);
//   // //   foodContainer.list.append(divRemoveBtn);
//   inputFood.value = "";
// };

// inputBtn.addEventListener("click", handleInputFood);

// inputFood.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     handleInputFood();
//   } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
//     //undo Operation
//     inputFood.value = "";
//   }
// });

// // function removeItem(event) {
// //   let existingList = event.target.parentNode.parentElement;

// //   existingList.remove(); //new way
// // }
let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-Btn");
let foodContainer = document.getElementById("food-container");
const noListEl = document.getElementById("no-list");
const foodListState = document.getElementById("food-list-statitcs");

const handleInputFood = () => {
  let list = document.createElement("li");
  let textNode = document.createTextNode(inputFood.value);

  const divItem = document.createElement("div");
  const divRemoveBtn = document.createElement("div");

  list.append(divItem, divRemoveBtn);

  divItem.append(textNode);
  divRemoveBtn.innerHTML = `<i class="fa fa-times" ></i> `;

  divRemoveBtn.parentElement.setAttribute("onclick", " removeItem(event)");

  list.className = "food-items";
  list.append(divItem);
  list.append(divRemoveBtn);

  foodContainer.append(list);
  //   foodContainer.list.append(divRemoveBtn);

  inputFood.value = "";
  reFreshUi();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    //undo Operation
    inputFood.value = "";
  }
});

function removeItem(event) {
  let existingList = event.target.parentNode.parentElement;

  existingList.remove(); //new way
  reFreshUi();
}
function reFreshUi() {
  foodListState.innerText = `You have ${foodContainer.children.length} lists`;

  // if (foodContainer.children.length > 0) {
  //   //Cildren Exist,so dont show no-limites div
  //   noListEl.hidden = true;
  //   foodListState.innerText = `You have ${foodContainer.children.length} lists`;
  // } else {
  //   //children no exist show no-limit div
  //   noListEl.hidden = false;
  //   foodListState.innerText = `You have ${foodContainer.children.length} lists`;
  // }

  //ou can Write better
  foodContainer.children.length > 0
    ? ((noListEl.hidden = true), (foodListState.hidden = false))
    : ((noListEl.hidden = false), (foodListState.hidden = true));
}
