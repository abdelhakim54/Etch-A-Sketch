const container = document.querySelector(".container");
const clearButton = document.querySelector("#clr");
const dimScroll = document.querySelector("input[type=range]");


const labelForDim = document.querySelector("label#dim");
dimScroll.addEventListener("input", (e) => {
    const dim = e.target.value;
    labelForDim.textContent = `Dimension ${dim}x${dim}`
    main(dim, dim)
})


clearButton.addEventListener("click", clear)

function clear(){
    document.querySelectorAll(".item").forEach(cell => cell.style.backgroundColor="White");
}

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
function main(rows = dimScroll.value, cols=dimScroll.value){
    makeGrid(rows, cols);
    addhover();
}

main();