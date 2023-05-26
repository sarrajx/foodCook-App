// const listEl = document.querySelectorAll("form li");

// listEl.forEach((li) => {
//   li.addEventListener("click", () => {
//     console.log("Clicked : ", li.textContent);
//   });
// });
// console.log(listEl);

const tableEl = document.querySelector("table");

let selected;

tableEl.addEventListener("click", (event) => {
  const target = event.target;
  const closeTr = target.closest("tr");

  // if (target.tagName === "TH") {
  //   return;
  // }

  if (target.tagName === "TH") return; //Ignoring TH Element

  if (selected != undefined) {
    selected.classList.remove("active");
  }

  selected = closeTr;

  closeTr.classList.add("active");
  // console.log(closeTr.children[0].innerText);

  // console.log("cliked : ", target);
  alert(`Hello ${closeTr.children[0].innerText}`);
});

//Task:Show a donate page based on toggle
