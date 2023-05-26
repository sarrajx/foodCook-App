let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-Btn");
let foodContainer = document.getElementById("food-container");
const noListEl = document.getElementById("no-list");
const foodListState = document.getElementById("food-list-statitcs");

document.addEventListener("DOMContentLoaded", () => {
  //LocalStorage fetch ,draw ui
  const fetchfoodItems = [...JSON.parse(localStorage.getItem("foodItems"))];

  fetchfoodItems.forEach((item) => {
    let list = document.createElement("li");
    let textNode = document.createTextNode(item.foodItem);

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
    // console.log(item.foodItem);
  });
  reFreshUi();

  // console.log(foodItems);
});

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

  //set Local storage
  localStorage.setItem(
    "foodItems",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("foodItems") || "[]"),
      { foodItem: inputFood.value },
    ])
  );

  //Empty
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

//Remove
function removeItem(event) {
  let existingList = event.target.parentNode.parentElement;
  existingList.remove(); //new way

  // console.log(existingList.innerText);

  // remove From Local Storage
  const fetchfoodItems = [...JSON.parse(localStorage.getItem("foodItems"))];

  fetchfoodItems.forEach((item) => {
    if (item.foodItem === existingList.innerText) {
      fetchfoodItems.splice(fetchfoodItems.indexOf(item), 1);
    }
    // console.log(fetchfoodItems.indexOf(item));
    console.log(item.foodItem);
  });
  console.log(existingList.innerText);

  // console.log(fetchfoodItems.indexOf(item));

  localStorage.setItem("foodItems", JSON.stringify(fetchfoodItems));

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
