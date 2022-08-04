const container = document.querySelector(".container");

for(let i = 0; i<16; i++){
    let item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
}