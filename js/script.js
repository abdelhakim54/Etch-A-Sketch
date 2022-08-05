const container = document.querySelector(".container");

//this function should be modify later
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "item";
    };
};

makeRows(16, 16)

const cells = document.querySelectorAll(".item");

cells.forEach(cell => {
    cell.addEventListener("mouseover", function(){
        cell.style.backgroundColor = "black";
    });
});