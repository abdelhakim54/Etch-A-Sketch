const container = document.querySelector(".container");
const dimButton = document.querySelector(".dim");
const clearButton = document.querySelector(".clr");

dimButton.addEventListener("click", function(){
    const dim = Number(prompt("enter your dimension (100 max)"));
    makeGrid(dim, dim);
    addhover();
});

clearButton.addEventListener("click", function(){
    document.querySelectorAll(".item").forEach(cell => cell.style.backgroundColor="White");
})

function makeGrid(rows, cols) {
    container.textContent = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "item";

      cell.style.width = `${512/cols}px`;
      cell.style.height = `${512/rows}px`;
    };
};

function addhover(){
    const cells = document.querySelectorAll(".item");
    cells.forEach(cell => {
    cell.addEventListener("mouseover", function(){
    cell.style.backgroundColor = "black";
    });
});
}

function dft(){ //the model to display by default
    makeGrid(16,16);
    addhover();
}

dft();